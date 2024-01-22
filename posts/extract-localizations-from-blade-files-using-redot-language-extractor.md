---
title: 'Extract localizations from blade files using Redot Language Extractor'
date: 2024-01-23
---

There's a lot of times when you forget to add a new string to your localization files, and you only notice it when you see the string in production. This is a common problem, and there are a lot of tools to help you with this, including [Redot Language Extractor](https://github.com/redot-src/laravel-lang-extractor).

---

## Installation Made Simple

Getting started with Laravel Lang Extractor is a breeze thanks to Composer. Just run the following command in your terminal:

```bash
composer require --dev redot/laravel-lang-extractor
```

This command installs the package as a development dependency, ensuring it won't affect your production environment. Once the installation is complete, you're ready to harness the power of this tool.

## Extracting Strings

Laravel Lang Extractor simplifies the extraction of translation keys from blade files and automates the creation of language files. To kickstart the process, execute the following artisan command:

```bash
php artisan lang:extract {language}
```

Replace {language} with the desired language code (e.g., 'en' for English, 'es' for Spanish). This command scans your blade files, identifies translation keys, and generates a new language file specific to the chosen language, if the file already exists, it will be updated with the new keys.

## Behind the Scenes

This command is a wrapper around the `LangExtractor` class, the real workhorse of this package. This class is responsible for scanning your blade files and extracting translation keys. It also creates or updates language files.

The constructor of this class accepts a single parameter: the directories to scan. By default, it scans the `resource_path`, `app_path('Http')`, and `app_path('Livewire')` directories. You can override this behavior by passing an array of directories to the constructor.

```php
use Redot\LaravelLangExtractor\LangExtractor;

$extractor = new LangExtractor([
    // ...
]);
```

Once you've created an instance of the `LangExtractor` class, you can use the `extract()` method to extract translation keys into the class's protected `$translations` property. To get the extracted keys, use the `all()` method to return an array of translation keys.

```php
$extractor->extract();

$translations = $extractor->all();
```

Finally, you can use the `save()` method to save the extracted keys to a language file. This method accepts two parameters: the language code and a boolean value indicating whether to overwrite the existing language file. By default, this method will return `false` if the language file already exists. You can override this behavior by passing `true` as the second parameter.

```php
$extractor->save('en', true);
```

## Conclusion

Laravel Lang Extractor is a handy tool that simplifies the extraction of translation keys from blade files. It also automates the creation of language files, saving you time and effort. If you're looking for a way to streamline your localization workflow, this package is a great place to start.