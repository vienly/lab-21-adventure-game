'use strict';

const angular = require('angular');
const adventureGame = angular.module('adventureGame');

const Player = require('../model/Player');

adventureGame.controller('GameController', ['$log', GameController]);

function GameController($log) {
  this.history = [
    {
      logNo: 0,
      text: 'you\'re on a james moon adventure',
    },
  ];
  this.directions = ['up', 'down', 'left', 'right'];
  this.fightFlight = ['fight', 'flight'];
  this.player = new Player();
  this.maze = require('../model/Maze');
  $log.log('maze', this.maze);
  this.monster = null;
  this.monsterBattle = false;
  this.dead = false;

  this.moveDirection = function(direction) {
    $log.debug('gameCtrl.moveDirection');

    if (this.maze[this.player.location]) {
      let currentLocation = this.maze[this.player.location];
      $log.log('currentLocation', currentLocation);
      let nextRoom = currentLocation[direction];
      $log.log('nextRoom', nextRoom);

      if (nextRoom !== 'wall') {
        this.player.lastLocation = this.player.location;
        this.player.location = nextRoom;
        this.logHistory('you have entered ' + this.player.location);

        if (this.maze[this.player.location].item) {
          this.player.pickUpItem(this.maze[this.player.location].item);
          this.maze[this.player.location].item = null;
          this.logHistory('you picked up a new item');
        }

        if (this.maze[this.player.location].heal) {
          this.player.heal(this.maze[this.player.location].heal);
          this.logHistory('you healed');
        }

        if (this.maze[this.player.location].monster) {
          this.logHistory('you have encountered a monster');
          this.monster = this.maze[this.player.location].monster;
          this.monsterBattle = true;
        }

      } else {
        this.logHistory('you hit a wall!');
      }
    }
  };

  this.fight = function(fightOrFlight) {
    if (fightOrFlight === 'fight') {
      const monsterTake = this.monster.takeDamage(this.player.damage);
      this.logHistory(`monster takes ${monsterTake} damage`);

      const playerTake = this.player.takeDamage(this.monster.damage);
      this.logHistory(`player takes ${playerTake} damage`);

      if (this.monster.hp <= 0) {
        this.monster = null;
        this.maze[this.player.location].monster = null;
        this.logHistory('you killed the monster');
        this.monsterBattle = false;
      }

      if (this.player.hp <= 0) {
        this.logHistory('you died');
        this.dead = true;
      }
    } else if (fightOrFlight === 'flight') {
      const playerTake = this.player.takeDamage(this.monster.damage);
      this.logHistory(`player takes ${playerTake} damage`);
      this.player.location = this.player.lastLocation;
      this.monster = this.maze[this.player.location].monster;
      this.monsterBattle = false;
      this.logHistory('you\'ve ran away');
    }
  };

  this.logHistory = function(info) {
    this.history.push({logNo: this.history.length, text: info});
  };
}
