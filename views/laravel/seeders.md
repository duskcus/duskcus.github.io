---
layout: default
title: Laravel Seeders
---

<h2>1.4. SEEDERS</h2>
<p>You can make seeders to quickly fill your database with data when developing, this is both useful for deployment as it is for working with others. To make a seeder you need to use the following command, and make sure to CamelCase the name.</p>

<div class="codesnippet-wrapper">
  <div class="line-numbers">
</div>
<pre class="codesnippet"><code>php artisan make:seeder ProductSeeder()</code></pre></div>

<h3>Example Seeder:</h3>
<p>You can make seeders to quickly fill your database with data when developing, this is both useful for deployment as it is for working with others. To make a seeder you need to use the following command, and make sure to CamelCase the name.</p>
<div class="codesnippet-wrapper">
  <div class="line-numbers">
</div>
<pre class="codesnippet"><code><?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $products = [
            [
                'name' => 'sword',
                'description' => '1',
                'price' => '50',
                'stock' => '10',
                'category' => 'weapon',
            ]
        ];

        foreach ($products as $product) {
            Product::create($product);
        }
    }
}</code></pre></div>

<p>Lastly you will have to add the following lines inside app/database/seeders/DatabaseSeeder.</p>
<div class="codesnippet-wrapper">
  <div class="line-numbers">
</div>
<pre class="codesnippet">// Beneath namespace
  use App\Models\Product;
  // In public function run
  <code>$this->call(ProductSeeder::class);</code></pre></div>

<p>DatabaseSeeder Example:</p>
<div class="codesnippet-wrapper">
  <div class="line-numbers">
</div>
<pre class="codesnippet"><code><?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Product;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        $this->call(ProductSeeder::class);
    }
}</code></pre></div>
