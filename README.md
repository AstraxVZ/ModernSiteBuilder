# ModernSiteBuilder
A simple javascript plugin to create a website in less than a minute! Currently only supports text sections, but later I will add more features to it.

[Demo website](https://astraxvz.github.io/ModernSiteBuilder/demo/)

![image](https://github.com/AstraxVZ/ModernSiteBuilder/assets/91541572/4c0d31ed-439b-4f17-99b8-d9e8f21a5374)

<a href="url"><img src="https://github.com/AstraxVZ/ModernSiteBuilder/assets/91541572/4c0d31ed-439b-4f17-99b8-d9e8f21a5374" height=auto width=auto style="border-radius:50%"></a>

---

<img alt="Maintenance" src="https://img.shields.io/badge/Maintained-yes-green" /> <img alt="Version" src="https://img.shields.io/badge/Version-1.1.0-yellow" />

---

## USAGE

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

You also need to create the page contents, so you need to create an `app.js` file. It will be used for creating the elements.
```javascript
const sections = [
    { title: 'Section', content: 'It works!' },
    { title: 'Section 2', content: 'This is the second section!' },
];

MSBuilder.createPage('Example Website', 'Example Title', sections, 'Footer Test', true);
```

Don't worry about the width and height of the contents container, it is automatically set based on the amount of contents. The line breaks are also set, it's all in the `style.css` file.

The default particles configuration is included in this repository, and it has to be named `particles.json` or it won't work.
You can generate a configuration at https://vincentgarreau.com/particles.js/ or manually edit the `particles.json` included.

**Do note that if you enabled particles, it may sometimes incorrectly scale them and cause them to appear too big on the website, so to fix that simply just refresh the page.**

## FUNCTIONS

| FUNCTION   | DESCRIPTION                                                                | USAGE                                                                   |
|------------|----------------------------------------------------------------------------|-------------------------------------------------------------------------|
| createPage | Creates a page with the specified parameters. Currently the only function. | MSBuilder.createPage(title, ctTitle, sections, footerTxt, useParticles) |

## DEPENDENCIES (FOR NODE.JS)

`particles.js` (https://github.com/VincentGarreau/particles.js/)
