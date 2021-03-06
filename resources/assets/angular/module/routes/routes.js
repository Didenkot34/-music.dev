(function () {
    'use strict';
    module.exports = function (ngModule) {

        ngModule.config(
            [
                '$stateProvider',
                '$urlRouterProvider',
                function ($stateProvider, $urlRouterProvider) {
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
                            controller: 'TestCtrl',
                            data: {
                                title: 'Test'
                            }
                        });

                    $urlRouterProvider.otherwise('/');

                }
            ]
        );
    };
})();
