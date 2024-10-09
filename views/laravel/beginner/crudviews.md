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
    <pre class="codesnippet"><code>&#64;extends(&#123;'layouts.default'&#125;)

&#123;&#123;-- &#64;SECTION FOR THE START CONTENT --&#125;&#125;
&#64;section('content')
    &lt;section class="mx-auto py-8 px-12 bg-base-100 rounded-md shadow-mdg"&gt;

        &lt;div class="w-full inline-flex"&gt;
            &lt;h1 class="text-4xl font-bold mb-6"&gt;Products&lt;/h1&gt;

            &lt;div class="ml-auto inline-flex"&gt;

                &lt;button class="btn btn-success"&gt;Create Product&lt;/button&gt;
                &lt;button class="btn btn-primary ml-6"&gt;Edit Mode&lt;/button&gt;
                
            &lt;/div&gt;
        &lt;/div&gt;

        &lt;div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-6"&gt;
            &#64;foreach (&#36;products as &#36;product)
                &lt;div class="card bg-base-300 shadow-xl"&gt;
                    &lt;figure&gt;
                        &lt;a href="&#123;&#123; route('products.show', &#36;product-&gt;id) &#125;&#125;"&gt;
                            &lt;img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" /&gt;
                        &lt;/a&gt;
                    &lt;/figure&gt;
                    &lt;div class="card-body"&gt;
                        &lt;h2 class="text-xl capitalize"&gt;&#123;&#123; &#36;product-&gt;name &#125;&#125;&lt;/h2&gt;
                        &lt;p&gt;&#123;&#123; &#36;product-&gt;description &#125;&#125;&lt;/p&gt;
                        &lt;p&gt;€&#123;&#123; &#36;product-&gt;price &#125;&#125;&lt;/p&gt;
                        &lt;div class="card-actions justify-end"&gt;
                            &lt;button class="btn btn-primary w-full"&gt;Buy Now&lt;/button&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &#64;endforeach
        &lt;/div&gt;

        &#123;&#123; &#36;products-&gt;links() &#125;&#125;

    &lt;/section&gt;
&#64;endsection</code></pre>
</div>
