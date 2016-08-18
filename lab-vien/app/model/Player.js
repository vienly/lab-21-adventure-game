function Player() {
  this.hp = 100;
  this.damage = 10;
  this.armor = 10;
  this.items = [];
  this.location = 'room001';
  this.lastLocation = 'room001';
}

Player.prototype.takeDamage = function(damage) {
  const damageTaken = ((damage - this.armor) > 0) ? (damage - this.armor) : 0;
  this.hp -= damageTaken;
  return damageTaken;
};

Player.prototype.heal = function(healAmount) {
  const finalHP = ((this.hp + healAmount) < 100) ? (this.hp + healAmount) : 100;
  this.hp = finalHP;
  return finalHP;
};

Player.prototype.pickUpItem = function(item) {
  this.items.push(item);
  this.damage += item.stats.damage;
  this.armor += item.stats.armor;
};

module.exports = Player;
