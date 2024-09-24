---
layout: default
title: Laravel Models
---

<h2>1.2 MODELS</h2>
<p>Models are a bit like blueprints, they are often specifically made to communicate between a controller and a view or contain the logic for interacting with a database. Laravel expects it to be a capilised singular noun so what you would type to make one would be:</p>

<div class="codesnippet-wrapper">
  <div class="line-numbers">
</div>
<pre class="codesnippet"><code>php artisan make:model Product</code></pre></div>

<h3>Example Model:</h3>
<div class="codesnippet-wrapper">
  <div class="line-numbers">
</div>
<pre class="codesnippet"><code><?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'products';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'description',
        'price',
        'image',
        'stock',
        'category',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'price' => 'integer',
        'stock' => 'integer',
    ];
}</code></pre></div>

<a href="/views/laravel/setup"><button>Back</button></a>
<a href="/views/laravel/migrations"><button>Next</button></a>
