'use strict';

const getRandomIntInclusive = require('../lib/getRandomIntInclusive');

const BOSS = 'Vien';
const ELITE_MONSTERS = ['Eating Less', 'Javascript', 'Data Structures and Algorithm', 'Coding In General, Actually'];
const FORMIDABLE_MONSTERS = ['Shane', 'Jeff'];
const SCRUB_MONSTERS = ['Shane\'s Ping Pong Skills'];

const MONSTERS = [SCRUB_MONSTERS, FORMIDABLE_MONSTERS, ELITE_MONSTERS];

function Monster(level) {
  this.name = '';
  this.damage = 0;
  this.armor = 0;
  this.hp = 100;
  this.generateStats(level);
}

Monster.prototype.generateStats = function(level) {
  this.name = (level === 3) ? BOSS : MONSTERS[level][getRandomIntInclusive(0, MONSTERS[level].length - 1)];
  this.damage = this.armor = 15 * (level + 1);
};

Monster.prototype.takeDamage = function(damage) {
  const damageTaken = ((damage - this.armor) > 0) ? (damage - this.armor) : 0;
  this.hp -= damageTaken;
  return damageTaken;
};

module.exports = Monster;
