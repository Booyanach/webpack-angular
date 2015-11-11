require('style!css!./contentHolder.css');

module.exports.directive = function (app) {
    app.directive('contentHolder', [function () {
        return {
            link: function (scope, elem, attrs) {
                scope.showText = true;

                scope.toggleText = function () {
                    scope.showText = !scope.showText;
                };
            },
            templateUrl: require('ngtemplate?relativeTo=/app!html!./contentHolder.html')
        };
    }]);
};