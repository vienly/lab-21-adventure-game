'use strict';

const getRandomIntInclusive = require('../lib/getRandomIntInclusive');
const between = require('../lib/between');

const TYPE_WEAPON = 0;
const TYPE_ARMOR = 1;

const WEAPONS = [
  ['Thunderfury, Blessed Blade of the Windseeker', 'The Twin Blades of Azzinoth', 'Sulfuras, Hand of Ragnaros', 'Shadowmourne'],
  ['Corrupted G\'Hanir, the Mother Tree', 'Tremendous Tankard O\' Terror', 'Eredar Staff', 'The Horseman\' Sinister Slicer'],
  ['Rare Axe', 'Rare Mace', 'Rare Sword', 'Rare Daggers', 'Rare Staff'],
  ['Common Axe', 'Common Mace', 'Common Sword', 'Common Daggers', 'Common Staff'],
];

const LEGENDARY_WEAPONS = WEAPONS[0];
const MYTHICAL_WEAPONS = WEAPONS[1];
const RARE_WEAPONS = WEAPONS[2];
const COMMON_WEAPONS = WEAPONS[3];

const ARMORS = [
  ['Etheralus, the Eternal Reward', 'Maalus, the Blood Drinker', 'Nithramus, the All-Seer', 'Sanctus, Sigil of the Unbroken', 'Thorasus, the Stone Heart of Draenor'],
  ['Doomblade Tunic', 'Woven Lasher Tendril Bracers', 'Cowl of Enveloping Resonance', 'Eagletalon Cloak', 'Hood of the Astral Warden'],
  ['Rare Cloak', 'Rare Armour', 'Rare Bracers', 'Rare Hood', 'Rare Pants'],
  ['Common Cloak', 'Common Armour', 'Common Bracers', 'Common Hood', 'Common Pants'],
];

const LEGENDARY_ARMORS = ARMORS[0];
const MYTHICAL_ARMORS = ARMORS[1];
const RARE_ARMORS = ARMORS[2];
const COMMON_ARMORS = ARMORS[3];

function Item(rareChance, mythicalChance, legendaryChance) {
  this.name = '';
  this.stats = {
    rarity: 'Common',
    type: 'Weapon',
    damage: 0,
    armor: 0,
  };
  this.generateStats(rareChance, mythicalChance, legendaryChance);
}

Item.prototype.generateStats = function(rareChance, mythicalChance, legendaryChance) {
  const itemType = getRandomIntInclusive(0, 1);
  const itemRarityRoll = getRandomIntInclusive(1, 100);

  if (itemType === TYPE_WEAPON) {
    this.stats.type = 'Weapon';
  } else if (itemType === TYPE_ARMOR) {
    this.stats.type = 'Armor';
  }

  if (between(itemRarityRoll, 1, legendaryChance)) {
    this.stats.rarity = 'Legendary';
    if (this.stats.type === 'Weapon') {
      this.name = getRandomItemFrom(LEGENDARY_WEAPONS);
      this.stats.damage = 50;
    } else {
      this.name = getRandomItemFrom(LEGENDARY_ARMORS);
      this.stats.armor = 50;
    }
  } else if (between (itemRarityRoll, 1, mythicalChance)) {
    this.stats.rarity = 'Mythical';
    if (this.stats.type === 'Weapon') {
      this.name = getRandomItemFrom(MYTHICAL_WEAPONS);
      this.stats.damage = 30;
    } else {
      this.name = getRandomItemFrom(MYTHICAL_ARMORS);
      this.stats.armor = 30;
    }
  } else if (between (itemRarityRoll, 1, rareChance)) {
    this.stats.rarity = 'Rare';
    if (this.stats.type === 'Weapon') {
      this.name = getRandomItemFrom(RARE_WEAPONS);
      this.stats.damage = 20;
    } else {
      this.name = getRandomItemFrom(RARE_ARMORS);
      this.stats.armor = 20;
    }
  } else {
    this.stats.rarity = 'Common';
    if (this.stats.type === 'Weapon') {
      this.name = getRandomItemFrom(COMMON_WEAPONS);
      this.stats.damage = 15;
    } else {
      this.name = getRandomItemFrom(COMMON_ARMORS);
      this.stats.armor = 15;
    }
  }
};

function getRandomItemFrom(itemArr) {
  return itemArr[getRandomIntInclusive(0, itemArr.length - 1)];
}

module.exports = Item;
