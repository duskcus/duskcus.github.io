---
layout: default
title: Laravel Middleware
---

<p>Middleware is basicly a function that happens before you enter the page. It could basicly be the same as some code that runs in a controller function but before the return. Another benefit of using middleware is the reusibility as your able to mass asign the function to routes.</p>

<p>Laravel has specific naming schemes for policies for auto detection, it often uses a model reference and ends with Policy.</p>

```
php artisan make:middleware AuthenticationMiddleware
```

<p>Add your middleware to your bootstrap/app.php file.</p>

```
<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(**DIR**))
->withRouting(
web: **DIR**.'/../routes/web.php',
api: **DIR**.'/../routes/api.php',
commands: **DIR**.'/../routes/console.php',
health: '/up',
)
->withMiddleware(function (Middleware $middleware) {
$middleware->alias([
'AuthenticationMiddleware' => \App\Http\Middleware\AuthenticationMiddleware::class,
]);
})
->withExceptions(function (Exceptions $exceptions) {
//
})->create();

```
