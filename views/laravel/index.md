---
layout: default
title: Laravel Introduction
---

<h2>1.1 INTRODUCTION</h2>

<h3>What is Laravel?</h3>
<p>Laravel is a great framework for quickly building web apps, with a large ecosystem. While it's slightly slower than some frameworks, the difference is often negligible. It's ideal for most projects unless when N2 notation becomes critical, which in 99% of cases it won't.</p>

<h3>What do you need?</h3>
<p>Basics in the following:</p>
<ul>
  <li>PHP</li>
  <li>HTML</li>
  <li>CSS</li>
  <li>MySQL</li>
</ul>

<h3>What Will You Learn?</h3>
<ul>
  <li>Setting-up a Development Environment</li>
  <li>Installing Packages</li>
  <li>Component Based Coding</li>
  <li>Tailwind CSS and Daisy UI</li>
  <li>Models, Views and Controllers</li>
  <li>Coding Your Own Authentication</li>
  <li>Create, Read, Update and Delete</li>
  <li>Livewire and Alpine.JS</li>
</ul>

```
<!DOCTYPE html>
<html data-theme="nord" lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<meta charset="UTF-8">
<title>{{ config('app.name', 'Laravel') }}</title>
<meta name="viewport" content="width=device-width,initial-scale=1">
<head>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="https://kit.fontawesome.com/29c53c0003.js" crossorigin="anonymous"></script>
    @vite('resources/css/app.css')
</head>

<body class="mx-auto">
    {{-- INCLUDES FOR COMPONENTS --}}
    @include('components.navbar')

    <main>
        {{-- YIELD FOR CONTENT --}}
        @yield('content')
    </main>

    @include('components.footer')

</body>

</html>
![image](https://github.com/user-attachments/assets/ead56e6f-7f3c-4a72-be29-2cef2083e533)

```

Lastly there will be downloads and a cheatsheet.

<a href="/views/laravel/setup"><button>Start Course</button></a>
