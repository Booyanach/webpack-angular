var ng = require('angular'),
    app = ng.module('app', []);

require('./startUp/startUp').directive(app);

module.exports.app = app;
