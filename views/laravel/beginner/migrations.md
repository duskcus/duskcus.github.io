---
layout: default
title: Laravel Migrations
---

<h2>1.3. MIGRATIONS</h2>
<h3>Creating Migrations:</h3>
<p>You can make tables in your databases quickly when developing with others:
The following command and naming scheme is used to create a migration, with “products” being interchangeable. This will make a migration in app/database/migrations. It’s <b style="color:red;">IMPORTANT</b> to note that Laravel uses these naming schemes to read in data in general, so to prevent any debugging sessions try to follow these naming schemes. Lastly, it is important to note that Laravel does the migrations in order. So, if there are migrations which are dependent on eachother you may want to change the date to change the order.</p>
<div class="codesnippet-wrapper">
  <div class="line-numbers">
</div>
<pre class="codesnippet"><code>php artisan make:migration create_<span style="color:red;">products</span>_table</code></pre></div>

<h3>Example Migration:</h3>
<div class="codesnippet-wrapper">
  <div class="line-numbers">
</div>
<pre class="codesnippet">
<code><?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description')->nullable();
            $table->integer('price');
            $table->string('image')->nullable();
            $table->integer('stock');
            $table->string('category');
            $table->timestamps(); // Standard to Laravel adds a created_at and updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};</code></pre></div>

<h3>Running Migrations:</h3>
<p>To add these tables into your database you can run the following command:</p>
<div class="codesnippet-wrapper">
  <div class="line-numbers">
</div>
<pre class="codesnippet"><code>php artisan migrate</code></pre></div>

<p>Alternatively you can also run this command to delete the your existing database and run migrations in one go, do keep in mind that this should never be done when running in production as all oyur data will be lost.</p>
<div class="codesnippet-wrapper">
  <div class="line-numbers">
</div>
<pre class="codesnippet"><code>php artisan migrate:fresh</code></pre></div>


<a href="/views/laravel/models"><button>Back</button></a>
<a href="/views/laravel/seeder"><button>Next</button></a>
