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

Faking requests
```
Soap::fake(
  'http://api.example.com:Customers' => Response::new([['name' => 'Garry'], ['name' => 'Bob']])
);
 
// This request will now return our requested response
$customers = Soap::to('https://api.example.com')->Customers(['SortBy' => 'name']);
 
// When faking, you can perform inspections on requests too!
Soap::assertSent(function($request, $response) {
  return in_array('Garry', $response->response);
});
 
Soap::assertSentCount(1);
```