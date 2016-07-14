# The js lib directory

This directory is for third party js libraries to be placed directly in while third party ES2015 libraries will be transpiled here from `es/lib`.


## JS (not ES2015) files

I either grabbed these manually from their source repositories or copied them from their respective node_module directory.

Don't be too keen to jump to a package manager (e.g. jspm) just yet. Get everything working and loading in the browser first.

For browser projects, we want to run as lean as possible, therefore reducing the number of third party scripts required, hence, do you even need a package manager?


## The files...

 - babel-polyfill.js:   Needed for browsers that do not implement the new data types (e.g. Set, Map) and/or API's (e.g. Promise).
 - system.js:           Our loader of choice. It's the simplest and easiest to use script loader I've used.
 - system-polyfill.js:  SystemJS requires the Promise API so if needed, it will load the `system-polyfills.js` which contains the when.js Promise polyfill.
 - jquery-3.0.0.min.js: I've included jQuery, purely to test the loading of code that is external to this project. It just as easily could've been lodash or any other library.
