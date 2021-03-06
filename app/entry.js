'use strict';

require('./scss/main.scss');

const angular = require('angular');

angular.module('angularAdventure', []);

require('./service/map-service.js');
require('./service/player-service.js');

require('./component/gameboard/gameboard.js');
require('./component/player-dashboard/player-dashboard.js');
require('./component/game-history/game-history.js');
