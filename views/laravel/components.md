---
layout: default
title: Laravel Components
---

<h2>1.3 COMPONENTS</h2>

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


<h3>Step 2. Open your project folder in terminal and run the following commands:</h3>
<div class="codesnippet-wrapper">
  <div class="line-numbers"></div>
  <pre class="codesnippet"><code>php artisan serve
npm run dev</code></pre>
</div>
<br>


<h3>Step 3. Create a file “layout.blade.php” within “views/layouts”:</h3>
<p>Use all the code snippets presented in the example. You will probably need a formatting extension.
Example of a layout page we’ll call later.</p>
<div class="codesnippet-wrapper">
  <div class="line-numbers"></div>
  <pre class="codesnippet"><code>&lt;!DOCTYPE html&gt;
&lt;html data-theme="nord" lang="&#123;&#123; str_replace('_', '-', app()-&gt;getLocale()) &#125;&#125;"&gt;
&lt;meta charset="UTF-8"&gt;
&lt;title&gt;&#123;&#123; config('app.name', 'Laravel') &#125;&#125;&lt;/title&gt;
&lt;meta name="viewport" content="width=device-width,initial-scale=1"&gt;
&lt;head&gt;
    &lt;script src="https://cdn.jsdelivr.net/npm/chart.js"&gt;&lt;/script&gt;
    &lt;script src="https://kit.fontawesome.com/29c53c0003.js" crossorigin="anonymous"&gt;&lt;/script&gt;
    &#64;vite('resources/css/app.css')
&lt;/head&gt;

&lt;body class="mx-auto"&gt;
    &#123;&#123;-- INCLUDES FOR COMPONENTS --&#125;&#125;
    &#64;include('components.navbar')

    &lt;main&gt;
        &#123;&#123;-- YIELD FOR CONTENT --&#125;&#125;
        &#64;yield('content')
    &lt;/main&gt;

    &#64;include('components.footer')

&lt;/body&gt;
&lt;/html&gt;</code></pre>
</div>
<br>


<h3>Step 4. Create a file “navbar.blade.php” within “views/components”:</h3>
<p>Example of a blade file that would replace &#64;include('navbar'):</p>
<div class="codesnippet-wrapper">
  <div class="line-numbers"></div>
  <pre class="codesnippet"><code>&lt;nav class="shadow-md bg-primary p-4"&gt;
    &lt;div class="max-w-7xl mx-auto flex justify-between items-center"&gt;
        &lt;!-- Logo --&gt;
        &lt;div class="flex items-center flex-shrink-0 text-white mr-6"&gt;
            &lt;svg class="h-8 w-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"&gt;
                &lt;path d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 14c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-.707-6.293a1 1 0 1 1 1.414-1.414A2 2 0 0 0 10 8a2 2 0 0 0-1.707 1.707z" /&gt;
            &lt;/svg&gt;
            &lt;span class="font-semibold text-xl ml-2 mr-6"&gt;Logo&lt;/span&gt;
        &lt;/div&gt;

        &lt;!-- Navigation Links --&gt;
        &lt;div class="hidden md:block"&gt;
            &lt;a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4"&gt;
                Home
            &lt;/a&gt;
            &lt;a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4"&gt;
                Products
            &lt;/a&gt;
            &lt;a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4"&gt;
                About
            &lt;/a&gt;
            &lt;a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4"&gt;
                Services
            &lt;/a&gt;
            &lt;a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300"&gt;
                Contact
            &lt;/a&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/nav&gt;</code></pre>
</div>
<br>


<h3>Step 5. Create a file “footer.blade.php” within “components”:</h3>
<p>Example of a blade file that would replace &#64;include('footer'):</p>
<div class="codesnippet-wrapper">
  <div class="line-numbers"></div>
  <pre class="codesnippet"><code>&lt;!-- Footer --&gt;
&lt;footer&gt;
    &lt;div class="bg-primary text-center py-3 text-white"&gt;
        &lt;p&gt;&amp;copy; 2024 Your Website. All rights reserved.&lt;/p&gt;
    &lt;/div&gt;
&lt;/footer&gt;</code></pre>
</div>
<br>


<h3>Step 6. Create a file “index.blade.php” within “views”:</h3>
<p>Example of a blade file that would replace &#64;yield:</p>
<div class="codesnippet-wrapper">
  <div class="line-numbers"></div>
  <pre class="codesnippet"><code>&#64;extends('layouts.layout')

&#123;&#123;-- @SECTION FOR THE START CONTENT --&#125;&#125;
&#64;section('content')
    &lt;section&gt;
        hello world.
    &lt;/section&gt;
&#64;endsection</code></pre>
</div>
<br>


<p>You should have a functioning page by now:
You can now start replacing content within the sections.</p>


<a href="/views/laravel/setup"><button>Start Course</button></a>
