---
layout: default
title: Laravel Cheat Sheet
---

<h2>CHEATSHEET</h2>
<h3>Important for database/migrations:</h3>
<p>Every unique customer can buy multiple products = One to many = foreign key</p>
<p>Multiple products can have the same multiple ingredients = Many to many = binding table</p>

<h3>Important Commands:</h3>

```
<code>php artisan key:generate
php artisan serve
npm run dev
php artisan migrate:fresh --seed
php artisan make:model Product --controller --resource --requests --migration --seed
php artisan make:livewire componentName
php artisan make:middleware ProductMiddleware
php artisan make:policy ProductPolicy --model=Product
```

<h3>Caching Commands:</h3>
```
<code>php artisan optimize
php artisan cache:clear
php artisan route:clear
php artisan view:clear
php artisan config:clear
php artisan route:cache
```

<h3>Necessary Parts of the Application:</h3>
<li>Making CRUDS</li>
<li>Security</li>

<h3>Tech Stack:</h3>
<p>Laravel: <a href="https://laravel.com/docs/11.x/installation">https://laravel.com/docs/11.x/installation</a></p>
<p>Tailwind CSS: <a href="https://tailwindcss.com/docs/guides/laravel">https://tailwindcss.com/docs/guides/laravel</a></p>
<p>MySQL: <a href="https://www.mysql.com/downloads/">https://www.mysql.com/downloads/</a></p>
<p>Daisy UI: <a href="https://daisyui.com/">https://daisyui.com/</a></p>
<p>Livewire or either Alpine.js</p>

<h3>Laravel Security Packages:</h3>
<p>Gate = Static admin and roles.</p>
<p>Laravel Fortify = Breeze without the garbage files, pretty good.</p>
<p>Laravel Sanctum = Lightweight API tokens for singlepage applications.</p>
<p>Laravel Passport = Oauth and 3rd party integrations.</p>
<p>Laravel Passkey = Modern solution, but unforgiving if you're a bad programmer.</p>

<h3>My Biased Opnions</h3>
<p>Create reference tables, don't use enums</p>
<p>Only make AJAX calls using fetch-api or axiom</p>
<p>Use Livewire for a stepper authentication</p>
<p>For flexibility write your own authentication / authorisation</p>

<!-- <button href="/views/laravel/quick_start">Back</button>-->
<!-- <button href="/views/laravel/quick_start">Next</button> -->
