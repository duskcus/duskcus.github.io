---
layout: default
title: Home
---
<h1>What is this site?</h1>
<p>This is a place where I show how I personally set-up projects. It is supposed to be easy and quick. It is mainly focussed on Windows and Mac. I assume Linux users already know how to install everything.</p>

<h3>Set-up Guides Development Environment</h3>
<button>Set-up Windows</button>
<button>Set-up Mac</button>


<div class="codesnippet-wrapper">
  <div class="line-numbers"></div>
  <pre class="codesnippet">
  
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
  
  </pre>
</div>
<br>


<!-- <li>Navigation</li>
<li>N00B section</li>
<li>Tools section</li>
<li>Collapseable sidebar</li>
<li>Animations</li>
<i>Folder structure: Root->Subject(Example = Laravel)->Intro->Quickstart</i> -->
