---
layout: default
title: Laravel Cheat Sheet
---

<h2>Cheat</h2>
<h3>Important for database/migrations:</h3>
<p>One or many should be the ID in question.</p>
<p>One to many = foreign key</p>
<p>Many to many = binding table</p>
<br>

<h3>Important commands:</h3>
<pre class="codesnippet">
<code>php artisan serve
npm run dev
php artisan migrate:fresh --seed
php artisan make:seeder ProductSeeder
php artisan make:model Product --controller --resource --requests --migration --seed</code></pre>
<br>

<h3>Caching commands:</h3>
<pre class="codesnippet">
<code>php artisan optimize
php artisan cache:clear
php artisan route:clear
php artisan view:clear
php artisan config:clear
php artisan route:cache</code></pre>

<h3>Tech Stack:</h3>
<ul>
  <li>Laravel: https://laravel.com/docs/11.x/installation</li>
  <li>Tailwind CSS: https://tailwindcss.com/docs/guides/laravel</li>
  <li>Daisy UI: https://daisyui.com/</li>
  <li>Chart.js https://www.chartjs.org/docs/latest/</li>
  <li>MySQL: https://www.mysql.com/downloads/</li>
  <li>Firebase: https://firebase.google.com/</li>
  <li>Livewire: https://livewire.laravel.com/</li>
</ul>


<!-- <button href="/views/laravel/quick_start">Back</button>-->
<!-- <button href="/views/laravel/quick_start">Next</button> -->
