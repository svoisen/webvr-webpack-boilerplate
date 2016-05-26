require('script!webvr-polyfill/build/webvr-polyfill.js');
const App = require('./App');

document.addEventListener('DOMContentLoaded', function() {
    var app = new App();
    app.start();
});
