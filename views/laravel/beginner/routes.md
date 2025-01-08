---
layout: default
title: Laravel Routes
---

<h2>1.7. ROUTES</h2>
<p>You can make seeders to quickly fill your database with data when developing, this is both useful for deployment as it is for working with others. To make a seeder you need to use the following command, and make sure to CamelCase the name.</p>

<h3>For Normal Routes:</h3>

```
<a href="{{ route('products' }}">InsertRouteName</a>
```


<h3>Routes with Parameter:</h3>

```
<a href="{{ route('products.show', $products>id) }}">InsertRouteName</a>
```


<h3>Example Routes:</h3>

```
<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\AuthController;

Route::get('/', function () {
    return view('index');
})->name('home');

Route::get('/about', function () {
    return view('about');
})->name('about');

Route::get('/contact', function () {
    return view('contact');
})->name('contact');

// RESOURCES
Route::resource('products', ProductController::class);
```


<h2>All options:</h2>

<h3>Basic Route:</h3>

```
Route::get('/', function () {
    return view('index');
})->name('home');
```


<h3>When Using Functions Call the Controller with Use:</h3>

```
use App\Http\Controllers\ProductController;
```


<h3>Route with Function:</h3>
```
Route::get('/login', [AuthController::class, 'login'])->name('login');
```


<h3>Resource Route:</h3>

```
Route::resource('products', PostController::class); // Makes all routes normally used in a CRUD
Route::apiResource('products', PostController::class); // Same as resource without an create and edit, so mostly useful for dynamic modal forms.
```


<h3>Route with Parameters:</h3>

```
// Required parameter
Route::get('/user/{id}', function ($id) {
    return 'User '.$id;
});

// Optional parameter
Route::get('/user/{name?}', function ($name = 'Guest') {
    return 'Hello, '.$name;
});
```


<h3>Route with Middleware:</h3>

```
Route::get('/admin', function () {
    return 'Admin Page';
})->middleware('auth');
```


<h3>Route with Middleware:</h3>

```
Route::get('/admin', function () {
    return 'Admin Page';
})->middleware('auth');

// Middleware on a group
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        return 'Dashboard';
    });
    Route::get('/settings', function () {
        return 'Settings';
    });
});

// Middleware on a group with names makes admin/dashboard and admin/users
Route::prefix('admin')->group(function () {
    Route::get('/dashboard', function () {
        return 'Admin Dashboard';
    });
    Route::get('/users', function () {
        return 'Manage Users';
    });
});
```


<h3>Redirect:</h3>

```
Route::get('/dashboard', function () {
    return redirect('/home/dashboard');
});
```

<a href="/views/laravel/controller"><button>Back</button></a>
