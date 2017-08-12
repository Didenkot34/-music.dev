(function () {
    'use strict';
    module.exports = function (ngModule) {
        ngModule.config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: '/templates/home',
                    controller: 'HomeCtrl',
                    data: {
                        title: 'Home'
                    }
                })
                .state('test', {
                    url: '/test',
                    templateUrl: '/templates/test',
                    // controller: 'HomeCtrl',
                    data: {
                        title: 'Home'
                    }
                });

            $urlRouterProvider.otherwise('/');

        });
    };
})();
