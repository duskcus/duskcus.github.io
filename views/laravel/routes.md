---
layout: default
title: Laravel Seeders
---

<h2>1.7. ROUTES</h2>
<p>You can make seeders to quickly fill your database with data when developing, this is both useful for deployment as it is for working with others. To make a seeder you need to use the following command, and make sure to CamelCase the name.</p>

<h2>Calling Routes in Blade</h2>
<div class="codesnippet-wrapper">
  <div class="line-numbers">
</div>
<pre class="codesnippet"><code>
&#123;&#123;-- For normal routes --&#125;&#125;
&#60; href="&#123;&#123 route('products' &#125;&#125;"></a&#62;
&#123;&#123;-- Routes with parameter --&#125;&#125;
&#60;a href="&#123;&#123 route('products.show', $product->id) &#125;&#125;"></a&#62;</code></pre></div>


<h2>Example Routes:</h2>
<div class="codesnippet-wrapper">
  <div class="line-numbers">
</div>
<pre class="codesnippet"><code><?php

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

// AUTH
Route::get('/login', [AuthController::class, 'login'])->name('login');
Route::get('/register', [AuthController::class, 'register'])->name('register');
</code></pre></div>

<h2>All options</h2>

<h3>Basic Route</h3>
<div class="codesnippet-wrapper">
  <div class="line-numbers">
</div>
<pre class="codesnippet"><code>Route::get('/', function () {
    return view('index');
})->name('home');</code></pre></div>


<h3>When Using Functions Call the Controller with Use</h3>
<div class="codesnippet-wrapper">
  <div class="line-numbers">
</div>
<pre class="codesnippet"><code>use App\Http\Controllers\ProductController;</code></pre></div>


<h3>Route with Function</h3>
<div class="codesnippet-wrapper">
  <div class="line-numbers">
</div>
<pre class="codesnippet"><code>Route::get('/login', [AuthController::class, 'login'])->name('login');</code></pre></div>


<h3>Resource Route</h3>
<div class="codesnippet-wrapper">
  <div class="line-numbers">
</div>
<pre class="codesnippet"><code>Route::resource('posts', PostController::class);</code></pre></div>


<h3>Route with Parameters</h3>
<div class="codesnippet-wrapper">
  <div class="line-numbers">
</div>
<pre class="codesnippet"><code>// Required parameter
Route::get('/user/{id}', function ($id) {
    return 'User '.$id;
});

// Optional parameter
Route::get('/user/{name?}', function ($name = 'Guest') {
    return 'Hello, '.$name;
});</code></pre></div>


<h3>Route with Middleware</h3>
<div class="codesnippet-wrapper">
  <div class="line-numbers">
</div>
<pre class="codesnippet"><code>Route::get('/admin', function () {
    return 'Admin Page';
})->middleware('auth');</code></pre></div>


<h3>Route with Middleware</h3>
<div class="codesnippet-wrapper">
  <div class="line-numbers">
</div>
<pre class="codesnippet"><code>Route::get('/admin', function () {
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
});</code></pre></div>
