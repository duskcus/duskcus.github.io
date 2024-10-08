---
layout: default
title: Laravel Cheat Sheet
---

<h2>CHEATSHEET</h2>
<h3>Important for database/migrations:</h3>
<p>Every unique customer can buy multiple products = One to many = foreign key</p>
<p>Multiple products can have the same multiple ingredients = Many to many = binding table</p>

<h3>Important Commands:</h3>
<div class="codesnippet-wrapper">
  <div class="line-numbers">
</div>
<pre class="codesnippet">
<code>php artisan serve
npm run dev
php artisan migrate:fresh --seed
php artisan make:model Product --controller --resource --requests --migration --seed
php artisan make:livewire componentName</code></pre></div>

<h3>Caching Commands:</h3>
<div class="codesnippet-wrapper">
  <div class="line-numbers">
</div>
<pre class="codesnippet">
<code>php artisan optimize
php artisan cache:clear
php artisan route:clear
php artisan view:clear
php artisan config:clear
php artisan route:cache</code></pre></div>

<h3>Tech Stack:</h3>
<p>Laravel: <a href="https://laravel.com/docs/11.x/installation">https://laravel.com/docs/11.x/installation</a></p>
<p>Tailwind CSS: <a href="https://tailwindcss.com/docs/guides/laravel">https://tailwindcss.com/docs/guides/laravel</a></p>
<p>Daisy UI: <a href="https://daisyui.com/">https://daisyui.com/</a></p>
<p>Chart.js <a href="https://www.chartjs.org/docs/latest/">https://www.chartjs.org/docs/latest/</a></p>
<p>MySQL: <a href="https://www.mysql.com/downloads/">https://www.mysql.com/downloads/</a></p>
<p>Livewire: <a href="https://livewire.laravel.com/">https://livewire.laravel.com/</a></p>

<h3>Laravel Security:</h3>
<p>Gate = Static admin and roles.</p>
<p>Laravel Sanctum = Lightweight API tokens for singlepage applications.</p>
<p>Laravel Passport = Auth0 and 3rd party integrations.</p>
<p>Laravel TwoFactor = Easy and safe implemntation.</p>
<p>Laravel Passkey = Modern solution, but unforgiving if you're a bad programmer.</p>
<p>Jetstream = Bloated with ratchet components.</p>
<p>Breeze = Not as flexibel, and it is quite easy to setup normal authorisation.</p>

<!-- <button href="/views/laravel/quick_start">Back</button>-->
<!-- <button href="/views/laravel/quick_start">Next</button> -->
