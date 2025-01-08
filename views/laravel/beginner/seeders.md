---
layout: default
title: Laravel Seeders
---

<h2>1.4. SEEDERS</h2>
<h3>Creating Seeders:</h3>
<p>You can make seeders to quickly fill your database with data when developing, this is both useful for deployment as it is for working with others. To make a seeder you need to use the following command, and make sure to CamelCase the name.</p>

```
php artisan make:seeder ProductSeeder
```

<h3>Example Seeder:</h3>
<p>You can make seeders to quickly fill your database with data when developing, this is both useful for deployment as it is for working with others. To make a seeder you need to use the following command, and make sure to CamelCase the name.</p>

```
<?php

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
                'description' => 'A sword is an edged, bladed weapon intended for manual cutting or thrusting.',
                'price' => '50',
                'stock' => '10',
                'category' => 'weapon',
            ]
        ];

        foreach ($products as $product) {
            Product::create($product);
        }
    }
}
```

<h3>Lastly you will have to add the following lines inside app/database/seeders/DatabaseSeeder:</h3>

```
// Beneath namespace
use App\Models\Product;

// In public function run
$this->call(ProductSeeder::class);
```

<h3>DatabaseSeeder Example:</h3>

```
<?php

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
        User::factory()->create([
            'name' => 'Admin',
            'email' => 'test@example.com',
        ]);
        
        User::factory(10)->create();

        $this->call(ProductSeeder::class);
    }
}
```

<h3>Running Seeders:</h3>
<p>You can run your seeder with the following command:</p>

```
php artisan db:seed ProductSeeder
```

<p>Alternatively, you can also migrate fresh and seed:</p>

```
php artisan migrate:fresh --seed
```

<a href="/views/laravel/migrations"><button>Back</button></a>
<a href="/views/laravel/components"><button>Next</button></a>
