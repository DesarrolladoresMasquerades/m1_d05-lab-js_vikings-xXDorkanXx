// Soldier
class Soldier{

  constructor(health, strength){

    this.health = health || 1
    this.strength = strength || 1

  }

  attack(){ return this.strength }

  receiveDamage(damage){this.health - damage}
};

// Viking
class Viking extends Soldier{

  constructor(name, health, strength){
    
    super(health, strength)
    this.name = name || "Anonymous"

  }

  receiveDamage(damage){

    super(damage) // OR this.health - damage again     OR      both

    if(this.health > 0) return `${this.name} has received ${this.damage} points of damage`
    else return `${this.name} has died in act of combat`
  
  }

  battleCry(){return "Odin Owns You All!"}

};

// Saxon
class Saxon extends Soldier{

  receiveDamage(damage){
    
    super(damage)

    if(this.health > 0) return `A Saxon has received ${this.damage} points of damage`
    else return `A Saxon has died in combat`

  }

};

// War
class War{

  constructor(){

    this.vikingArmy = []
    this.saxonArmy = []

  }

  addViking(viking){

    this.vikingArmy.push(viking)

  }

  addSaxon(saxon){

    this.saxonArmy.push(saxon)

  }
  
  vikingAttack(){

    randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
    randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]

    const restultOfTheAttack = randomSaxon.receiveDamage(randomViking.strength)
    
    if(randomSaxon.health <= 0){
      this.saxonArmy.splice(randomSaxon)
    }

    return restultOfTheAttack

  }
  
  saxonAttack(){}
  
  showStatus(){}

};



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
