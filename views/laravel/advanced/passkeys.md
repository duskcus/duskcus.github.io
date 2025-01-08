---
layout: default
title: Laravel Passkeys
---

<h2>Passkeys</h2>
<h3>What are passkeys?</h3>
<p>Passkeys are faster and safer than second auth, but its harder to implement. Eitherway I'll show you how to implement this feature.</p>

<h3>The following is used</h3>
<li><a href="https://laravel.com/docs/11.x/sanctum/">https://laravel.com/docs/11.x/sanctum/</a></li>
<li><a href="https://webauthn-doc.spomky-labs.com/">v5: https://webauthn-doc.spomky-labs.com/</a></li>
<li><a href="https://simplewebauthn.dev/">v5.0.1: https://simplewebauthn.dev/</a></li>
<p>You also need a https host, that isn't localhost. I'll use ngrok for this.</p>

<p>When using ngrok you probably want to edit your app/Providers/AppServiceProvider.php</p>
```
use Illuminate\Support\Facades\URL;

public function boot()
    {
    if (app()->environment('local')) {
    URL::forceScheme('https');
    }
}
```

<p>Also make sure to have the right link in the APP_URL otherwise passkeys can break on register and or authentication</p>

```
APP_URL=https://ngroklink
```


<h3>Step 1. Install the following packages</h3>
```
php artisan install:api
php artisan make:model Passkey -f -m -p --resource
php artisan make:controller Api/PasskeyController
composer require web-auth/webauthn-lib
npm install @simplewebauthn/browser
```

<p>Optionally install alpine.js if you want to use it.</p>

```
npm install alpinejs
```

<p>Or install livewire instead as it is bundled with alpine.js.</p>

```
composer require livewire/livewire
```

<p>To use alpine with livewire installed you need this tag in your blade file.</p>

```
@livewireScripts
```

<p>To debug whether alpine is running you can simply typ this in dev tools console.</p>

```
Alpine
```

<p>In bootstrap/app you would like to add middleware->statefulApi</p>
```
<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        api: __DIR__.'/../routes/api.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->statefulApi();
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();
```

<h3>Step 2. Edit the passkey migration</h3>

```
<?php

use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('passkeys', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(User::class)->constrained()->cascadeOnDelete();
            $table->text('name');
            $table->binary('credential_id');
            $table->json('data');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('passkeys');
    }
};
```


<h3>Step 3. Edit Controllers/PasskeyController</h3>

```
<?php

namespace App\Http\Controllers;

use App\Models\Passkey;
use App\Support\JsonSerializer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Session;
use Illuminate\Validation\ValidationException;
use Webauthn\AuthenticatorAssertionResponse;
use Webauthn\AuthenticatorAssertionResponseValidator;
use Webauthn\AuthenticatorAttestationResponse;
use Webauthn\AuthenticatorAttestationResponseValidator;
use Webauthn\CeremonyStep\CeremonyStepManagerFactory;
use Webauthn\PublicKeyCredential;

class PasskeyController extends Controller
{
    public function authenticate(Request $request)
    {
        $data = $request->validate(['answer' => ['required', 'json']]);

        $publicKeyCredential = JsonSerializer::deserialize($data['answer'], PublicKeyCredential::class);

        if (! $publicKeyCredential->response instanceof AuthenticatorAssertionResponse) {
            return to_route('/user/profile')->withFragment('managePasskeys');
        }

        $passkey = Passkey::firstWhere('credential_id', $publicKeyCredential->rawId);

        if (! $passkey) {
            throw ValidationException::withMessages(['answer' => __('passkeys.non_exists')]);
        }

        try {
            $publicKeyCredentialSource = AuthenticatorAssertionResponseValidator::create(
                (new CeremonyStepManagerFactory)->requestCeremony()
            )->check(
                publicKeyCredentialSource: $passkey->data,
                authenticatorAssertionResponse: $publicKeyCredential->response,
                publicKeyCredentialRequestOptions: Session::get('passkey-authentication-options'),
                host: $request->getHost(),
                userHandle: null,

            );
        } catch (\Throwable $e) {
            throw ValidationException::withMessages([
                'answer' => __('passkeys.non_exists'),
            ]);
        }

        $passkey->update(['data' => $publicKeyCredentialSource]);

        Auth::loginUsingId($passkey->user_id);

        $request->session()->regenerate();

        return to_route('/user/profile');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validateWithBag('createPasskey', [
            'name' => ['required', 'string', 'max:255'],
            'passkey' => ['required', 'json'],
        ]);

        $publicKeyCredential = JsonSerializer::deserialize($data['passkey'], PublicKeyCredential::class);

        if (! $publicKeyCredential->response instanceof AuthenticatorAttestationResponse) {
            return to_route('login');
        }

        try {
            $publicKeyCredentialSource = AuthenticatorAttestationResponseValidator::create(
                (new CeremonyStepManagerFactory)->requestCeremony()
            )->check(
                authenticatorAttestationResponse: $publicKeyCredential->response,
                publicKeyCredentialCreationOptions: Session::get('passkey-registration-options'),
                host: $request->getHost(),

            );
        } catch (\Throwable $e) {
            throw ValidationException::withMessages([
                'name' => __('passkeys.invalid'),
            ])->errorBag('createPasskey');
        }

        $request->user()->passkeys()->create([
            'name' => $data['name'],
            'data' => $publicKeyCredentialSource,
        ]);

        return to_route('/user/profile')->withFragment('managePasskeys');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Passkey $passkey)
    {
        Gate::authorize('delete', $passkey);

        $passkey->delete();

        return to_route('/user/profile')->withFragment('managePasskeys');
    }
}

```


<h3>Step 4. Edit the Controllers/Api/PasskeyController</h3>

```
<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Passkey;
use App\Support\JsonSerializer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;
use Webauthn\PublicKeyCredentialCreationOptions;
use Webauthn\PublicKeyCredentialRequestOptions;
use Webauthn\PublicKeyCredentialRpEntity;
use Webauthn\PublicKeyCredentialSource;
use Webauthn\PublicKeyCredentialUserEntity;

class PasskeyController extends Controller
{
    public function registerOptions(Request $request)
    {
        $request->validate(['name' => ['required', 'string', 'max:255']]);

        $options = new PublicKeyCredentialCreationOptions(
            rp: new PublicKeyCredentialRpEntity(
                name: config('app.name'),
                id: parse_url(config('app.url'), PHP_URL_HOST)
            ),
            user: new PublicKeyCredentialUserEntity(
                name: $request->user()->email,
                id: $request->user()->id,
                displayName: $request->user()->name,
            ),
            challenge: Str::random(),
        );
        Session::flash('passkey-registration-options', $options);

        return JsonSerializer::serialize($options);
    }

    public function authenticateOptions(Request $request)
    {
        $allowedCredentials = $request->query('email') ? Passkey::whereRelation('user', 'email', $request->email)
            ->get()
            ->map(fn(Passkey $passkey) => $passkey->data)
            ->map(fn(PublicKeyCredentialSource $publicKeyCredentialSource) => $publicKeyCredentialSource->getPublicKeyCredentialDescriptor())
            ->all()
            : [];

        $options = new PublicKeyCredentialRequestOptions(
            challenge: Str::random(),
            rpId: parse_url(config('app.url'), PHP_URL_HOST),
            allowCredentials: $allowedCredentials,
        );

        Session::flash('passkey-authentication-options', $options);

        return JsonSerializer::serialize($options);
    }
}
```


<h3>Step 5. Edit resources/routes/api.php</h3>

```
<?php

use App\Http\Controllers\Api\PasskeyController;
use Illuminate\Support\Facades\Route;

Route::get('/passkeys/register', [PasskeyController::class, 'registerOptions'])->middleware('auth:sanctum');

Route::get('/passkeys/authenticate', [PasskeyController::class, 'authenticateOptions']);
```


<h3>Step 6. Edit resources/js/app.js</h3>

```
import './bootstrap'
import { browserSupportsWebAuthn, startAuthentication, startRegistration } from '@simplewebauthn/browser'
// import Alpine from 'alpinejs' // Uncomment if your using alpine without livewire
// import { passkeyFailed } from './lang' // Example adding translations

// window.Alpine = Alpine // Uncomment if your using alpine without livewire

document.addEventListener('alpine:init', () => {
    Alpine.data('registerPasskey', () => ({
        name: '',
        errors: null,
        browserSupportsWebAuthn,
        async register(form) {
            const locale = document.documentElement.getAttribute('lang') ?? 'en'

            this.errors = null

            if (!this.browserSupportsWebAuthn()) {
                return
            }

            const options = await axios.get('/api/passkeys/register', {
                params: { name: this.name },
                validateStatus: (status) => [200, 422].includes(status),
            })

            if (options.status === 422) {
                this.errors = options.data.errors
                return
            }

            let passkey

            try {
                passkey = await startRegistration({
                    optionsJSON: options.data,
                    useAutoRegister: false
                });
            } catch (e) {
                this.errors = { name: ['Passkey creation failed. Please try again.'] };
                // this.errors = { name: [passkeyFailed[locale]] } // Example adding translations
                return
            }

            form.addEventListener('formdata', ({ formData }) => {
                formData.set('passkey', JSON.stringify(passkey))
            })

            form.submit()
        },
    }))

    Alpine.data('authenticatePasskey', () => ({
        showPasswordField: !browserSupportsWebAuthn(),
        email: '',
        async authenticate(form, manualSubmission = false) {
            if (this.showPasswordField) {
                return form.submit()
            }

            let answer

            try {
                const options = await axios.get('/api/passkeys/authenticate', {
                    params: { email: this.email },
                })
                answer = await startAuthentication({
                    optionsJSON: options.data,
                    useAutoRegister: false
                });
            } catch (e) {
                if (manualSubmission) {
                    this.showPasswordField = true
                }

                return
            }

            form.action = '/passkeys/authenticate'
            form.addEventListener('formdata', ({ formData }) => {
                formData.set('answer', JSON.stringify(answer))
            })

            form.submit()
        },
    }))
})

// Alpine.start()
```


<h3>Checklist</h3>
<li>Packages/dependencies</li>
<li>Migration tables</li>
<li>CRUD for passkeys</li>
<li>Endpoint Resource Controller</li>
<li>Sanctum API controller</li>
<li>Routes for web and api</li>
<li>app.js code</li>
<li>Correct forms</li>

<br>

<p>An alternative way of implementing this is using <a href="https://github.com/asbiin/laravel-webauthn">https://github.com/asbiin/laravel-webauthn</a></p>
<p>This one looks promising but is still in development <a href="https://github.com/spatie/laravel-passkeys">https://github.com/spatie/laravel-passkeys</a></p>
