---
layout: default
title: Laravel Passkeys
---

<h2>Passkeys</h2>

<h3>What are passkeys</h3>
<p>Passkeys is pretty much like second auth without the manual numeric code insertion which saves you a few seconds. Eitherway I'll show you how to implement this feature. For this feature I'd like to use laravel-webauthn as I find the package quite pleasing to use.</p>
<p><a href="https://github.com/asbiin/laravel-webauthn">https://github.com/asbiin/laravel-webauthn</a></p>

<h3>Parts</h3>
<li>Javascript/Package inclusion</li>
<li>Form</li>
<li>Endpoints</li>
<li>Middleware in routes</li>

<h3>Step 1. Create a one to many</h3>
<p>Run the following command in your terminal.</p>
```
php artisan install:api
composer require web-auth/webauthn-lib
php artisan make:model Passkey -f -m -p --resource
php artisan make:policy PasskeyPolicy --model=Passkey
php artisan make:controller Api/PasskeyController
```

```
php artisan make:provider AuthServiceProvider
```

<h3>Step 2. Edit PasskeyController</h3>
<p>Api/PasskeyController</p>
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

<h3>Step 2. Edit api.php</h3>
<p>api.php</p>
```
<?php

use App\Http\Controllers\Api\PasskeyController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/passkeys/register', [PasskeyController::class, 'registerOptions'])->middleware('auth:sanctum');

```

<h3>Step 2. Edit js/app.js</h3>
<p>js/app.js</p>
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
npm install @simplewebauthn/browser
```

https://laravel.com/docs/11.x/sanctum
https://webauthn-doc.spomky-labs.com/
https://simplewebauthn.dev/docs/packages/browser

```
```