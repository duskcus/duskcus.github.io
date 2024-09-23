---
layout: default
title: Laravel Seeders
---

<h2>1.7. ROUTES</h2>
<p>You can make seeders to quickly fill your database with data when developing, this is both useful for deployment as it is for working with others. To make a seeder you need to use the following command, and make sure to CamelCase the name.</p>

<h3>Basic Route</h3>
<div class="codesnippet-wrapper">
  <div class="line-numbers">
</div>
<pre class="codesnippet"><code>Route::get('/home', function () {
    return view('home')
})->name('profile');
;</code></pre></div>

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
