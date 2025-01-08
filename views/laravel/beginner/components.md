---
layout: default
title: Laravel Components
---

<h2>1.5. COMPONENTS</h2>

<h3>Step 1. Create the following folders in your views:</h3>
<ul>
    <li>layouts</li>
        <ul>
            <li>default.blade.php</li>
        </ul>
    <li>components
        <ul>
            <li>footer.blade.php</li>
            <li>header.blade.php</li>
        </ul>
    </li>
    <li>index.blade.php</li>
</ul>


<h3>Step 2. Create a file “default.blade.php” within “views/layouts/”:</h3>
<p>Use all the code snippets presented in the example. You will probably need a formatting extension.
Example of a layout page we’ll call later.</p>

```
<!DOCTYPE html>
<html data-theme="dark" lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <title>{{ config('app.name', 'Laravel') }}</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    @vite('resources/css/app.css')
</head>

<body class="mx-auto bg-base-100">
    {{-- INCLUDES FOR COMPONENTS --}}
    @include('components.header')

    <main class="py-4 mx-[10%]">
        {{-- YIELD FOR CONTENT --}}
        @yield('content')
    </main>

    @include('components.footer')

</body>
</html>
```


<h3>Step 3. Create a file “header.blade.php” within “views/components/”:</h3>
<p>Example of a blade file that would replace &#64;include('header'):</p>

```
<nav class="p-4 shadow-md bg-base-300">
    <div class="flex items-center justify-between mx-auto max-w-7xl">
        <!-- Logo -->
        <div class="flex items-center flex-shrink-0 mr-6 text-white hover:text-gray-300">
            <!-- Logo Image -->
            <span class="ml-2 mr-6 text-xl font-semibold">Logo</span>
        </div>

        <!-- Navigation Links -->
        <div>
            <a href="{{ route('home') }}"
                class="link no-underline block mt-4 lg:inline-block lg:mt-0 mr-4
                {{ request()->routeIs('Home') ? 'text-primary' : 'hover:opacity-75' }}">
                Home
            </a>
        </div>
    </div>
</nav>
```


<h3>Step 4. Create a file “footer.blade.php” within “views/components/”:</h3>
<p>Example of a blade file that would replace &#64;include('footer'):</p>

```
<!-- Footer -->
<footer>
    <div class="py-3 text-center text-white bg-base-300">
        <p>&copy; 2024 Your Website. All rights reserved.</p>
    </div>
</footer>
```


<h3>Step 5. Create a file “index.blade.php” within “views/”:</h3>
<p>Example of a blade file that would replace &#64;yield:</p>

```
@extends('layouts.default')

{{-- @SECTION FOR THE START CONTENT --}}
@section('content')
    <section>
        hello world.
    </section>
@endsection
```


<p>You should have a functioning page by now. You can start replacing content within the @sections.</p>

<a href="/views/laravel/setup"><button>Back</button></a>
<a href="/views/laravel/migrations"><button>Next</button></a>
