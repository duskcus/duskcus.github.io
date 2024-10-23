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
    <pre class="codesnippet"><code>&#64;extends('layouts.default')

&#123;&#123;-- &#64;SECTION FOR THE START CONTENT --&#125;&#125;
&#64;section('content')
    <section class="mx-auto py-8 px-12 bg-base-100 rounded-md shadow-mdg">

        &lt;div class="w-full inline-flex"&gt;
        &lt;h1 class="text-4xl font-bold mb-6"&gt;Products&lt;/h1&gt;

        &lt;div class="ml-auto inline-flex"&gt;

            &lt;a class="btn btn-success" href="&#123;&#123; route('products.create') &#125;&#125;"&gt;
                &lt;button&gt;Create Product&lt;/button&gt;
            &lt;/a&gt;
        &lt;/div&gt;
    &lt;/div&gt;

    &lt;div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-6"&gt;
        &#64;foreach ($products as $product)
            &lt;div class="card bg-base-300 shadow-xl"&gt;
                &lt;figure&gt;
                    &lt;a href="&#123;&#123; route('products.show', $product->id) &#125;&#125;"&gt;
                        &lt;img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" /&gt;
                    &lt;/a&gt;
                &lt;/figure&gt;
                &lt;div class="card-body"&gt;
                    &lt;h2 class="text-xl capitalize"&gt;&#123;&#123; $product->name &#125;&#125;&lt;/h2&gt;
                    &lt;p&gt;&#123;&#123; $product->description &#125;&#125;&lt;/p&gt;
                    &lt;p&gt;€&#123;&#123; $product->price &#125;&#125;&lt;/p&gt;
                    &lt;div class="card-actions justify-end"&gt;
                        &lt;button class="btn btn-primary w-full"&gt;Buy Now&lt;/button&gt;
                        &#123;&#123;-- EDIT --&#125;&#125;
                        &lt;a class="btn btn-info w-full" href="&#123;&#123; route('products.edit', $product->id) &#125;&#125;"&gt;
                            &lt;button&gt;Edit &#123;&#123; $product->name &#125;&#125;&lt;/button&gt;
                        &lt;/a&gt;

                        &#123;&#123;-- DELETE --&#125;&#125;
                        &lt;form class="w-full" action="&#123;&#123; route('products.destroy', $product->id) &#125;&#125;" method="POST"&gt;
                            &#64;csrf
                            &#64;method('DELETE')
                            &lt;button class="btn btn-error w-full" type="submit"&gt;Delete &#123;&#123; $product->name &#125;&#125;&lt;/button&gt;
                        &lt;/form&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &#64;endforeach

    &lt;/div&gt;
    &#123;&#123; $products->links() &#125;&#125;

&lt;/section&gt;
&#64;endsection</code></pre></div>


<h3>products/index.blade.php</h3>
<div class="codesnippet-wrapper">
    <div class="line-numbers"></div>
    <pre class="codesnippet"><code>&#64;extends('layouts.default')

&#123;&#123;-- &#64;SECTION FOR THE START CONTENT --&#125;&#125;
&#64;section('content')
    <section>
        &#123;&#123;-- <a href="&#123;&#123;route('products.edit', $product->id)&#125;&#125;">
            <button class="btn btn-info ml-auto">Edit Mode</button>
        </a> --&#125;&#125;

    &lt;div class="grid grid-cols-2 gap-6 p-6"&gt;
    &lt;img class="h-[300px]" src="&#123;&#123; $product->image ?? 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp' &#125;&#125;" alt="Product Image"&gt;
    &lt;div&gt;
        &lt;p class="text-2xl mb-6 capitalize"&gt;&#123;&#123; $product->name &#125;&#125;&lt;/p&gt;
        &lt;p&gt;&#123;&#123; $product->description &#125;&#125;&lt;/p&gt;
        &lt;p&gt;price: &#123;&#123; $product->price &#125;&#125;&lt;/p&gt;
        &lt;p&gt;stock: &#123;&#123; $product->stock &#125;&#125;&lt;/p&gt;
        &lt;p&gt;category: &lt;a class="link" href=""&gt;&#123;&#123; $product->category &#125;&#125;&lt;/a&gt;&lt;/p&gt;
    &lt;/div&gt;
    &lt;/div&gt;
&lt;/section&gt;
&#64;endsection</code></pre></div>


<h3>products/index.blade.php</h3>
<div class="codesnippet-wrapper">
    <div class="line-numbers"></div>
    <pre class="codesnippet"><code>&#64;extends('layouts.default')

&#123;&#123;-- &#64;SECTION FOR THE START CONTENT --&#125;&#125;
&#64;section('content')
    <section class="w-[30%] mx-auto py-8 px-12 bg-base-100 rounded-md shadow-md">

        &lt;form action="&#123;&#123; route('products.update', $product->id) &#125;&#125;" method="POST"&gt;

        &#64;csrf
        &#64;method('PUT')

        &lt;div class="form-control mt-4"&gt;
            &lt;label class="label" for="name"&gt;
                &lt;span class="label-text"&gt;Name&lt;/span&gt;
            &lt;/label&gt;
            &lt;input type="text" name="name" id="name" class="input input-bordered w-full" placeholder="Name" value="&#123;&#123;$product->name&#125;&#125;" required&gt;
        &lt;/div&gt;
        &lt;div class="form-control mt-4"&gt;
            &lt;label class="label" for="price"&gt;
                &lt;span class="label-text"&gt;Price&lt;/span&gt;
            &lt;/label&gt;
            &lt;input type="text" name="price" id="price" class="input input-bordered w-full" placeholder="Price" value="&#123;&#123;$product->price&#125;&#125;" required&gt;
        &lt;/div&gt;
        &lt;div class="form-control mt-4"&gt;
            &lt;label class="label" for="stock"&gt;
                &lt;span class="label-text"&gt;Stock&lt;/span&gt;
            &lt;/label&gt;
            &lt;input type="text" name="stock" id="stock" class="input input-bordered w-full" placeholder="Stock" value="&#123;&#123;$product->stock&#125;&#125;" required&gt;
        &lt;/div&gt;
        &lt;div class="form-control mt-4"&gt;
            &lt;label class="label" for="description"&gt;
                &lt;span class="label-text"&gt;Description&lt;/span&gt;
            &lt;/label&gt;
            &lt;input type="text" name="description" id="description" class="input input-bordered w-full" placeholder="Description" value="&#123;&#123;$product->description&#125;&#125;" required&gt;
        &lt;/div&gt;
        &lt;div class="form-control mt-4"&gt;
            &lt;label class="label" for="image"&gt;
                &lt;span class="label-text"&gt;Image&lt;/span&gt;
            &lt;/label&gt;
            &lt;input type="url" name="image" id="image" class="input input-bordered w-full" placeholder="Image" value="&#123;&#123;$product->image&#125;&#125;"&gt;
        &lt;/div&gt;
        &lt;div class="form-control mt-4"&gt;
            &lt;label class="label" for="category"&gt;
                &lt;span class="label-text"&gt;Category&lt;/span&gt;
            &lt;/label&gt;
            &lt;input type="text" name="category" id="category" class="input input-bordered w-full" placeholder="Category" value="&#123;&#123;$product->category&#125;&#125;" required&gt;
        &lt;/div&gt;

        &lt;button type="submit" class="btn btn-info mt-6 w-full"&gt;Edit &#123;&#123; $product->name &#125;&#125;&lt;/button&gt;

    &lt;/form&gt;
&lt;/section&gt;
&#64;endsection

&#64;endsection</code></pre></div>


<h3>products/index.blade.php</h3>
<div class="codesnippet-wrapper">
    <div class="line-numbers"></div>
    <pre class="codesnippet"><code>&#64;extends('layouts.default')

&#123;&#123;-- &#64;SECTION FOR THE START CONTENT --&#125;&#125;
&#64;section('content')
    <section class="w-[30%] mx-auto py-8 px-12 bg-base-100 rounded-md shadow-md">

        &#64;if (session('success'))
        &lt;div class="alert alert-success"&gt;
            &#123;&#123; session('success') &#125;&#125;
        &lt;/div&gt;
    &#64;endif

    &lt;form action="&#123;&#123; route('products.store') &#125;&#125;" method="POST"&gt;

        &#64;csrf

        &lt;div class="form-control mt-4"&gt;
            &lt;label class="label" for="name"&gt;
                &lt;span class="label-text"&gt;Name&lt;/span&gt;
            &lt;/label&gt;
            &lt;input type="text" name="name" id="name" class="input input-bordered w-full" placeholder="Name" required&gt;
        &lt;/div&gt;

        &lt;div class="flex flex-wrap -mx-2"&gt;
            &lt;div class="w-full md:w-1/2 px-2"&gt;
                &lt;div class="form-control mt-4"&gt;
                    &lt;label class="label" for="modal_start_time"&gt;
                        &lt;span class="label-text"&gt;Price&lt;/span&gt;
                    &lt;/label&gt;
                    &lt;input type="text" name="price" id="price" class="input input-bordered w-full" placeholder="Price" required&gt;
                &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class="w-full md:w-1/2 px-2"&gt;
                &lt;div class="form-control mt-4"&gt;
                    &lt;label class="label" for="modal_end_time"&gt;
                        &lt;span class="label-text"&gt;Stock&lt;/span&gt;
                    &lt;/label&gt;
                    &lt;input type="text" name="stock" id="stock" class="input input-bordered w-full" placeholder="Stock" required&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;

        &lt;div class="form-control mt-4"&gt;
            &lt;label class="label" for="description"&gt;
                &lt;span class="label-text"&gt;Description&lt;/span&gt;
            &lt;/label&gt;
            &lt;input type="text" name="description" id="description" class="input input-bordered w-full" placeholder="Description" required&gt;
        &lt;/div&gt;
        &lt;div class="form-control mt-4"&gt;
            &lt;label class="label" for="image"&gt;
                &lt;span class="label-text"&gt;Image&lt;/span&gt;
            &lt;/label&gt;
            &lt;input type="url" name="image" id="image" class="input input-bordered w-full" placeholder="Image"&gt;
        &lt;/div&gt;
        &lt;div class="form-control mt-4"&gt;
            &lt;label class="label" for="category"&gt;
                &lt;span class="label-text"&gt;Category&lt;/span&gt;
            &lt;/label&gt;
            &lt;input type="text" name="category" id="category" class="input input-bordered w-full" placeholder="Category" required&gt;
        &lt;/div&gt;


        &lt;button type="submit" class="btn btn-success mt-6 w-full"&gt;Create&lt;/button&gt;

    &lt;/form&gt;
&lt;/section&gt;
&#64;endsection</code></pre></div>
