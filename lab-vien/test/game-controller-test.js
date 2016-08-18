'use strict';

describe('testing GameController', function() {
  beforeEach(() => {
    angular.mock.module('adventureGame');
    angular.mock.inject(($controller) => {
      this.gameCtrl = $controller('GameController');
    });
  });

  beforeEach(() => {
    this.gameCtrl.history = [
      {
        logNo: 0,
        text: 'you\'re on a james moon adventure',
      },
    ];
  });

  it('should contain a new player with no items yet', () => {
    // this.gameCtrl.moveDirection('right');
    expect(this.gameCtrl.player.hp).toBe(100);
    expect(this.gameCtrl.player.damage).toBe(10);
    expect(this.gameCtrl.player.armor).toBe(10);
    expect(this.gameCtrl.player.items.length).toBe(0);
    expect(this.gameCtrl.player.location).toBe('room001');
  });

  it('should move the player to the right into room002', () => {
    this.gameCtrl.moveDirection('right');
    expect(this.gameCtrl.player.location).toBe('room002');
    expect(this.gameCtrl.player.lastLocation).toBe('room001');
  });

  it('should grab an item in room 4', () => {
    this.gameCtrl.moveDirection('right');
    this.gameCtrl.moveDirection('down');
    this.gameCtrl.moveDirection('right');
    expect(this.gameCtrl.player.location).toBe('room004');
    expect(this.gameCtrl.player.items.length).toBe(1);
  });

  it('should encounter a monster in room006', () => {
    this.gameCtrl.moveDirection('right');
    this.gameCtrl.moveDirection('down');
    this.gameCtrl.moveDirection('down');
    this.gameCtrl.moveDirection('down');
    expect(this.gameCtrl.player.location).toBe('room006');
    expect(this.gameCtrl.maze[this.gameCtrl.player.location].monster).not.toBe(null);
    expect(this.gameCtrl.monsterBattle).toBe(true);
  });
});
