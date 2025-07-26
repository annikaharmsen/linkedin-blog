<?php

namespace Tests\Feature;

use Database\Seeders\PostSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class PostControllerTest extends TestCase
{

    use RefreshDatabase;

    private $postStructure = [
        'author',
        'title',
        'body'
    ];

    protected function setUp(): void
    {
        parent::setUp();
        $this->seed(PostSeeder::class);
    }

    private function generateAuthor()
    {
        return fake()->name;
    }

    private function generateTitle()
    {
        return fake()->sentence;
    }

    private function generateBody()
    {
        return fake()->paragraph();
    }

    private function generatePost() {
        return [
            'author' => $this->generateAuthor(),
            'title' => $this->generateTitle(),
            'body' => $this->generateBody()
        ];
    }

    public function test_index(): void
    {
        $response = $this->get('/api/posts');

        $response
            ->assertStatus(200)
            ->assertJsonStructure([
                'data' => [
                    '*' => $this->postStructure,
                    ]
                ]);
    }

    public function test_store()
    {
        $post = $this->generatePost();

        $response = $this->post('/api/posts', $post);

        $response
            ->assertStatus(201)
            ->assertJson(['data' => $post]);

        $this->assertDatabaseHas('posts', $post);
    }

    public function test_show()
    {
        $response = $this->get('/api/posts/1');

        $response
            ->assertStatus(200)
            ->assertJsonStructure([
                'data' => $this->postStructure
                ]);
    }

    public function test_update()
    {
        $post = $this->generatePost();

        $response = $this->put('/api/posts/1', $post);

        $response
            ->assertStatus(200)
            ->assertJsonFragment($post)
            ->assertJsonStructure([
                'data' => $this->postStructure
                ]);

        $this->assertDatabaseHas('posts', [
            'id' => 1,
            'title' => $post['title']
        ]);
    }

    public function test_destroy()
    {
        $response = $this->delete('/api/posts/1');

        $response->assertStatus(410);
    }
}
