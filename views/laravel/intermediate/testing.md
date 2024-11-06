---
layout: default
title: Laravel Feature Testing
---

In Laravel, you should create a feature test for your CRUD functionality by running:
```
php artisan make:test PostTest
```

Open the PostTest.php file and add the following code:
```
<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Post;
use Illuminate\Foundation\Testing\RefreshDatabase;

class PostTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test creating a post.
     */
    public function test_user_can_create_a_post()
    {
        // Mock data for the post
        $postData = [
            'title' => 'Sample Post Title',
            'body' => 'This is the body of the sample post.',
        ];

        // Send a POST request to create a new post
        $response = $this->post('/posts', $postData);

        // Assert that the post was created
        $response->assertStatus(201); // HTTP 201 for created resource
        $this->assertDatabaseHas('posts', $postData); // Verify post in database
    }

    /**
     * Test retrieving a post.
     */
    public function test_user_can_view_a_post()
    {
        // Create a post in the database
        $post = Post::factory()->create();

        // Send a GET request to retrieve the post
        $response = $this->get('/posts/' . $post->id);

        // Assert that the response contains the post data
        $response->assertStatus(200)
                 ->assertJson([
                     'id' => $post->id,
                     'title' => $post->title,
                     'body' => $post->body,
                 ]);
    }

    /**
     * Test updating a post.
     */
    public function test_user_can_update_a_post()
    {
        // Create a post in the database
        $post = Post::factory()->create();

        // Updated data for the post
        $updatedData = [
            'title' => 'Updated Post Title',
            'body' => 'This is the updated body of the post.',
        ];

        // Send a PUT request to update the post
        $response = $this->put('/posts/' . $post->id, $updatedData);

        // Assert that the post was updated
        $response->assertStatus(200);
        $this->assertDatabaseHas('posts', $updatedData); // Verify updated data in database
    }

    /**
     * Test deleting a post.
     */
    public function test_user_can_delete_a_post()
    {
        // Create a post in the database
        $post = Post::factory()->create();

        // Send a DELETE request to delete the post
        $response = $this->delete('/posts/' . $post->id);

        // Assert that the post was deleted
        $response->assertStatus(200);
        $this->assertDatabaseMissing('posts', ['id' => $post->id]); // Verify post is removed
    }
}
```

To run the tests, use:
```
php artisan test
```
