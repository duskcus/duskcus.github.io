---
layout: default
title: Laravel Middleware
---

<p>Laravel has specific naming schemes for policies for auto detection, it often uses a model reference and ends with Policy.</p>
```
php artisan make:middleware CanUpdatePost
```
Class names
Authenticate — Middleware for checking if the user is authenticated.
CheckRole — Middleware for checking user roles.
RedirectIfAuthenticated — Middleware that redirects users if they are already authenticated.
LogActivity — Middleware for logging user activity.