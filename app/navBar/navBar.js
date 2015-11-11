require('style!css!./navBar.css');

module.exports.directive = function (app) {
    app.directive('navBar', [function () {
        return {
            link: function (scope, elem, attrs) {
                scope.init = "navBar initialized";
            },
            templateUrl: require('ngtemplate?relativeTo=/app!html!./navBar.html')
        };
    }]);
};