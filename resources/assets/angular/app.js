(function () {
    'use strict';

    var ngModule = angular
        .module('app', [
            'ui.router'
        ]);
    
    require('./module')(ngModule);
})();
