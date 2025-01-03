// Parent class
class Animal {
    constructor(name, species) {
      this.name = name;
      this.species = species;
    }
    
    describe() {
      console.log(`${this.name} is a ${this.species}.`);
    }
  
    makeSound() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  
  // Child class
  class Dog extends Animal {
    constructor(name, breed) {
      super(name, 'Dog');
      this.breed = breed;
    }
    
    // Override the makeSound method
    makeSound() {
      console.log(`${this.name} barks.`);
    }
    
    sit() {
      console.log(`${this.name} sitted...`);
    }
  }
  
  // Another child class
  class Cat extends Animal {
    constructor(name, color) {
      super(name, 'Cat'); 
      this.color = color;
    }
    
    // Override the makeSound method
    makeSound() {
      console.log(`${this.name} meows.`);
    }
    
    climb() {
      console.log(`${this.name} is climbing a tree.`);
    }
  }
  
  // Create instances of Dog and Cat
  const Dog1 = new Dog('Buddy', 'Golden Retriever');
  
  const Cat1 = new Cat('Whiskers', 'Black');
  // const info= new Animal()
 
  // Use the methods
 Dog1.describe();
 Dog1.makeSound(); 
 Dog1.sit(); 
  
  Cat1.describe(); 
  Cat1.makeSound(); 
  Cat1.climb(); 
  info.makeSound();


// inherit try//
       class family {
  constructor(name, member) {
    this.familyname = name;
    this.familymember = member;
  }

  show() {
    console.log(`${this.familyname} is a ${this.familymember}`);
  }

  detail() {
    console.log(`${this.familyname} show a detail.`);
  }

}

// kolantha  class

class Paiyan extends family {
  constructor(familyname, brother) {
    super(familyname, 'paiyan');
    this.brother = brother;
  }

  //detail show method

  detail() {
    console.log(`${this.familyname}young brother.`);
  }
  ride() {
    console.log(`${this.familyname}  ride a bike...`);
  }

}

// another kollantha class
class Ponnu extends family {
  constructor(familyname, sister) {
    super(familyname, 'ponnu')
    this.sister = sister;
  }

  // detail show method
  detail() {
    console.log(`${this.familyname}young sister.`);
  }

  ride() {
    console.log(`${this.familyname} is ride a car`);
  }

}

//create instance of paiyan and ponu

const paiyan = new Paiyan('abishek', '3mem');

const ponnu = new ponnu('abi,2mem')

//  use the detail show method

paiyan.show();
paiyan.detail();
paiyan.ride();
  
