---
layout: default
title: Laravel Components
---

<h2>Components</h2>

<h3>Step 1. Create the following folders in your views:</h3>
<ul>
    <li>layouts</li>
        <ul>
            <li>default.blade.php</li>
        </ul>
    <li>components
        <ul>
            <li>footer</li>
            <li>header</li>
        </ul>
    </li>
    <li>index.blade.php</li>
</ul>

<h3>Step 1. Create the following folders in your views:</h3>
<p>“projectname” can be changed to desired name. PS, you note that, everything I underline tends to be for changeable names.</p>
<div class="codesnippet-wrapper">
  <div class="line-numbers">
</div>
<pre class="codesnippet">
<code>laravel new projectname</code></pre></div>
<br>

Step 2. Create a file “layout.blade.php” within “views/layouts”:
Use all the code snippets presented in the example. You will probably need a formatting extension.
Example of a layout page we’ll call later.
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


 
Step 3. Create a file “navbar.blade.php” within “views/components”:
Example of a blade file that would replace @include(‘navbar’):
<nav class="shadow-md bg-primary p-4">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
        <!-- Logo -->
        <div class="flex items-center flex-shrink-0 text-white mr-6">
            <svg class="h-8 w-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path
                    d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 14c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-.707-6.293a1 1 0 1 1 1.414-1.414A2 2 0 0 0 10 8a2 2 0 0 0-1.707 1.707z" />
            </svg>
            <span class="font-semibold text-xl ml-2 mr-6">Logo</span>

        </div>

        <!-- Navigation Links -->
        <div class="hidden md:block">
            <a href="#"  class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4">
                Home
            </a>
            <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4">
                Products
            </a>
            <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4">
                About
            </a>
            <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4">
                Services
            </a>
            <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300">
                Contact
            </a>
        </div>
    </div>
</nav> 
Step 4. Create a file “footer.blade.php” within “components”:
Example of a blade file that would replace @include(‘footer’):
    <!-- Footer -->
    <footer>
        <div class="bg-primary text-center py-3 text-white">
            <p>&copy; 2024 Your Website. All rights reserved.</p>
        </div>
    </footer>

Step 5. Create a file “index.blade.php” within “views”:
Example of a blade file that would replace @yield:
@extends('layouts.layout')

{{-- @SECTION FOR THE START CONTENT --}}
@section('content')
    <section>
        hello world.
    </section>

    {{-- @ENDSECTION FOR THE END OF CONTENT --}}
@endsection


You should have a functioning page by now:
You can now start replacing content within the sections.


<a href="/views/laravel/setup"><button>Start Course</button></a>
