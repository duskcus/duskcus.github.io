---
layout: default
title: Laravel Set-up
---

<h2>1.2 SET-UP</h2>

<h3>Required:</h3>
<p>Follow the order as some software may depend on eachother.</p>
<ol>
  <li>Text Editor: In this guide I'll use Visual Studio Code</li>
  <li>PHP: <a href="https://www.php.net/downloads">https://www.php.net/downloads</a></li>
  <li>Composer: <a href="https://getcomposer.org/download/">https://getcomposer.org/download/</a></li>
  <li>Laravel: <a href="https://laravel.com/docs/11.x/installation">https://laravel.com/docs/11.x/installation</a></li>
  <li>Localhost: <a href="https://dbngin.com/download">https://dbngin.com/download</a></li>
</ol>

<h3>Step 1. Create a Laravel project:</h3>
<p>“projectname” can be changed to desired name. PS, you note that, everything I underline tends to be for changeable names.
laravel new projectname</p>

<h3>Step 2. Open your folder in cmd and install Tailwind:</h3>
<pre class="codesnippet">
<code>npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p</code></pre>

<h3>Step 3. Add the directives for each of Tailwind’s layers to your ./resources/css/app.css file:</h3>
<pre class="codesnippet">
<code>@tailwind base;
@tailwind components;
@tailwind utilities;</code></pre>

<h3>Step 4. Install daisyUI in your folders cmd:</h3>
<pre class="codesnippet">
<code>npm i -D daisyui@latest</code></pre>

<h3>Step 5. Then add daisyUI to your Projectname/tailwind.config.js files:</h3>
<pre class="codesnippet">
<code>/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
    // Add the daisyui configuration here
    daisyui: {
        themes: ["light", "dark", "THEME YOU LIKE"],
    },
  }</code></pre>

<p>Or you can use your own theme:</p>
<pre class="codesnippet">
<code>module.exports = {
  //...
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#a991f7",
          "secondary": "#f6d860",
          "accent": "#37cdbe",
          "neutral": "#3d4451",
          "base-100": "#ffffff",
          "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": "0.25s", // duration of animation when you click on button
          "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
          "--border-btn": "1px", // border width of buttons
          "--tab-border": "1px", // border width of tabs
          "--tab-radius": "0.5rem", // border radius of tabs
        },
      },
    ],
  },
}</code></pre>


<a href="/views/laravel/setup"><button>Next</button></a>
