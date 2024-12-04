---
layout: default
title: Laravel Passkeys
---

<h2>Passkeys</h2>

<h3>What are passkeys</h3>
<p>Passkeys are faster and safer than second auth, but its harder to implement. Eitherway I'll show you how to implement this feature.</p> 

<h3>The following is used</h3>
<li>https://laravel.com/docs/11.x/sanctum</li>
<li>https://webauthn-doc.spomky-labs.com/</li>
<li>https://simplewebauthn.dev/docs/packages/browser</li>


<h3>Step 1. Install the following packages</h3>
```
php artisan install:api
php artisan make:model Passkey -f -m -p --resource
php artisan make:policy PasskeyPolicy --model=Passkey
php artisan make:controller Api/PasskeyController
composer require web-auth/webauthn-lib
npm install @simplewebauthn/browser
```


<p>Install alpine.js if you don't have it prebundled with livewire.</p>
```
npm install alpinejs
```


<h3>Step 2. Edit the Api/PasskeyController</h3>
```
<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Webauthn\PublicKeyCredentialCreationOptions;
use Webauthn\PublicKeyCredentialRpEntity;
use Webauthn\PublicKeyCredentialUserEntity;

class PasskeyController extends Controller
{
    public function registerOptions(Request $request)
    {
        $options = new PublicKeyCredentialCreationOptions(
            rp: new PublicKeyCredentialRpEntity(
                name: config('app.name'),
                id: parse_url(config('app.url'), PHP_URL_HOST),
            ),
            user: new PublicKeyCredentialUserEntity(
                name: $request->user()->email,
                id: $request->user()->id,
                displayName: $request->user()->name,
            ),
            challenge: Str::random(32) // Correct challenge field
        );

        return $options; // Add missing semicolon
    }
}
```

<h3>Step 3. Edit resources/routes/api.php</h3>
```
<?php

use App\Http\Controllers\Api\PasskeyController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/passkeys/register', [PasskeyController::class, 'registerOptions'])->middleware('auth:sanctum');

```

<h3>Step 4. Edit resources/js/app.js</h3>
```
import './bootstrap';


import Alpine from 'alpinejs';
import axios from 'axios';
import { startRegistration } from '@simplewebauthn/browser';

window.Alpine = Alpine

document.addEventListener('alpine.init', () => {
    Alpine.data('registerPasskey', () => ({
        async register(){
            const options = await axios.get('/api/passkeys/register');
            const passkey = await startRegistration(options.data)

            console.log(passkey);
        },
    }));
});


Alpine.start();
```

```
```

<p>An alternative way of implementing this is using <a href="https://github.com/asbiin/laravel-webauthn">https://github.com/asbiin/laravel-webauthn</a></p>