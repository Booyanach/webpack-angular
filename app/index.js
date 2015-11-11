var ng = require('angular'),
    app = ng.module('app', []);

require('style!css!./index.css');

require('./startUp/startUp').directive(app);
require('./navBar/navBar').directive(app);

module.exports.app = app;
