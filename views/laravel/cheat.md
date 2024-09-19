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

<h3>Important Commands:</h3>
<pre class="codesnippet">
<code>php artisan serve
npm run dev
php artisan migrate:fresh --seed
php artisan make:seeder ProductSeeder
php artisan make:model Product --controller --resource --requests --migration --seed</code></pre>
<br>

<h3>Caching Commands:</h3>
<pre class="codesnippet">
<code>php artisan optimize
php artisan cache:clear
php artisan route:clear
php artisan view:clear
php artisan config:clear
php artisan route:cache</code></pre>

<h3>Tech Stack:</h3>
<ul>
  <li><a>Laravel: https://laravel.com/docs/11.x/installation</a></li>
  <li><a>Tailwind CSS: https://tailwindcss.com/docs/guides/laravel</a></li>
  <li><a>Daisy UI: https://daisyui.com/</a></li>
  <li><a>Chart.js https://www.chartjs.org/docs/latest/</a></li>
  <li><a>MySQL: https://www.mysql.com/downloads/</a></li>
  <li><a>Firebase: https://firebase.google.com/</a></li>
  <li><a>Livewire: https://livewire.laravel.com/</a></li>
</ul>


<!-- <button href="/views/laravel/quick_start">Back</button>-->
<!-- <button href="/views/laravel/quick_start">Next</button> -->
