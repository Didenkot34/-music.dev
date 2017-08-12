'use strict';
import ngModule from './ngModule';
require('./module')(ngModule);
require('./controllers/HomeCtrl/HomeCtrl.js')(ngModule);
require('./controllers/TestCtrl/TestCtrl.js')(ngModule);

exports.ngModel = ngModule;

