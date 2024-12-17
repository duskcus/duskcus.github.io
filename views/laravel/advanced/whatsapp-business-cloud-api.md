<p>What do you need?</p>
<li>Meta developer account</li>
<li>WhatsApp business account</li>

<p>We need the following in the app</p>
<li>Phone numbers migration</li>
<li>Form</li>
<li>Controller</li>
<li>Route endpoint</li>

<h3>1. Add your phone number to user seeders/DatabaseSeeder for testing</h3>

<h3>2. New user migration</h3>
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

<h3>3. Create a controller</h3>
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


        public function sendTestMessage(Request $request)
    {
        // Validate the form inputs
        $request->validate([
            'subject' => 'required|string|max:255',
            'message' => 'required|string',
            'file' => 'nullable|file|max:10240', // Max file size: 10MB
        ]);

        // Retrieve form data
        $subject = $request->input('subject');
        $message = $request->input('message');
        $file = $request->file('file');

        // Query to get phone numbers of specific users
        $phoneNumbers = User::whereIn('id', [1])->pluck('phone_number');

        // Upload file if provided
        $mediaId = null;
        if ($file) {
            $filePath = $file->getPathname();
            $fileName = $file->getClientOriginalName();
            $mimeType = $file->getMimeType();

            // Upload file to WhatsApp server
            $uploadResponse = Http::withHeaders([
                'Authorization' => 'Bearer ' . env('WHATSAPP_ACCESS_TOKEN'),
            ])->attach('file', file_get_contents($filePath), $fileName)
                ->post('https://graph.facebook.com/v21.0/' . env('WHATSAPP_PHONE_NUMBER_ID') . '/media', [
                    'messaging_product' => 'whatsapp',
                    'type' => $mimeType,
                ]);

            if ($uploadResponse->successful()) {
                $mediaId = $uploadResponse->json()['id'];
            } else {
                // Handle upload failure
                return redirect()->back()->withErrors(['file' => 'Failed to upload file to WhatsApp']);
            }
        }

        // Define the CTA button content
        $buttonText = "Visit URL";  // Button label
        $buttonUrl = "https://example.com";  // URL to be opened when button is clicked
        $headerText = $subject;  // Optional header text
        $bodyText = $message;  // Optional body text (message content)
        $footerText = "HP Events";  // Optional footer text

        // Loop through each phone number and send the message
        $sendSuccessful = false;
        foreach ($phoneNumbers as $phoneNumber) {
            // Prepare the base message payload
            $messagePayload = [
                'messaging_product' => 'whatsapp',
                'to' => $phoneNumber,
                'interactive' => [
                    'type' => 'cta_url',
                    'header' => [
                        'type' => 'text',
                        'text' => $headerText,  // Optional: Can be null if not needed
                    ],
                    'body' => [
                        'text' => $bodyText,  // Optional: Can be null if not needed
                    ],
                    'footer' => [
                        'text' => $footerText,  // Optional: Can be null if not needed
                    ],
                    'action' => [
                        'name' => 'cta_url',
                        'parameters' => [
                            'display_text' => $buttonText,
                            'url' => $buttonUrl,
                        ],
                        // Adding the reply button
                        'buttons' => [
                            'type' => 'reply',
                            'reply' => [
                                'id' => 'button',  // Replace with actual button ID
                                'title' => 'REPLY'  // Replace with the button label text
                            ]
                        ]
                    ],
                ],
            ];

            if ($mediaId) {
                // If a file is uploaded, we include the media ID (document)
                $messagePayload['type'] = 'document';
                $messagePayload['document'] = [
                    'id' => $mediaId,
                    'caption' => "{$subject}\n\n{$message}",
                ];
            } else {
                // If no file is uploaded, send as text (with interactive button)
                $messagePayload['type'] = 'interactive';
            }

            // Send the message via WhatsApp API
            $response = Http::withHeaders([
                'Authorization' => 'Bearer ' . env('WHATSAPP_ACCESS_TOKEN'),
                'Content-Type' => 'application/json',
            ])->post('https://graph.facebook.com/v21.0/' . env('WHATSAPP_PHONE_NUMBER_ID') . '/messages', $messagePayload);

            // Check the response
            if ($response->successful()) {
                $sendSuccessful = true;
            } else {
                // dd($response);
                // Log the error if the request fails
                // Log::error('Failed to send message to ' . $phoneNumber . ': ' . $response->body());
            }
        }

        // After attempting to send the messages, redirect back with success or failure message
        if ($sendSuccessful) {
            return redirect()->back()->with('success', 'Test message sent successfully!');
        } else {
            return redirect()->back()->withErrors(['message' => 'Failed to send the test message']);
        }
    }
```

<h3>4. Create the form</h3>
```
@extends('layouts.default')

@section('content')
    <section class="flex items-center justify-center min-h-screen px-4">
        <div class="w-full space-y-6">
            <div class="flex gap-6">
                <!-- Teams Dropdown -->
                <div class="w-full form-control">
                    <label for="team" class="label">
                        <span class="label-text">Team</span>
                    </label>
                    <select id="team" name="team" class="w-full select select-bordered">
                        <!-- Add dynamic options based on your teams data -->
                        <option value="" selected disabled>Selecteer Team</option>
                        <option>Team 1</option>
                        <option>Team 2</option>
                        <option>Team 3</option>
                    </select>
                </div>

                <!-- Regios (Regions) Dropdown -->
                <div class="w-full form-control">
                    <label for="regio" class="label">
                        <span class="label-text">Regio</span>
                    </label>
                    <select id="regio" name="regio" class="w-full select select-bordered">
                        <!-- Add dynamic options based on your regions data -->
                        <option value="" selected disabled>Selecteer Regio</option>
                        <option>Regio 1</option>
                        <option>Regio 2</option>
                        <option>Regio 3</option>
                    </select>
                </div>
            </div>

            <form action="{{ route('whatsapp') }}" method="POST" enctype="multipart/form-data" class="space-y-4">
                @csrf

                <!-- Subject -->
                <div class="form-control">
                    <label for="subject" class="label">
                        <span class="label-text">Subject</span>
                    </label>
                    <input id="subject" type="text" name="subject" class="w-full input input-bordered" placeholder="Subject" value="Titel">
                </div>

                <!-- Message -->
                <div class="form-control">
                    <label for="message" class="label">
                        <span class="label-text">Message</span>
                    </label>
                    <textarea id="message" name="message" class="w-full h-24 textarea textarea-bordered" placeholder="Typ hier je message">Lorem ipsum dolor sit amet</textarea>
                </div>

                <!-- File -->
                <div class="form-control">
                    <label for="file" class="label">
                        <span class="label-text">File</span>
                    </label>
                    <input id="file" type="file" name="file" class="w-full file-input file-input-bordered">
                </div>

                <!-- Submit Button -->
                <div class="form-control">
                    <button type="submit" class="w-full btn btn-primary">Verzenden</button>
                </div>
            </form>

            <!-- Success Message -->
            @if(session('success'))
                <div role="alert" class="mt-4 alert alert-success">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 stroke-current shrink-0" fill="none" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{{ session('success') }}</span>
                </div>
            @endif

            <!-- Error Message -->
            @if($errors->any())
                <div role="alert" class="mt-4 alert alert-error">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 stroke-current shrink-0" fill="none" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>{{ $errors->first() }}</span>
                </div>
            @endif
        </div>
    </section>
@endsection
```

<h3>5. Add the post endpoint</h3>
```
Route::post('/whatsapp', [WhatsAppController::class, 'sendTestMessage'])->name('whatsapp');
```