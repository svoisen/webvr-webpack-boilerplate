require('script!webvr-polyfill/build/webvr-polyfill.js');

import App from './App';

document.addEventListener('DOMContentLoaded', function() {
    var app = new App();
    app.start();
});
