---
layout: default
title: Laravel PDF to Text
---

https://github.com/ricorocks-Digital-Agency/soap

```
composer require ricorocks-digital-agency/soap
```

```
use RicorocksDigitalAgency\Soap\Facades\Soap;
```

```
$customers = Soap::to('https://api.example.com')
  ->withBasicAuth('username', 'password')
  ->Customers(['SortBy' => 'name']);
```