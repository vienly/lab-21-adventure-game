'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./style/scss/main.scss');

const angular = require('angular');
const adventureGame = angular.module('adventureGame', []);

require('./controller/game-controller');
