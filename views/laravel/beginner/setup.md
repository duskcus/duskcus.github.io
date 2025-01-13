---
layout: default
title: Laravel Set-up
---

<h2>1.1. SET-UP</h2>

<h3>Required:</h3>
<p>Follow the order as some software may depend on eachother.</p>
<p>Text Editor: <a href="https://code.visualstudio.com/download">In this guide I'll use Visual Studio Code</a></p>
<p>PHP: <a href="https://www.php.net/downloads">https://www.php.net/downloads</a></p>
<p>Composer: <a href="https://getcomposer.org/download/">https://getcomposer.org/download/</a></p>
<p>Laravel: <a href="https://laravel.com/docs/11.x/installation">https://laravel.com/docs/11.x/installation</a></p>
<p>Localhost: <a href="https://dbngin.com/download">https://dbngin.com/download</a></p>


<h3>Step 1. Create a Laravel project:</h3>
<p>“webshop” can be changed to your desired name.</p>

```
laravel new webshop
```

<h3>Step 2. Setup the .ENV file:</h3>
<p>Most of the defaults should be fine, but these should be edited to work with MySQL. You can change webshop to your database name:</p>

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=webshop
DB_USERNAME=root
DB_PASSWORD=
```

<h3>Step 3. Open your folder in cmd/terminal and install Tailwind:</h3>

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

<h3>Step 4. Add the directives for each of Tailwind’s layers to your ./resources/css/app.css file:</h3>

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

<h3>Step 5. Open your folder in cmd/terminal and install daisyUI:</h3>

```
npm i -D daisyui@latest
```

<h3>Step 6. Then add daisyUI to your Projectname/tailwind.config.js files:</h3>

```
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    ],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
    // Configure dark mode to be class-based instead of auto
    darkMode: 'class', // Add this line to control dark mode via a class
    // Add the daisyui configuration here
    daisyui: {
        themes: ["THEME YOU LIKE"],
    },
  }
```

<p>Or you can use your own theme:</p>
```
<code>module.exports = {  //...
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
}
```

<h3>Step 7. Start host:</h3>
<p>Commands to start server if you forgot. I recommend running it from the artisan serve path as I've experienced plenty of caching bugs etc when working with anything else.</p>

```
php artisan serve
npm run dev
```

<a href="/views/laravel/"><button>Back</button></a>
<a href="/views/laravel/components"><button>Next</button></a>
