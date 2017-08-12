(function () {
    'use strict';
    module.exports = function (ngModule) {
        require('./routes/routes.js')(ngModule);
        require('./constant/constant.js')(ngModule);
    };
})();