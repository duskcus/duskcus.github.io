1. Retrieving Data

    all()
    Retrieve all records from a table (returns a collection of models).

$users = User::all();

get()
Retrieve a collection of models, with optional constraints like where or orderBy.

$users = User::where('active', 1)->get();

find($id)
Retrieve a model by its primary key (ID).

$user = User::find(1);

first()
Retrieve the first record that matches the query.

$user = User::where('email', 'user@example.com')->first();

pluck($column)
Retrieve a single column's value from all records.

$emails = User::pluck('email');

select($columns)
Specify which columns to retrieve.

$users = User::select('name', 'email')->get();

firstOrFail()
Retrieve the first result or fail with a 404 error if not found.

$user = User::where('id', 1)->firstOrFail();

findOrFail($id)
Retrieve a model by its primary key or fail with a 404 error.

    $user = User::findOrFail(1);

2. Filtering & Conditions

    where($column, $operator, $value)
    Apply a basic WHERE condition to the query.

$users = User::where('age', '>', 18)->get();

orWhere($column, $operator, $value)
Apply an OR WHERE condition.

$users = User::where('status', 'active')->orWhere('role', 'admin')->get();

whereIn($column, $values)
Retrieve records where a column's value is in a list of values.

$users = User::whereIn('role', ['admin', 'editor'])->get();

whereBetween($column, [$min, $max])
Retrieve records where a column's value is between two values.

$users = User::whereBetween('age', [18, 30])->get();

whereNull($column)
Retrieve records where a column is NULL.

$users = User::whereNull('deleted_at')->get();

whereDate($column, $date)
Filter by exact date (ignores time).

$users = User::whereDate('created_at', '2024-01-01')->get();

whereHas($relation, $callback)
Filter based on related models (e.g., checking a user's posts).

    $users = User::whereHas('posts', function($query) {
        $query->where('status', 'published');
    })->get();

3. Ordering & Limits

    orderBy($column, $direction)
    Order the results by a specific column in ascending or descending order.

$users = User::orderBy('name', 'asc')->get();

take($limit)
Limit the number of records returned.

$users = User::take(5)->get();  // Limit to 5 records

limit($limit)
Same as take(), but it uses a fluent query builder.

$users = User::limit(5)->get();

skip($offset)
Skip the first $offset records (for pagination).

    $users = User::skip(10)->take(5)->get();  // Skip first 10 records, take next 5

4. Aggregates

    count()
    Get the total count of records that match the query.

$userCount = User::where('active', 1)->count();

max($column)
Get the maximum value of a column.

$maxAge = User::max('age');

min($column)
Get the minimum value of a column.

$minAge = User::min('age');

avg($column)
Get the average value of a column.

$averageAge = User::avg('age');

sum($column)
Get the sum of values in a column.

    $totalSalary = User::sum('salary');

5. Updating Data

    update($attributes)
    Update one or more records.

User::where('id', 1)->update(['status' => 'active']);

increment($column, $value)
Increment a column's value.

User::where('id', 1)->increment('age');

decrement($column, $value)
Decrement a column's value.

User::where('id', 1)->decrement('age');

save()
Save the changes to an existing model instance.

    $user = User::find(1);
    $user->status = 'inactive';
    $user->save();

6. Deleting Data

    delete()
    Delete a record or a collection of records.

User::where('status', 'inactive')->delete();

destroy($id)
Delete a record by its primary key.

User::destroy(1);

forceDelete()
Permanently delete a record (bypassing soft deletes).

    $user = User::find(1);
    $user->forceDelete();

7. Eloquent Relationships

    has($relation)
    Check if a model has a given relationship.

$users = User::has('posts')->get();

with($relations)
Eager load relationships (improve performance).

$users = User::with('posts')->get();

belongsTo
Define an inverse one-to-many relationship.

public function user() {
    return $this->belongsTo(User::class);
}

hasMany
Define a one-to-many relationship.

    public function posts() {
        return $this->hasMany(Post::class);
    }

8. Miscellaneous

    distinct()
    Retrieve distinct (unique) results.

$users = User::distinct()->get();

toSql()
Get the raw SQL query for debugging.

$sql = User::where('status', 'active')->toSql();

dd()
Dump and die (for debugging).

dd($users);
