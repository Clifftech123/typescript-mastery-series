// The // greet

// function greet1(name: string): void {
//   console.log(`Hello, ${name}!`);
// }

// greet1("TypeScript"); // Hello, TypeScript!


class Person {
  constructor(public name: string) {}

  greet() {
    console.log(`Hello, ${this.name}`);
  }
}

// Using the class
let person1 = new Person("TypeScript");
person1.greet(); // Hello, TypeScript!

let person2 = new Person("John Doe");
person2.greet(); // Hello, John Doe



let age: number = 25;
age = 20 + 5;  // 25
console.log(age);

