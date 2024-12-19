---
layout: default
title: Laravel Request
---

<h3>Laravel Request</h3>
<p>Laravel requests are an alternative way to add validation to your project. In my eyes you use requests to make your code reusable or more readable.</p>


<p>If you used this command here below. Laravel default creates a store and update request.</p>
```
php artisan make:model Product --controller --resource --requests --migration --seed
```

<p>You can also create them seperatly like this.</p>
```
php artisan make:request StoreProductRequest
php artisan make:request UpdateProductRequest
```

<p>Although I feel this is kind of odd, depending on the usecase. Let's say it was for reusability, you'd likely combine the request as they, also likely, share the same validation rules. This results in less files and code in general. I recommend using request in a singular request because even if you find out later your validation has become more complex, it is easy to just delete your file and replace it with two seperate ones.</p>
```
php artisan make:request ProductRequest
```

<p>Here is an example of the store function for a product CRUD. (Still assuming the standard request which is split up for those who want to do that.)</p>
```
<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        // You can adjust this based on your authorization logic
        // Returning true allows all users to make this request
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            // Name is required, a string, and has a max length of 255 characters
            'name' => 'required|string|max:255',

            // Description is optional but must be a string if provided
            'description' => 'nullable|string',

            // Price is required and should be a positive integer (you can modify to `numeric` if decimal values are needed)
            'price' => 'required|integer|min:0',

            // Image URL is optional but should be a valid URL if provided
            'image_url' => 'nullable|url',

            // Stock should be an integer and must be greater than or equal to 0
            'stock' => 'required|integer|min:0',

            // Category is required and must be a string (you can make this more specific if you have predefined categories)
            'category' => 'required|string|max:255',
        ];
    }

    /**
     * Get custom messages for validation errors.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'name.required' => 'The product name is required.',
            'price.required' => 'The product price is required.',
            'stock.required' => 'The stock quantity is required.',
            'category.required' => 'The product category is required.',
            'name.string' => 'The product name must be a string.',
            'price.integer' => 'The price must be an integer.',
            'stock.integer' => 'The stock must be an integer.',
            'image_url.url' => 'The image URL must be a valid URL.',
        ];
    }
}
```

<p>The controller would change as such.</p>
```
use App\Http\Requests\StoreProductRequest;

    public function store(StoreProductRequest $request)
    {
        // The request is validated automatically by the StoreProductRequest class

        // Create a new product using the validated data
        Product::create($request->validated());

        // Redirect to the products list with a success message
        return redirect()->route('products.create')->with('success', 'Product created successfully.');
    }
```