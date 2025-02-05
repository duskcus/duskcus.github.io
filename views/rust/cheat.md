---
layout: default
title: Rust Cheat Sheet
---

<h2>CHEATSHEET</h2>
<h3>Important for database/migrations:</h3>
<p>Every unique customer can buy multiple products = One to many = foreign key</p>

<h3>Important Commands:</h3>


<p>Creates a project</p>

```
cargo init
```

<p>Builds a project</p>

```
cargo build
cargo run
cargo check
```

<p>If statement</p>

```
// comment in rust
fn main(){
    let mut num:i32 = 5;
    if num > 0 {
        printlin!("Number is bigger than 0");
    }
    else {
        printlin!("Number is smaller than 0");
    }
}
```

<p>Functions and parameters</p>

```
// function with parameter
fn display(param_name:String){
    printlin!("param_name = {}", param_name);
}

// calling
fn main(){
    let name:String = String::from("Michael");
    display(name);
}
```