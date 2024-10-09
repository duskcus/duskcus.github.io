---
layout: default
title: Laravel Livewire
---

<h3>Livewire 3</h3>
<p>I personally think Livewire is somewhat ratchet. Yet I also feel like it is benificial to write in logic as much in a single language. So what does it do? Well in my biased opinion it doesn't do anything that can't be done in JavaScript. So why use it? It's an easy and fast way to code in PHP and do an AJAX request to live update something without refreshing the page.</p>

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

<h3>Here's a breakdown of the common wire syntaxes:</h3>
<ul>
  <li>wire:model = input</li>
  <li>wire:click = button</li>
  <li>wire:submit = forms</li>
  <li>wire:loading = loading text with a long process (image generation)</li>
  <li>wire:poll = calling a function every time (livechart)</li>
</ul>


<p>wire:model
This is used for two-way data binding. It connects an input element to a property in your Livewire component.
Example:</p> <input type="text" wire:model="name">

<p>wire:click
This attaches a click event listener to an element, which triggers a method in your Livewire component when clicked.
Example:</p> <button wire:click="save">Save</button>

<p>wire:submit
Used on form elements to handle form submissions, calling a method in your Livewire component.
Example:</p> <form wire:submit="handleSubmit">

<p>wire:loading
This directive manipulates the element's visibility or state while a Livewire action is processing.
Example:</p> <div wire:loading>Processing...</div>

<p>wire:poll
This sets up automatic polling to refresh the component at specified intervals.
Example:</p> <div wire:poll.5s="refreshData">


<h3>Expanding on the previous you can use modifiers:</h3>
<p>Note that modifiers can be stacked onto eachother.</p>
<ul>
  <li>wire:model.live</li>
  <li>wire:model.debounce.500ms="search"</li>
  <li>wire:model.live.throttle.1s="liveSearch"</li>
</ul>
