'use strict';

const Item = require('./Item');
const Monster = require('./Monster');

module.exports = {
  room001: {
    up: 'wall',
    down: 'wall',
    left: 'wall',
    right: 'room002',
  },
  room002: {
    up: 'wall',
    down: 'room003',
    left: 'room001',
    right: 'wall',
  },
  room003: {
    up: 'room002',
    down: 'room005',
    left: 'wall',
    right: 'room004',
  },
  room004: {
    up: 'wall',
    down: 'wall',
    left: 'room003',
    right: 'wall',
    cleared: false,
    item: new Item(14, 1, 0),
  },
  room005: {
    up: 'room003',
    down: 'room006',
    left: 'room008',
    right: 'wall',
  },
  room006: {
    up: 'room005',
    down: 'wall',
    left: 'wall',
    right: 'room007',
    monster: new Monster(0),
  },
  room007: {
    up: 'wall',
    down: 'wall',
    left: 'room006',
    right: 'wall',
    item: new Item(25, 5, 0),
  },
  room008: {
    up: 'wall',
    down: 'wall',
    left: 'room009',
    right: 'room005',
    item: new Item(30, 5, 0),
    monster: new Monster(1),
  },
  room009: {
    up: 'wall',
    down: 'room012',
    left: 'room010',
    right: 'room008',
  },
  room010: {
    up: 'wall',
    down: 'wall',
    left: 'room011',
    right: 'room009',
    item: new Item(30, 25, 5),
  },
  room011: {
    up: 'wall',
    down: 'wall',
    left: 'wall',
    right: 'room010',
    heal: 100,
  },
  room012: {
    up: 'room009',
    down: 'room013',
    left: 'wall',
    right: 'wall',
  },
  room013: {
    up: 'room012',
    down: 'wall',
    left: 'room014',
    right: 'room017',
  },
  room014: {
    up: 'wall',
    down: 'room015',
    left: 'wall',
    right: 'room013',
  },
  room015: {
    up: 'room014',
    down: 'room016',
    left: 'wall',
    right: 'wall',
    monster: new Monster(2),
  },
  room016: {
    up: 'room015',
    down: 'wall',
    left: 'wall',
    right: 'wall',
    item: new Item(20, 30, 15),
  },
  room017: {
    up: 'wall',
    down: 'wall',
    left: 'room013',
    right: 'wall',
    monster: new Monster(3),
  },
};
