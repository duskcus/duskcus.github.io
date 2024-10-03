---
layout: default
title: Laravel Charts
---

<h2>INTRODUCTION</h2>

<h3>What is Laravel?</h3>
<p>Laravel is a great framework for quickly building web apps, with a large ecosystem. While it's slightly slower than some frameworks, the difference is often negligible. It's ideal for most projects unless when N2 notation becomes critical, which in 99% of cases it won't.</p>



// LOGIN
Route::get('/login', [AuthController::class, 'showLoginForm'])->name('login');
Route::post('/login', [AuthController::class, 'login']);

// REGISTER
Route::get('/register', [AuthController::class, 'showRegistrationForm'])->name('register');
Route::post('/register', [AuthController::class, 'register']);

// LOGOUT
Route::get('/logout', [AuthController::class, 'logout'])->name('logout');

Route::get('/api', [ProductController::class, 'api']);
