---
layout: default
title: Laravel Components
---

<h2>1.8 CRUD Views</h2>

<h3>Step 1. Create the following folders in your views:</h3>
<ul>
    <li>products
        <ul>
            <li>create.blade.php</li>
            <li>index.blade.php</li>
            <li>edit.blade.php</li>
            <li>show.blade.php</li>
        </ul>
    </li>
</ul>

<h3>index.blade.php</h3>
<div class="codesnippet-wrapper">
  <div class="line-numbers">
</div>
<pre class="codesnippet"><code>@extends('layouts.default')

{{-- @SECTION FOR THE START CONTENT --}}
@section('content')
    <section class="mx-auto py-8 px-12 bg-base-100 rounded-md shadow-mdg">

        <div class="w-full inline-flex">
            <h1 class="text-4xl font-bold mb-6">Products</h1>

            <div class="ml-auto inline-flex">

                <button class="btn btn-success">Create Product</button>
                <button class="btn btn-primary ml-6">Edit Mode</button>
                
            </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-6">
            @foreach ($products as $product)
                <div class="card bg-base-300 shadow-xl">
                    <figure>
                        <a href="{{ route('products.show', $product->id) }}"><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes" /></a>
                    </figure>
                    <div class="card-body">
                        <h2 class="text-xl capitalize">{{ $product->name }}</h2>
                        <p>{{ $product->description }}</p>
                        <p>€{{ $product->price }}</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary w-full">Buy Now</button>
                        </div>
                    </div>
                </div>
            @endforeach

        </div>
        {{ $products->links() }}

    </section>
@endsection</code></pre></div>


