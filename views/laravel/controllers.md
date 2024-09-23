---
layout: default
title: Laravel Controllers
---

<h2>1.3 CONTROLLERS</h2>

<h3>Creating Controllers</h3>
<p>To simply make a controller use this command:</p>
<div class="codesnippet-wrapper">
  <div class="line-numbers">
</div>
<pre class="codesnippet"><code>php artisan make:controller ProductController</code></pre></div>

<p>Laravel also has an alternative option for CRUD applications, here routes will automaticly created.</p>
<div class="codesnippet-wrapper">
  <div class="line-numbers">
</div>
<pre class="codesnippet"><code>php artisan make:controlelr ProductController –-resource</code></pre></div>


<h3>Controllers Logic</h3>
<p>For this example we will look at a resource controlller:</p>
<div class="codesnippet-wrapper">
  <div class="line-numbers">
</div>
<pre class="codesnippet"><code>use App\Model\Product;</code></pre></div>


<a href="/views/laravel/models"><button>Back</button></a>
<a href="/views/laravel/seeders"><button>Next</button></a>
