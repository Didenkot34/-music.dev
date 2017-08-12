(function () {
    'use strict';
    module.exports = function (ngModel) {
        ngModel.controller('TestCtrl',
            [
                '$scope',
                function ($scope) {
                    $scope.title = 'Test';
                }
            ]
        );
    };
})();