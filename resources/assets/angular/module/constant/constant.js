(function () {
    'use strict';
    module.exports = function (ngModule) {
        ngModule.constant('APP', {
            SONG_MODEL: 'songs',
            GROUP_MODEL: 'groups',
            PATH_FOLDER_AUDIO: '/uploads/songs/audio/'
        });
    };
})();