---
layout: default
title: Laravel Components
---

<h2>1.8 CRUD views</h2>

```blade
test
```

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

{{-- @SECTION FOR THE START CONTENT --}}
@section('content')
    <section class="mx-auto py-8 px-12 bg-base-100 rounded-md shadow-mdg">

        <div class="w-full inline-flex">
            <h1 class="text-4xl font-bold mb-6">Products</h1>

            <div class="ml-auto inline-flex">

                <a class="btn btn-success" href="{{ route('products.create') }}">
                    <button>Create Product</button>
                </a>
            </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-6">
            @foreach ($products as $product)
                <div class="card bg-base-300 shadow-xl">
                    <figure>
                        <a href="{{ route('products.show', $product->id) }}">
                            <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
                        </a>
                    </figure>
                    <div class="card-body">
                        <h2 class="text-xl capitalize">{{ $product->name }}</h2>
                        <p>{{ $product->description }}</p>
                        <p>€{{ $product->price }}</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary w-full">Buy Now</button>
                            {{-- EDIT --}}
                            <a class="btn btn-info w-full" href="{{ route('products.edit', $product->id) }}">
                                <button>Edit {{ $product->name }}</button>
                            </a>

                            {{-- DELETE --}}
                            <form class="w-full" action="{{ route('products.destroy', $product->id) }}" method="POST">
                                @csrf
                                @method('DELETE')
                                <button class="btn btn-error w-full" type="submit">Delete {{ $product->name }}</button>
                            </form>
                        </div>
                    </div>
                </div>
            @endforeach

        </div>
        {{ $products->links() }}

    </section>
@endsection</code></pre></div>


<h3>products/index.blade.php</h3>
<div class="codesnippet-wrapper">
    <div class="line-numbers"></div>
    <pre class="codesnippet"><code>@extends('layouts.default')

{{-- @SECTION FOR THE START CONTENT --}}
@section('content')
    <section>
        {{-- <a href="{{route('products.edit', $product->id)}}">
            <button class="btn btn-info ml-auto">Edit Mode</button>
        </a> --}}

        <div class="grid grid-cols-2 gap-6 p-6">
        <img class="h-[300px]" src="{{ $product->image ?? 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp' }}" alt="Product Image">
        <div>
            <p class="text-2xl mb-6 capitalize">{{ $product->name }}</p>
            <p>{{ $product->description }}</p>
            <p>price: {{ $product->price }}</p>
            <p>stock: {{ $product->stock }}</p>
            <p>category: <a class="link" href="">{{ $product->category }}</a></p>
        </div>
        </div>
    </section>
@endsection</code></pre></div>


<h3>products/index.blade.php</h3>
<div class="codesnippet-wrapper">
    <div class="line-numbers"></div>
    <pre class="codesnippet"><code>@extends('layouts.default')

{{-- @SECTION FOR THE START CONTENT --}}
@section('content')
    <section class="w-[30%] mx-auto py-8 px-12 bg-base-100 rounded-md shadow-md">

        <form action="{{ route('products.update', $product->id) }}" method="POST">

            @csrf
            @method('PUT')

            <div class="form-control mt-4">
                <label class="label" for="name">
                    <span class="label-text">Name</span>
                </label>
                <input type="text" name="name" id="name" class="input input-bordered w-full" placeholder="Name" value="{{$product->name}}" required>
            </div>
            <div class="form-control mt-4">
                <label class="label" for="price">
                    <span class="label-text">Price</span>
                </label>
                <input type="text" name="price" id="price" class="input input-bordered w-full" placeholder="Price" value="{{$product->price}}" required>
            </div>
            <div class="form-control mt-4">
                <label class="label" for="stock">
                    <span class="label-text">Stock</span>
                </label>
                <input type="text" name="stock" id="stock" class="input input-bordered w-full" placeholder="Stock" value="{{$product->stock}}" required>
            </div>
            <div class="form-control mt-4">
                <label class="label" for="description">
                    <span class="label-text">Description</span>
                </label>
                <input type="text" name="description" id="description" class="input input-bordered w-full" placeholder="Description" value="{{$product->description}}" required>
            </div>
            <div class="form-control mt-4">
                <label class="label" for="image">
                    <span class="label-text">Image</span>
                </label>
                <input type="url" name="image" id="image" class="input input-bordered w-full" placeholder="Image" value="{{$product->image}}">
            </div>
            <div class="form-control mt-4">
                <label class="label" for="category">
                    <span class="label-text">Category</span>
                </label>
                <input type="text" name="category" id="category" class="input input-bordered w-full" placeholder="Category" value="{{$product->category}}" required>
            </div>

            <button type="submit" class="btn btn-info mt-6 w-full">Edit {{ $product->name }}</button>

        </form>
    </section>
@endsection

@endsection</code></pre></div>


<h3>products/index.blade.php</h3>
<div class="codesnippet-wrapper">
    <div class="line-numbers"></div>
    <pre class="codesnippet"><code>@extends('layouts.default')

{{-- @SECTION FOR THE START CONTENT --}}
@section('content')
    <section class="w-[30%] mx-auto py-8 px-12 bg-base-100 rounded-md shadow-md">

        @if (session('success'))
            <div class="alert alert-success">
                {{ session('success') }}
            </div>
        @endif

        <form action="{{ route('products.store') }}" method="POST">

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
