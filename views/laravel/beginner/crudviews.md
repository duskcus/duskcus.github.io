---
layout: default
title: Laravel Components
---

<h2>1.8 CRUD views</h2>

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

<h3>products/index.blade.php</h3>
<div class="codesnippet-wrapper">
    <div class="line-numbers"></div>
    <pre class="codesnippet"><code>@extends('layouts.default')

&#123;&#123;-- @SECTION FOR THE START CONTENT --&#125;&#125;
@section('content')
    <section class="mx-auto py-8 px-12 bg-base-100 rounded-md shadow-mdg">

        <div class="w-full inline-flex">
            <h1 class="text-4xl font-bold mb-6">Products</h1>

            <div class="ml-auto inline-flex">

                <a class="btn btn-success" href="&#123;&#123; route('products.create') &#125;&#125;">
                    <button>Create Product</button>
                </a>
            </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-6">
            @foreach ($products as $product)
                <div class="card bg-base-300 shadow-xl">
                    <figure>
                        <a href="&#123;&#123; route('products.show', $product->id) &#125;&#125;">
                            <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
                        </a>
                    </figure>
                    <div class="card-body">
                        <h2 class="text-xl capitalize">&#123;&#123; $product->name &#125;&#125;</h2>
                        <p>&#123;&#123; $product->description &#125;&#125;</p>
                        <p>€&#123;&#123; $product->price &#125;&#125;</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary w-full">Buy Now</button>
                            &#123;&#123;-- EDIT --&#125;&#125;
                            <a class="btn btn-info w-full" href="&#123;&#123; route('products.edit', $product->id) &#125;&#125;">
                                <button>Edit &#123;&#123; $product->name &#125;&#125;</button>
                            </a>

                            &#123;&#123;-- DELETE --&#125;&#125;
                            <form class="w-full" action="&#123;&#123; route('products.destroy', $product->id) &#125;&#125;" method="POST">
                                @csrf
                                @method('DELETE')
                                <button class="btn btn-error w-full" type="submit">Delete &#123;&#123; $product->name &#125;&#125;</button>
                            </form>
                        </div>
                    </div>
                </div>
            @endforeach

        </div>
        &#123;&#123; $products->links() &#125;&#125;

    </section>
@endsection</code></pre></div>


<h3>products/index.blade.php</h3>
<div class="codesnippet-wrapper">
    <div class="line-numbers"></div>
    <pre class="codesnippet"><code>@extends('layouts.default')

&#123;&#123;-- @SECTION FOR THE START CONTENT --&#125;&#125;
@section('content')
    <section>
        &#123;&#123;-- <a href="&#123;&#123;route('products.edit', $product->id)&#125;&#125;">
            <button class="btn btn-info ml-auto">Edit Mode</button>
        </a> --&#125;&#125;

        <div class="grid grid-cols-2 gap-6 p-6">
        <img class="h-[300px]" src="&#123;&#123; $product->image ?? 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp' &#125;&#125;" alt="Product Image">
        <div>
            <p class="text-2xl mb-6 capitalize">&#123;&#123; $product->name &#125;&#125;</p>
            <p>&#123;&#123; $product->description &#125;&#125;</p>
            <p>price: &#123;&#123; $product->price &#125;&#125;</p>
            <p>stock: &#123;&#123; $product->stock &#125;&#125;</p>
            <p>category: <a class="link" href="">&#123;&#123; $product->category &#125;&#125;</a></p>
        </div>
        </div>
    </section>
@endsection</code></pre></div>


<h3>products/index.blade.php</h3>
<div class="codesnippet-wrapper">
    <div class="line-numbers"></div>
    <pre class="codesnippet"><code>@extends('layouts.default')

&#123;&#123;-- @SECTION FOR THE START CONTENT --&#125;&#125;
@section('content')
    <section class="w-[30%] mx-auto py-8 px-12 bg-base-100 rounded-md shadow-md">

        <form action="&#123;&#123; route('products.update', $product->id) &#125;&#125;" method="POST">

            @csrf
            @method('PUT')

            <div class="form-control mt-4">
                <label class="label" for="name">
                    <span class="label-text">Name</span>
                </label>
                <input type="text" name="name" id="name" class="input input-bordered w-full" placeholder="Name" value="&#123;&#123;$product->name&#125;&#125;" required>
            </div>
            <div class="form-control mt-4">
                <label class="label" for="price">
                    <span class="label-text">Price</span>
                </label>
                <input type="text" name="price" id="price" class="input input-bordered w-full" placeholder="Price" value="&#123;&#123;$product->price&#125;&#125;" required>
            </div>
            <div class="form-control mt-4">
                <label class="label" for="stock">
                    <span class="label-text">Stock</span>
                </label>
                <input type="text" name="stock" id="stock" class="input input-bordered w-full" placeholder="Stock" value="&#123;&#123;$product->stock&#125;&#125;" required>
            </div>
            <div class="form-control mt-4">
                <label class="label" for="description">
                    <span class="label-text">Description</span>
                </label>
                <input type="text" name="description" id="description" class="input input-bordered w-full" placeholder="Description" value="&#123;&#123;$product->description&#125;&#125;" required>
            </div>
            <div class="form-control mt-4">
                <label class="label" for="image">
                    <span class="label-text">Image</span>
                </label>
                <input type="url" name="image" id="image" class="input input-bordered w-full" placeholder="Image" value="&#123;&#123;$product->image&#125;&#125;">
            </div>
            <div class="form-control mt-4">
                <label class="label" for="category">
                    <span class="label-text">Category</span>
                </label>
                <input type="text" name="category" id="category" class="input input-bordered w-full" placeholder="Category" value="&#123;&#123;$product->category&#125;&#125;" required>
            </div>

            <button type="submit" class="btn btn-info mt-6 w-full">Edit &#123;&#123; $product->name &#125;&#125;</button>

        </form>
    </section>
@endsection

@endsection</code></pre></div>


<h3>products/index.blade.php</h3>
<div class="codesnippet-wrapper">
    <div class="line-numbers"></div>
    <pre class="codesnippet"><code>@extends('layouts.default')

&#123;&#123;-- @SECTION FOR THE START CONTENT --&#125;&#125;
@section('content')
    <section class="w-[30%] mx-auto py-8 px-12 bg-base-100 rounded-md shadow-md">

        @if (session('success'))
            <div class="alert alert-success">
                &#123;&#123; session('success') &#125;&#125;
            </div>
        @endif

        <form action="&#123;&#123; route('products.store') &#125;&#125;" method="POST">

            @csrf

            <div class="form-control mt-4">
                <label class="label" for="name">
                    <span class="label-text">Name</span>
                </label>
                <input type="text" name="name" id="name" class="input input-bordered w-full" placeholder="Name" required>
            </div>

            <div class="flex flex-wrap -mx-2">
                <div class="w-full md:w-1/2 px-2">
                    <div class="form-control mt-4">
                        <label class="label" for="modal_start_time">
                            <span class="label-text">Price</span>
                        </label>
                        <input type="text" name="price" id="price" class="input input-bordered w-full" placeholder="Price" required>
                    </div>
                </div>
                <div class="w-full md:w-1/2 px-2">
                    <div class="form-control mt-4">
                        <label class="label" for="modal_end_time">
                            <span class="label-text">Stock</span>
                        </label>
                        <input type="text" name="stock" id="stock" class="input input-bordered w-full" placeholder="Stock" required>
                    </div>
                </div>
            </div>

            <div class="form-control mt-4">
                <label class="label" for="description">
                    <span class="label-text">Description</span>
                </label>
                <input type="text" name="description" id="description" class="input input-bordered w-full" placeholder="Description" required>
            </div>
            <div class="form-control mt-4">
                <label class="label" for="image">
                    <span class="label-text">Image</span>
                </label>
                <input type="url" name="image" id="image" class="input input-bordered w-full" placeholder="Image">
            </div>
            <div class="form-control mt-4">
                <label class="label" for="category">
                    <span class="label-text">Category</span>
                </label>
                <input type="text" name="category" id="category" class="input input-bordered w-full" placeholder="Category" required>
            </div>


            <button type="submit" class="btn btn-success mt-6 w-full">Create</button>

        </form>
    </section>
@endsection</code></pre></div>
