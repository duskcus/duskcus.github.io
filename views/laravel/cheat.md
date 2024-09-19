---
layout: default
title: Laravel Cheat Sheet
---

<h2>Cheat</h2>
<b>Important for database/migrations::</b>
<p>One or many should be the ID in question.</p>
<p>One to many = foreign key</p>
<p>Many to many = binding table</p>

<h3>Important commands:</h3>
<pre class="codesnippet">
<code>php artisan serve
npm run dev
php artisan migrate:fresh --seed
php artisan make:seeder ProductSeeder
php artisan make:model Product --controller --resource --requests --migration --seed</code></pre>

<h3>Caching commands:</h3>
<pre class="codesnippet">
<code>php artisan optimize
php artisan cache:clear
php artisan route:clear
php artisan view:clear
php artisan config:clear
php artisan route:cache</code></pre>


<!-- <button href="/views/laravel/quick_start">Back</button>-->
<!-- <button href="/views/laravel/quick_start">Next</button> -->
