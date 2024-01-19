---
title: 'Elevate Your Laravel Experience with Laravel Toastify'
date: 2024-01-21
---

When it comes to creating a seamless user experience in your Laravel applications, displaying informative and visually appealing toast messages can make a significant difference. Laravel Toastify, a powerful PHP library, is designed to streamline the process of incorporating toast messages into your Laravel projects effortlessly.

---

## What is Laravel Toastify?

Laravel Toastify is a PHP library that leverages the capabilities of [toastify-js](https://github.com/apvarun/toastify-js), a versatile JavaScript library crafted for creating elegant toast messages. This package seamlessly integrates with Laravel, providing a hassle-free solution for incorporating toast notifications.

## Installation Made Simple

Getting started with Laravel Toastify is a breeze. Begin by installing the package through Composer:

```bash
composer require redot/laravel-toastify
```

After installation, make sure to include the necessary CSS and JavaScript files in your Blade templates. Add the following line to the head section of your `app.blade.php` file:

```html
@toastifyCss
```

And include the following line at the bottom of your `app.blade.php` file:

```html
@toastifyJs
```

For those seeking customization options, the configuration file can be published using the artisan command:

```bash
php artisan vendor:publish --tag=toastify-config
```

## Usage Demystified

Displaying toast messages is a straightforward process with Laravel Toastify. Utilize the `toastify()` helper function with the desired type and message:

```php
toastify()->success('Your action was successful!');
```

Five predefined methods are available by default: `success()`, `info()`, `warning()`, `error()`, and `toast()`. Each method accepts a message and an optional options array for customization:

```php
toastify()->success('Your action was successful!', [
    'duration' => 5000,
    // ...
]);
```

For those looking to create custom toast types, add them to the `toastifiers` array in the configuration file:

```php
'toastifiers' => [
    'custom' => [
        'duration' => 5000,
        'style' => [
            'background' => '#000',
            'color' => '#fff',
        ],
    ],
],
```

Then, use the `toastify()` helper function to call your custom method:

```php
toastify()->custom('/* ... */');
```

## Client-side Integration

Laravel Toastify extends its functionality to the client side, providing a `toastify()` method for displaying toast messages in your JavaScript code:

```javascript
toastify().success('Your action was successful!');
```

## Configuration at Your Fingertips

Fine-tune Laravel Toastify to suit your preferences through the configuration file located at `config/toastify.php`. Here, customize CDN links, define default toastifiers, and ensure a seamless integration with your Laravel application.

Elevate your user experience with Laravel Toastify – a powerful package that effortlessly combines PHP and JavaScript to deliver stunning toast messages in your Laravel projects. Streamline your notifications, enhance user engagement, and make your application truly stand out.