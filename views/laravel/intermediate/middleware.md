---
layout: default
title: Laravel Middleware
---

<p>Middleware is basicly a function that happens before you enter the page. It could basicly be the same as some code that runs in a controller function but before the return. Another benefit of using middleware is the reusibility as your able to mass asign the function to routes.</p>

<p>Laravel has specific naming schemes for policies for auto detection, it often uses a model reference and ends with Policy.</p>

```
php artisan make:middleware AuthMiddleware
```

<p>Add your middleware to your bootstrap/app.php file.</p>

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
                // return redirect('/login');
                // abort(403); // Redirect to dashboard if authenticated
                abort(404); // Fake message for unauthorized people, but mostly hackers
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
