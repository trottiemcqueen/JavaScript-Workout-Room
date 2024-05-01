// reference type

var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

// context vs scope

const object4 = {
  a: function() {
    console.log(this);
  }
}

// instantiation
class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type)
  }
  play() {
    console.log(`I am a ${this.type} and I'm ready at your command!`);
  }
}

class Warrior extends Player {
  constructor(name, type) {
    super(name, type)
  }
  intro() {
    console.log(`The name is ${this.name}, I'm a ${this.type}`);
  }
}

const wizard1 = new Wizard('Barnaboss', 'Healer');
const Wizard2 = new Wizard('Atom', 'Leader');
const Warrior1 = new Warrior('Abraham', 'Destroyer');