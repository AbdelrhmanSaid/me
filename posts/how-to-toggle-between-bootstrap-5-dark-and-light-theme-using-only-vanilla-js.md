---
title: 'How to toggle between Bootstrap 5 dark and light theme using only Vanilla JS'
date: 2024-01-20
---

Bootstrap 5 has a built-in dark mode. using the `data-bs-theme` attribute on the `body` tag, you can toggle between the light and dark theme.

In this tutorial, we will create a toggle button to switch between the light and dark theme, while saving the user's preference in the browser's local storage, and defaulting to the user's preference on page load.

---

## Create the toggle button

First, we will create a toggle button to switch between the light and dark theme.

```html
<button class="... hide-light" data-theme="light">Light</button>
<button class="... hide-dark" data-theme="dark">Dark</button>
```

We will use the `hide-light` and `hide-dark` classes to hide the button that corresponds to the active theme, to implement this, we will add the following CSS:

```css
[data-bs-theme='light'] .hide-light,
[data-bs-theme='dark'] .hide-dark {
  display: none;
}
```

This will hide the light theme button when the dark theme is active, and vice versa.

## Toggle the theme

Next, we will add the JavaScript to toggle the theme when the button is clicked, to do so, we need to get the button elements, and add an event listener to each button.

```js
document.querySelectorAll('[data-theme]').forEach((button) => {
  button.addEventListener('click', function (event) {
    // ...
  })
})
```

Now, we need to get the theme from the `data-theme` attribute of the button, and set the `data-bs-theme` attribute of the `body` tag to the theme.

```js
document.querySelectorAll('[data-theme]').forEach((button) => {
  button.addEventListener('click', function (event) {
    const theme = event.target.dataset.theme

    document.body.setAttribute('data-bs-theme', theme)
  })
})
```

This will toggle the theme when the button is clicked, but it will not save the user's preference, so when the page is reloaded, the theme will be reset to the default.

## Save the user's preference

To save the user's preference, we will use the browser's local storage, and save the theme in the `localStorage.theme` key.

```js
document.querySelectorAll('[data-theme]').forEach((button) => {
  button.addEventListener('click', function (event) {
    const theme = event.target.dataset.theme

    document.body.setAttribute('data-bs-theme', theme)
    localStorage.theme = theme
  })
})
```

Lastly, we need to check if the user has a preference saved in the `localStorage.theme` key, and set the theme to the user's preference on page load.

```js
document.addEventListener('DOMContentLoaded', function () {
  const theme = localStorage.theme

  if (theme) {
    document.body.setAttribute('data-bs-theme', theme)
  }
})
```

If we could not find a preference in the `localStorage.theme` key, we will default to the user's system preference, using the `prefers-color-scheme` media query.

```js
document.addEventListener('DOMContentLoaded', function () {
  const theme = localStorage.theme
  const defaultTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'

  document.body.setAttribute('data-bs-theme', theme || defaultTheme)
})
```

That's it! Now you can toggle between the light and dark theme, and the user's preference will be saved in the browser's local storage.

## Demo

Let's see the final result in action:

<iframe height="300" style="width: 100%;" scrolling="no" title="Toggle between Bootstrap 5 dark and light theme with Vanilla JS" src="https://codepen.io/abdelrhmansaid/embed/poYPqeB?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/abdelrhmansaid/pen/poYPqeB">
  Toggle between Bootstrap 5 dark and light theme with Vanilla JS</a> by Abdelrhman Said (<a href="https://codepen.io/abdelrhmansaid">@abdelrhmansaid</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Conclusion

In this tutorial, we learned how to toggle between the light and dark theme in Bootstrap 5, and save the user's preference in the browser's local storage.

If you have any questions, feel free to tweet me [@AbdelrhmanSWE](https://twitter.com/AbdelrhmanSWE).
