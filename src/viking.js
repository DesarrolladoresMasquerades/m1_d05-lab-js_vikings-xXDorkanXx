// Soldier
class Soldier{

  constructor(health, strength){

    this.health = health || 1;
    this.strength = strength || 1;

  };

  attack(){

    return this.strength;

  };

  receiveDamage(damage){

    this.health = this.health - damage;

  };

};

// Viking
class Viking extends Soldier{

  constructor(name, health, strength){
    
    super(health, strength);
    this.name = name || "Anonymous";

  };

  receiveDamage(damage){

    this.health = this.health - damage; // OR super(damage)     OR      both

    if(this.health > 0) return `${this.name} has received ${damage} points of damage`
    else return `${this.name} has died in act of combat`;
  
  };

  battleCry(){
    
    return "Odin Owns You All!";
  
  };

};

// Saxon
class Saxon extends Soldier{

  receiveDamage(damage){

    this.health = this.health - damage;

    if(this.health > 0) return `A Saxon has received ${damage} points of damage`;
    else return `A Saxon has died in combat`;

  };

};

// War
class War{

  constructor(){

    this.vikingArmy = [];
    this.saxonArmy = [];

  };

  addViking(viking){

    this.vikingArmy.push(viking)

  };

  addSaxon(saxon){

    this.saxonArmy.push(saxon)

  };

  /*
  genericAttack(){

    const restultOfTheAttack = victim.receiveDamage(attacker.strength);
    
    if(victim.health <= 0){
      this.victimArmy.splice(victim);
    };

    return restultOfTheAttack;

  };
  */
  
  vikingAttack(){

    /*
    const victim = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const attacker = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    const victimArmy = this.saxonArmy;

    return genericAttack();
    */

    const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    const restultOfTheAttack = randomSaxon.receiveDamage(randomViking.strength);
    
    if(randomSaxon.health <= 0){
      this.saxonArmy.splice(randomSaxon);
    };

    return restultOfTheAttack;

  };
  
  saxonAttack(){

    const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    const restultOfTheAttack = randomViking.receiveDamage(randomSaxon.strength);
    
    if(randomViking.health <= 0){
      this.vikingArmy.splice(randomViking);
    };

    return restultOfTheAttack;

  };
  
  showStatus(){

    if(this.saxonArmy.length === 0) return "Vikings have won the war of the century!";
    else if(this.vikingArmy.length === 0) return "Saxons have fought for their lives and survived another day...";
    else return "Vikings and Saxons are still in the thick of battle.";

  };

};



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
