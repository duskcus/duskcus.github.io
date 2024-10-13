---
layout: default
title: Laravel Components
---

&lt;h2&gt;1.8 CRUD views&lt;/h2&gt;

&lt;h3&gt;Step 1. Create the following folders in your views:&lt;/h3&gt;
&lt;ul&gt;
    &lt;li&gt;products
        &lt;ul&gt;
            &lt;li&gt;create.blade.php&lt;/li&gt;
            &lt;li&gt;index.blade.php&lt;/li&gt;
            &lt;li&gt;edit.blade.php&lt;/li&gt;
            &lt;li&gt;show.blade.php&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/li&gt;
&lt;/ul&gt;

&lt;h3&gt;products/index.blade.php&lt;/h3&gt;
&lt;div class="codesnippet-wrapper"&gt;
    &lt;div class="line-numbers"&gt;&lt;/div&gt;
    &lt;pre class="codesnippet"&gt;&lt;code&gt;@extends('layouts.default')

&#123;&#123;-- @SECTION FOR THE START CONTENT --&#125;&#125;
@section('content')
    &lt;section class="mx-auto py-8 px-12 bg-base-100 rounded-md shadow-mdg"&gt;

        &lt;div class="w-full inline-flex"&gt;
            &lt;h1 class="text-4xl font-bold mb-6"&gt;Products&lt;/h1&gt;

            &lt;div class="ml-auto inline-flex"&gt;

                &lt;a class="btn btn-success" href="&#123;&#123; route('products.create') &#125;&#125;"&gt;
                    &lt;button&gt;Create Product&lt;/button&gt;
                &lt;/a&gt;
            &lt;/div&gt;
        &lt;/div&gt;

        &lt;div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-6"&gt;
            @foreach ($products as $product)
                &lt;div class="card bg-base-300 shadow-xl"&gt;
                    &lt;figure&gt;
                        &lt;a href="&#123;&#123; route('products.show', $product-&gt;id) &#125;&#125;"&gt;
                            &lt;img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" /&gt;
                        &lt;/a&gt;
                    &lt;/figure&gt;
                    &lt;div class="card-body"&gt;
                        &lt;h2 class="text-xl capitalize"&gt;&#123;&#123; $product-&gt;name &#125;&#125;&lt;/h2&gt;
                        &lt;p&gt;&#123;&#123; $product-&gt;description &#125;&#125;&lt;/p&gt;
                        &lt;p&gt;€&#123;&#123; $product-&gt;price &#125;&#125;&lt;/p&gt;
                        &lt;div class="card-actions justify-end"&gt;
                            &lt;button class="btn btn-primary w-full"&gt;Buy Now&lt;/button&gt;
                            &#123;&#123;-- EDIT --&#125;&#125;
                            &lt;a class="btn btn-info w-full" href="&#123;&#123; route('products.edit', $product-&gt;id) &#125;&#125;"&gt;
                                &lt;button&gt;Edit &#123;&#123; $product-&gt;name &#125;&#125;&lt;/button&gt;
                            &lt;/a&gt;

                            &#123;&#123;-- DELETE --&#125;&#125;
                            &lt;form class="w-full" action="&#123;&#123; route('products.destroy', $product-&gt;id) &#125;&#125;" method="POST"&gt;
                                @csrf
                                @method('DELETE')
                                &lt;button class="btn btn-error w-full" type="submit"&gt;Delete &#123;&#123; $product-&gt;name &#125;&#125;&lt;/button&gt;
                            &lt;/form&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            @endforeach

        &lt;/div&gt;
        &#123;&#123; $products-&gt;links() &#125;&#125;

    &lt;/section&gt;
@endsection&lt;/code&gt;&lt;/pre&gt;&lt;/div&gt;


&lt;h3&gt;products/index.blade.php&lt;/h3&gt;
&lt;div class="codesnippet-wrapper"&gt;
    &lt;div class="line-numbers"&gt;&lt;/div&gt;
    &lt;pre class="codesnippet"&gt;&lt;code&gt;@extends('layouts.default')

&#123;&#123;-- @SECTION FOR THE START CONTENT --&#125;&#125;
@section('content')
    &lt;section&gt;
        &#123;&#123;-- &lt;a href="&#123;&#123;route('products.edit', $product-&gt;id)&#125;&#125;"&gt;
            &lt;button class="btn btn-info ml-auto"&gt;Edit Mode&lt;/button&gt;
        &lt;/a&gt; --&#125;&#125;

        &lt;div class="grid grid-cols-2 gap-6 p-6"&gt;
        &lt;img class="h-[300px]" src="&#123;&#123; $product-&gt;image ?? 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp' &#125;&#125;" alt="Product Image"&gt;
        &lt;div&gt;
            &lt;p class="text-2xl mb-6 capitalize"&gt;&#123;&#123; $product-&gt;name &#125;&#125;&lt;/p&gt;
            &lt;p&gt;&#123;&#123; $product-&gt;description &#125;&#125;&lt;/p&gt;
            &lt;p&gt;price: &#123;&#123; $product-&gt;price &#125;&#125;&lt;/p&gt;
            &lt;p&gt;stock: &#123;&#123; $product-&gt;stock &#125;&#125;&lt;/p&gt;
            &lt;p&gt;category: &lt;a class="link" href=""&gt;&#123;&#123; $product-&gt;category &#125;&#125;&lt;/a&gt;&lt;/p&gt;
        &lt;/div&gt;
        &lt;/div&gt;
    &lt;/section&gt;
@endsection&lt;/code&gt;&lt;/pre&gt;&lt;/div&gt;


&lt;h3&gt;products/index.blade.php&lt;/h3&gt;
&lt;div class="codesnippet-wrapper"&gt;
    &lt;div class="line-numbers"&gt;&lt;/div&gt;
    &lt;pre class="codesnippet"&gt;&lt;code&gt;@extends('layouts.default')

&#123;&#123;-- @SECTION FOR THE START CONTENT --&#125;&#125;
@section('content')
    &lt;section class="w-[30%] mx-auto py-8 px-12 bg-base-100 rounded-md shadow-md"&gt;

        &lt;form action="&#123;&#123; route('products.update', $product-&gt;id) &#125;&#125;" method="POST"&gt;

            @csrf
            @method('PUT')

            &lt;div class="form-control mt-4"&gt;
                &lt;label class="label" for="name"&gt;
                    &lt;span class="label-text"&gt;Name&lt;/span&gt;
                &lt;/label&gt;
                &lt;input type="text" name="name" id="name" class="input input-bordered w-full" placeholder="Name" value="&#123;&#123;$product-&gt;name&#125;&#125;" required&gt;
            &lt;/div&gt;
            &lt;div class="form-control mt-4"&gt;
                &lt;label class="label" for="price"&gt;
                    &lt;span class="label-text"&gt;Price&lt;/span&gt;
                &lt;/label&gt;
                &lt;input type="text" name="price" id="price" class="input input-bordered w-full" placeholder="Price" value="&#123;&#123;$product-&gt;price&#125;&#125;" required&gt;
            &lt;/div&gt;
            &lt;div class="form-control mt-4"&gt;
                &lt;label class="label" for="stock"&gt;
                    &lt;span class="label-text"&gt;Stock&lt;/span&gt;
                &lt;/label&gt;
                &lt;input type="text" name="stock" id="stock" class="input input-bordered w-full" placeholder="Stock" value="&#123;&#123;$product-&gt;stock&#125;&#125;" required&gt;
            &lt;/div&gt;
            &lt;div class="form-control mt-4"&gt;
                &lt;label class="label" for="description"&gt;
                    &lt;span class="label-text"&gt;Description&lt;/span&gt;
                &lt;/label&gt;
                &lt;input type="text" name="description" id="description" class="input input-bordered w-full" placeholder="Description" value="&#123;&#123;$product-&gt;description&#125;&#125;" required&gt;
            &lt;/div&gt;
            &lt;div class="form-control mt-4"&gt;
                &lt;label class="label" for="image"&gt;
                    &lt;span class="label-text"&gt;Image&lt;/span&gt;
                &lt;/label&gt;
                &lt;input type="url" name="image" id="image" class="input input-bordered w-full" placeholder="Image" value="&#123;&#123;$product-&gt;image&#125;&#125;"&gt;
            &lt;/div&gt;
            &lt;div class="form-control mt-4"&gt;
                &lt;label class="label" for="category"&gt;
                    &lt;span class="label-text"&gt;Category&lt;/span&gt;
                &lt;/label&gt;
                &lt;input type="text" name="category" id="category" class="input input-bordered w-full" placeholder="Category" value="&#123;&#123;$product-&gt;category&#125;&#125;" required&gt;
            &lt;/div&gt;

            &lt;button type="submit" class="btn btn-info mt-6 w-full"&gt;Edit &#123;&#123; $product-&gt;name &#125;&#125;&lt;/button&gt;

        &lt;/form&gt;
    &lt;/section&gt;
@endsection

@endsection&lt;/code&gt;&lt;/pre&gt;&lt;/div&gt;


&lt;h3&gt;products/index.blade.php&lt;/h3&gt;
&lt;div class="codesnippet-wrapper"&gt;
    &lt;div class="line-numbers"&gt;&lt;/div&gt;
    &lt;pre class="codesnippet"&gt;&lt;code&gt;@extends('layouts.default')

&#123;&#123;-- @SECTION FOR THE START CONTENT --&#125;&#125;
@section('content')
    &lt;section class="w-[30%] mx-auto py-8 px-12 bg-base-100 rounded-md shadow-md"&gt;

        @if (session('success'))
            &lt;div class="alert alert-success"&gt;
                &#123;&#123; session('success') &#125;&#125;
            &lt;/div&gt;
        @endif

        &lt;form action="&#123;&#123; route('products.store') &#125;&#125;" method="POST"&gt;

            @csrf

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
@endsection&lt;/code&gt;&lt;/pre&gt;&lt;/div&gt;
