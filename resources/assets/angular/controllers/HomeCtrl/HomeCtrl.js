(function () {
    'use strict';
    module.exports = function (ngModel) {
        
        ngModel.controller('HomeCtrl', HomeCtrl);
        
        HomeCtrl.inject = ['$scope'];
        
        function HomeCtrl($scope) {
            
            $scope.title = 'Home';
        }
    };

})();