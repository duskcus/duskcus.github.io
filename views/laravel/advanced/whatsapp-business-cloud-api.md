<p>What do you need?</p>
<li>Meta developer account</li>
<li>WhatsApp business account</li>

<p>Needed in app</p>
<li>Phone numbers migration</li>
<li>Form</li>
<li>Controller</li>
<li>Route endpoint</li>

<p>Add your phone number to user seeders/DatabaseSeeder for testing</p>

<p>New user migration</p>
```
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('phone_number', 20);
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });

        Schema::create('password_reset_tokens', function (Blueprint $table) {
            $table->string('email')->primary();
            $table->string('token');
            $table->timestamp('created_at')->nullable();
        });

        Schema::create('sessions', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->foreignId('user_id')->nullable()->index();
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->longText('payload');
            $table->integer('last_activity')->index();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
        Schema::dropIfExists('password_reset_tokens');
        Schema::dropIfExists('sessions');
    }
};
```

<p>Crate a controller</p>
```
<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Http;

class WhatsAppController extends Controller
{

    public function index()
    {
        // Get all users
        $users = User::all();
        // $teams = Team::all();
        // $regions = Team::all();

        // Return a view with users data
        return view('index', ['users' => $users]);
    }


    public function sendTestMessage()
    {
        // Query to get phone numbers of specific users
        $phoneNumbers = User::whereIn('id', [1, 2])->pluck('phone_number');

        // Prepare the message content
        $bodyText = "Click the button below to visit the site.";  // Optional body text

        // Loop through each phone number and send the message
        foreach ($phoneNumbers as $phoneNumber) {
            $response = Http::withHeaders([
                'Authorization' => 'Bearer ' . env('WHATSAPP_ACCESS_TOKEN'),
                'Content-Type' => 'application/json',
            ])->post('https://graph.facebook.com/v21.0/' . env('WHATSAPP_PHONE_NUMBER_ID') . '/messages', [
                'messaging_product' => 'whatsapp',
                'recipient_type' => 'individual',
                'to' => $phoneNumber,
                'type' => 'interactive',
                'interactive' => [
                    'type' => 'button',
                    'header' => [
                        'type' => 'text', // Optionally you can add a header
                        'text' => 'Important Update'
                    ],
                    'body' => [
                        'text' => $bodyText,  // Main message content
                    ],
                    'footer' => [
                        'text' => 'Powered by Your Company'  // Optional footer
                    ],
                    'action' => [
                        'buttons' => [
                            [
                                'type' => 'reply',
                                'reply' => [
                                    'id' => 'change-button',  // Button identifier
                                    'title' => 'Change',  // Button label
                                ]
                            ],
                            [
                                'type' => 'reply',
                                'reply' => [
                                    'id' => 'website-button',  // Button identifier
                                    'title' => 'Go to Website',  // Button label
                                ]
                            ]
                        ]
                    ]
                ],
            ]);
        }

        return redirect()->back();
    }
```