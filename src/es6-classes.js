class Person {
  // Gives the constructor to have a default name if one is not given
  constructor({name: name = 'Prof. X', age: age = 100} = {}) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hi. I am ${this.name}.`;
  }

  getDescription() {
    return `I am ${this.name}, I am ${this.age} years old.`
  }
}

// Creates a subclass of Person
class Student extends Person {
  constructor({name: name = 'Prof. X', age: age = 100, major: major = 'Undecided'} = {}) {
    super();
    this.major = major ? major: "Undecided";
  }

  hasMajor() {
    return this.major != "Undecided" ? true : false;
  }

  getDescription() {
    let description = super.getDescription();
    if(this.hasMajor()) {
      description += ` I am major is ${this.major}.`;
    }
    return description;
  }
}

// Creates a subclass of Person
class Traveler extends Person {
  constructor({name: name = 'Prof. X', age: age = 100, homeLocation: homeLocation = 'Undisclosed'} = {}) {
    super();
    this.homeLocation = homeLocation;
  }

  hasHomeLocation() {
    return this.homeLocation != 'Undisclosed' ? true : false;
  }

  getDescription() {
    let description = super.getDescription();
    if(this.hasHomeLocation()) {
      description += ` I am are visting from ${this.homeLocation}.`;
    }
    return description;
  }
}

// A Person instance
const x = new Person();
console.log(x);

// const me = new Student({name: 'Dawson Mortenson', age: 22, major: 'Web Development'});
const me = new Traveler({name: 'Dawson Mortenson', age: 22, homeLocation: 'Portland'});
console.log(me);
console.log(me.getDescription());
