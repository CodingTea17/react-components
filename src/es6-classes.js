class Person {
  // Gives the constructor to have a default name if one is not given
  constructor(args = {name: 'Prof. X', age: 100}) {
    this.name = args.name
    this.age = args.age
  }

  getGreeting() {
    return `Hi. I am ${this.name}.`;
  }

  getDescription() {
    return `${this.name} is ${this.age} years old.`
  }
}

const me = new Person({ name: 'Dawson Mortenson', age: 22});
console.log(me);
console.log(me.getGreeting());
console.log(me.getDescription());


const x = new Person();
console.log(x);
