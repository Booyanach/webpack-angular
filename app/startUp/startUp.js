require('./startUp.css');

module.exports.directive = function (app) {
    return app.directive('startUp', function () {
        return {
            link: function (scope, elem, attrs) {
                scope.hello = 'Hi there m8y';
            },
            replace: true,
            templateUrl: require('./startUp.html')
        };
    });
};