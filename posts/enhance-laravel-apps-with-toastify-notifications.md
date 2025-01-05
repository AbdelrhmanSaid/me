---
title: Enhance Laravel Apps with Toastify Notifications
date: 2025-01-05
tags: [laravel, toastify, notifications, user-experience]
draft: false
---

Enhancing user experience with real-time feedback is crucial in modern web applications. Toast notifications provide a non-intrusive way to deliver messages to users, and integrating them into your Laravel projects can be streamlined using the **Laravel Toastify** package.

---

**What is Laravel Toastify?**

Laravel Toastify is a PHP package that simplifies the integration of [Toastify.js](https://apvarun.github.io/toastify-js/)—a lightweight JavaScript library for displaying toast notifications—into Laravel applications. This package allows developers to quickly and easily display toast messages, enhancing user interaction without the need for complex configurations. 

**Key Features:**

- **Seamless Integration:** Easily incorporate Toastify.js into your Laravel projects with minimal setup.
- **Predefined Methods:** Utilize built-in methods like `success()`, `info()`, `warning()`, `error()`, and `toast()` to display various types of messages.
- **Customization:** Customize toast notifications by publishing the configuration file and modifying settings as needed.
- **Client-Side Support:** Access a client-side `toastify()` method for displaying notifications directly from JavaScript.

**Installation:**

To install Laravel Toastify, run the following Composer command:

```bash
composer require redot/laravel-toastify
```

After installation, include the following directives in your `app.blade.php` file:

- In the `<head>` section:

  ```blade
  @toastifyCss
  ```

- Before the closing `</body>` tag:

  ```blade
  @toastifyJs
  ```

To customize the default configuration, publish the configuration file using:

```bash
php artisan vendor:publish --tag=toastify-config
```

**Usage:**

Displaying a toast message is straightforward. Use the `toastify()` helper function with the desired type and message:

```php
toastify()->success('Your action was successful!');
```

Each predefined method accepts two parameters: the message to display and an optional options array. For example:

```php
toastify()->success('Your action was successful!', [
    'duration' => 5000,
    // Additional options
]);
```

To create custom toast types, add them to the `toastifiers` array in the configuration file:

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

Then, use the custom method as follows:

```php
toastify()->custom('Your custom message');
```

**Client-Side Usage:**

Laravel Toastify also provides a client-side `toastify()` method for displaying notifications from JavaScript:

```javascript
toastify().success('Your action was successful!');
```

**Configuration:**

The configuration file is located at `config/toastify.php`. Here, you can specify the CDN links for the Toastify library and customize the default toastifiers.

**Conclusion:**

Integrating toast notifications into your Laravel applications has never been easier with the Laravel Toastify package. Its straightforward setup and customization options allow you to enhance user experience by providing timely and non-intrusive feedback.

For more information and detailed instructions, visit the [Laravel Toastify GitHub repository](https://github.com/redot-src/laravel-toastify).