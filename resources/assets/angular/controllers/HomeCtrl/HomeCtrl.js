(function () {
    'use strict';
    module.exports = function (ngModel) {
        ngModel.controller('HomeCtrl',
            [
                '$scope',
                function ($scope) {
                    $scope.title = 'Home';
                }
            ]
        );
    };
})();