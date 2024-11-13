---
layout: default
title: Laravel Services
---

<h2>x.x SERVICES</h2>
<p>Services, while not an official part of Laravel, are a popular architectural pattern used by many developers to encapsulate and organize an application's business logic. This pattern, which creates a layer between controllers and models, offers benefits such as separation of concerns, code reusability, improved testability, better scalability, and easier maintainability. To implement Services in Laravel:</p>

<p>Create a Services directory in your app folder.</p>
```
php artisan make:provider EmailServiceProvider
```

<h3>Example Service:</h3>
<div class="codesnippet-wrapper">
    <div class="line-numbers">
    </div>
    <pre class="codesnippet">
        <code>
<?php

namespace App\Services;

use App\Models\User;

final class UserService
{
    public function store(array $validatedData)
    {
        // you validate the data in the controller and send it as a parameter to the store function.

        $user = User::create([
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
            'password' => bcrypt($validatedData['password'])
        ]);

        $user->save();
    }
}
        </code>
    </pre>
</div>

<p>This is how it would look in your UserController:</p>

<h3>Example Controller:</h3>
<div class="codesnippet-wrapper">
    <div class="line-numbers">
    </div>
    <pre class="codesnippet">
        <code>
<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Services\UserService;
use Illuminate\Http\Request;

class UserController extends Controller
{
    protected $userService;

    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }

    public function store(Request $request)
    {
        $validatedData->validate([
            'name' => 'required|string'
        ]);

        $this->userService->store($request);

        return redirect()->route('users.index');
    }
}
        </code>
    </pre>
</div>