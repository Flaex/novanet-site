# SPA gruponovanet.com.ve

Web app build with jQuery/jQueryUI and create.js libraries. The main purpose is to test performance of jQuery, superclass constructors rendering the views and create.js handling animations. The application of Google Maps, Google Fonts and Google Analytics follows the basic implementation guidelines.

## index.html

The root container of the app is [`index.html`](index.html). In this file there are all the request to third party APIs and libraries (Google Fonts, Google Maps, Google Analytics, Fontawesome) and css/js files. Take into consideration that all scripts needed to load jQuery/jQueryUI/createJS libraries are available locally and they had been concatenated in two files to avoid a large number of requests. Before the closing of the <body> tag there are all the callbacks of the functions declared on [`SectionTemplate`](js/builder.js) superclass.

## builder.js

The provided file [`builder.js`](js/builder.js) contains the functions and superclasses constructors responsible of handling the request to the database and rendering all the sections of the views. I know, this is crazy but in that time I didn't use frameworks. Thanks to the providence now I'm developing with React.

- [`shuffle`] --> Random function to shuffle the content and some UI elements order. This way the user will never se the information presented in the same way.
- [`SectionTemplate`] --> This superclass contains all the HTML templates. Her prototypes receive some specific object(s) from the database to load its values on the html components.

## Installling

To run successfully the frontend application it is required to have node.js installed on the system.

- [`npm install`]. To install required node modules and dependencies.

## gulp.js

Automated tasks to help with development and production testing. Here you can check the css/js concatenation tasks and the formats in which these files are joined together. The production version needs to run on an Apache server (wamp/xamp would the job). The development environment runs on a server provided by browserSync or any other web server of your preference. Remember to install the gulp command line utility, typing the following command in the command promt:

- [`npm install --global gulp-cli`]

## Running and testing

To start and open the front-end application on the default browser, navigate to you project on command prompt and type the following command

- [`gulp serve`] to run development environment.
- [`gulp dist`] --> This command will generate all production assets. It is very important to know that index.html, portafolio.html, whs.html and thank-you.html views need to request concatenated files which are gzipped. In order to properly render the app please REPLACE:

```html
<!-- This line just before de closing <head> tag -->
<script src="js/topscript.js"></script>
<!-- Replace it for this -->
<script src="js/indextop.js.gz"></script>

<!-- This line just after de closing <main> tag -->
<script src="js/botscript.js"></script>
<!-- Replace it for this -->
<script src="js/bot.js.gz"></script>
```

## Using the App

- [`Main page`] The main page will show all sections each one with 3 tabs showing the indicated information. The contact form is handled by [`process.php`](`php/process.php) and the Instagram widget is provided by https://lightwidget.com/

## Font icons

I have designed a collection of webfont icons for novanet brand [`icons-reference.html`](icons-reference.html). If you like them and want to use them (under Open Font License (OFL) terms) please don't forget to give me the credits by attaching my github profile and repository link somewhere in your work!. Thank you!

## Contributing

This is my very first front-end app made with JavaScript. Please feel free on suggesting better patterns or better ways to achieve specific tasks.
