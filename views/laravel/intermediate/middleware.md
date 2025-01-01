---
layout: default
title: Laravel Middleware
---

<p>Middleware is basicly a function that happens before you enter the page. It could basicly be the same as some code that runs in a controller function but before the return. Another benefit of using middleware is the reusibility as your able to mass asign the function to routes.</p>

<p>Laravel has specific naming schemes for policies for auto detection, it often uses a model reference and ends with Policy.</p>

```
php artisan make:middleware AuthMiddleware
```

<p>This code makes it so if your not logged in you get send to the login page on the protected urls.</p>

```
<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;

class AuthMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // If the user is not authenticated, redirect them to the login page
        if (!Auth::check()) {
            // Check if the request is for a route other than login or register
            if (!$request->is('login') && !$request->is('register')) {
                return redirect('/login');
            }
        } else {
            // If the user is authenticated, redirect to the dashboard if accessing login or register
            if ($request->is('login') || $request->is('register')) {
                return redirect('/dashboard');
            }
        }

        // Continue with the request if no conditions are met
        return $next($request);
    }
}

```

<p>Add your middleware to your bootstrap/app.php file.</p>

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
        $middleware->alias([
            'AuthMiddleware' => \App\Http\Middleware\AuthMiddleware::class,
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();
```
