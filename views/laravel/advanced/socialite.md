<h2>1. Install Laravel Socialite</h2>
```
composer require laravel/socialite
```

<h2>2. Configure Google API Credentials</h2>

	1.	Go to the Google Cloud Console.
	2.	Navigate to APIs & Services > Credentials.
	3.	Click Create Credentials > OAuth client ID.
	4.	Configure your OAuth consent screen and choose Web application as the Application type.
	5.	In the Authorized redirect URIs, add your callback URL, typically:


<h2>3. Add Google Credentials to .env</h2>

Update your .env file with the following values:

```
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GOOGLE_REDIRECT_URI=http://your-app-url.com/auth/google/callback
```

<h2>4. Update config/services.php</h2>

Add Google as a new service in config/services.php:

```
'google' => [
    'client_id' => env('GOOGLE_CLIENT_ID'),
    'client_secret' => env('GOOGLE_CLIENT_SECRET'),
    'redirect' => env('GOOGLE_REDIRECT_URI'),
],
```

<h2>5. Create Routes</h2>

Define routes for redirecting to Google and handling the callback:

```
use App\Http\Controllers\Auth\GoogleController;

Route::get('auth/google', [GoogleController::class, 'redirectToGoogle'])->name('auth.google');
Route::get('auth/google/callback', [GoogleController::class, 'handleGoogleCallback']);
```

<h2>6. Create the Controller</h2>

Create a new controller for handling the Google authentication logic. Run:
php artisan make:controller Auth/GoogleController

Then add the following methods to GoogleController.php:
```
<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class GoogleController extends Controller
{
    public function redirectToGoogle()
    {
        return Socialite::driver('google')->redirect();
    }

    public function handleGoogleCallback()
    {
        $googleUser = Socialite::driver('google')->stateless()->user();

        // Find or create user
        $user = User::firstOrCreate(
            ['email' => $googleUser->getEmail()],
            [
                'name' => $googleUser->getName(),
                'google_id' => $googleUser->getId(),
                'avatar' => $googleUser->getAvatar(),
                'password' => bcrypt('default_password'), // A default password can be set
            ]
        );

        Auth::login($user);

        return redirect()->route('home'); // Redirect to the desired route
    }
}
```
