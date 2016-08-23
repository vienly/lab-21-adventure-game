'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./style/scss/main.scss');

const angular = require('angular');
angular.module('adventureGame', []);

require('./controller/game-controller');
