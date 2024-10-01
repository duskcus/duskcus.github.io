---
layout: default
title: Laravel Livewire
---

<p>I personally think Livewire is somewhat ratchet. Yet I feel like it is definetly benificial to write in a single language if your not experienced. So what does it do? Well in my biased opinion it doesn't do anything that can't be done normally. So why use it? If you want to code in PHP and do an AJAX request to live update something without refreshing the page. In a situation where you want responsive UI, I recommend just using Alpine.js instead, but if you just want to stick to PHP then do as you please.</p>

<h2>Installing Livewire</h2>
<p>Livewire is a bundled install with Alpine.js</p>
<div class="codesnippet-wrapper">
  <div class="line-numbers">
</div>
<pre class="codesnippet"><code>composer require livewire/livewire</code></pre></div>

<h3>Creating a Livewire Component</h3>
<div class="codesnippet-wrapper">
  <div class="line-numbers">
</div>
<pre class="codesnippet"><code>php artisan make:livewire LineChart</code></pre></div>
