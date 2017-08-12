(function () {
    'use strict';
    const ngModule = angular
        .module('app', [
            'ui.router'
        ]);
    
    require('./module')(ngModule);
    require('./controllers')(ngModule);
})();
