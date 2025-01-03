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
  