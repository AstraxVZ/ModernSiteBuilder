# ModernSiteBuilder
A simple javascript plugin to create a website in less than a minute! Currently only supports text sections, but later I will add more features to it.

---

<img alt="Maintenance" src="https://img.shields.io/badge/Maintained-yes-green" /> <img alt="Version" src="https://img.shields.io/badge/Version-1.0.0-yellow" />

## READ THIS BEFORE USING
This plugin will most likely return an error if you enable `useParticles`. Disable it if it's causing problems, it is because of your browser.
## FIXES
### Firefox
Go to `about:config` and search `security.fileuri.strict_origin_policy`. Disable that and it should be fixed.
### Chrome
It's harder to disable that for Chrome, since it doesn't have a built-in config URL. I don't use Chrome, so I don't know how to fix that for Chrome, but I will try to find a fix. For now, there's no working fix that I know.

The only way to fix that for browsers other than Firefox, you need to upload your website to Github and publish it to Github Sites.

---

# USAGE

In your HTML file, you don't need to write anything, you just need this code:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <script src="MSBuilder.js"></script>
    <script src="app.js"></script>
</head>
<body>
    
</body>
</html>
```

You also need to run that code, so you need to create an `app.js` file. It will be used for creating the elements.
```javascript
const sections = [
    { title: 'Section Title', content: 'Contents' },
    { title: 'Another Section Title', content: 'More Contents' },
];

MSBuilder.createPage('Example Website', sections, 'Footer Text', false);
```

Don't worry about the width and height of the contents container, it is automatically set based on the amount of contents. The line breaks are also set, it's all in the `style.css` file.

# FUNCTIONS

| FUNCTION   | DESCRIPTION                                                                | USAGE                                                          |
|------------|----------------------------------------------------------------------------|----------------------------------------------------------------|
| createPage | Creates a page with the specified parameters. Currently the only function. | MSBuilder.createPage(title, sections, footerTxt, useParticles) |
