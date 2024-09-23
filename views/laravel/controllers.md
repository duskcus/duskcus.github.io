---
layout: default
title: Laravel Controllers
---

<h2>1.6 CONTROLLERS</h2>

<h3>Creating Controllers</h3>
<p>To simply make a controller use this command:</p>
<div class="codesnippet-wrapper">
  <div class="line-numbers">
</div>
<pre class="codesnippet"><code>php artisan make:controller ProductController</code></pre></div>

<p>Laravel also has an alternative option for CRUD applications, here routes will automaticly created.</p>
<div class="codesnippet-wrapper">
  <div class="line-numbers">
</div>
<pre class="codesnippet"><code>php artisan make:controlelr ProductController –-resource</code></pre></div>


<h3>Controllers Logic</h3>
<p>For this example we will look at a resource controlller:</p>
<div class="codesnippet-wrapper">
  <div class="line-numbers">
</div>
<pre class="codesnippet"><code><?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Get all products
        $products = Product::all();

        // Return a view with products data
        return view('products.index', ['products' => $products]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // Return the create form view
        return view('products.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validate the incoming request data
        $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric',
            'description' => 'nullable|string',
        ]);

        // Create a new product
        Product::create($request->all());

        // Redirect to the products list with success message
        return redirect()->route('products.index')->with('success', 'Product created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // Find the product by ID
        $product = Product::findOrFail($id);

        // Return the product details view
        return view('products.index', ['products' => $products]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        // Find the product by ID
        $product = Product::findOrFail($id);

        // Return the edit form view
        return view('products.index', ['products' => $products]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        // Validate the incoming request data
        $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric',
            'description' => 'nullable|string',
        ]);

        // Find the product by ID and update its details
        $product = Product::findOrFail($id);
        $product->update($request->all());

        // Redirect to the products list with success message
        return redirect()->route('products.index')->with('success', 'Product updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        // Find the product by ID and delete it
        $product = Product::findOrFail($id);
        $product->delete();

        // Redirect to the products list with success message
        return redirect()->route('products.index')->with('success', 'Product deleted successfully.');
    }
}</code></pre></div>


<a href="/views/laravel/models"><button>Back</button></a>
<a href="/views/laravel/seeders"><button>Next</button></a>
