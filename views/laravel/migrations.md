---
layout: default
title: Laravel Migrations
---

<h2>1.3 MIGRATIONS</h2>
You can make tables in your databases quickly when developing with others:
The following command and naming scheme is used to create a migration, with “products” being interchangeable. This will make a migration in database/migrations. It’s IMPORTANT to note that Laravel uses naming these naming schemes to read in data in general, so to prevent any debugging sessions try to follow these naming schemes.
php artisan make:migration create_products_table


Go over different blueprint functions such as timestamps:

3.1 Example Code:

Migration example:
<?php

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
            $table->integer('amount');
            $table->string('category');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
![image](https://github.com/user-attachments/assets/f5485505-4098-47e9-aeb4-49303e6e03f5)
