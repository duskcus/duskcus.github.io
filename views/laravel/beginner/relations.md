```
//model
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasMany;

public function phone(): HasOne
{
    return $this->hasOne(Phone::class);
}

public function user(): BelongsTo
{
    return $this->belongsTo(User::class, 'foreign_key');
}

public function comments(): HasMany
{
    return $this->hasMany(Comment::class)->chaperone();
}

//migrations
$table->unsignedBigInteger('tag_id')->nullable(); // Added tag_id column
$table->foreign('tag_id')->references('id')->on('tags')->onDelete('cascade');

//controller
$user = User::find(1);
$posts = $user->posts;

$post = Post::find(1);
$user = $post->user;

// To attach a tag to a post
$post = Post::find(1);
$post->tags()->attach($tagId);

// To detach a tag from a post
$post->tags()->detach($tagId);

// To sync multiple tags with a post
$post->tags()->sync([1, 2, 3]);
```