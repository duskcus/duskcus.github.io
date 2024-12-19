---
layout: default
title: Laravel Policies
---

<p>Laravel has specific naming schemes for policies for auto detection, it often uses a model reference and ends with Policy.</p>
```
php artisan make:policy ProductPolicy
```

<p>This gives a template version of the policy.</p>
```
php artisan make:policy ProductPolicy --model=Product
```