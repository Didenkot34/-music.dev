(function() {
    'use strict';

    var module = angular
        .module('app',[
            'ui.router'
        ]);

    module.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            
            // .state('home', {
            //     url: '',
            //     templateUrl: '/views/app/home/index.html',
            //     controller: 'HomeIndexCtrl',
            //     abstract: true
            // })
            .state('home', {
                url: '/',
                templateUrl: '/templates/home',
                //controller: 'HomeCtrl',
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
    module.constant('APP', {
        SONG_MODEL        : 'songs',
        GROUP_MODEL       : 'groups',
        PATH_FOLDER_AUDIO : '/uploads/songs/audio/',
    });

    return module;
})();
