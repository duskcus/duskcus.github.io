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
<p>“projectname” can be changed to desired name.</p>
```
php artisan install:api
composer require web-auth/webauthn-lib
```

```
php artisan make:provider AuthServiceProvider
```

```
php artisan make:policy PasskeyPolicy --model=Passkey
```

```
php artisan make:controller Api/PasskeyController
```

Api/PasskeyController
```
<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PasskeyController extends Controller
{
    public function registerOptions() {}
}

```

api.php
```
<?php

use App\Http\Controllers\Api\PasskeyController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/passkeys/register', [PasskeyController::class, 'registerOptions'])->middleware('auth:sanctum');

```