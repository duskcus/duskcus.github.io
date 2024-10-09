---
layout: default
title: Svelte Cheat Sheet
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


<h3>Tech Stack:</h3>
<p>SvelteKit: <a href="https://laravel.com/docs/11.x/installation">https://laravel.com/docs/11.x/installation</a></p>
<p>Tailwind CSS: <a href="https://tailwindcss.com/docs/guides/laravel">https://tailwindcss.com/docs/guides/laravel</a></p>
<p>MySQL: <a href="https://www.mysql.com/downloads/">https://www.mysql.com/downloads/</a></p>

<h3>To many good component libraries</h3>
<p>SkeletonUI: <a href="https://www.skeleton.dev/">https://www.skeleton.dev/</a></p>
<p>Daisy UI: <a href="https://daisyui.com/">https://daisyui.com/</a></p>
<p>Flowbite: <a href="https://flowbite-svelte.com/">https://flowbite-svelte.com/</a></p>
