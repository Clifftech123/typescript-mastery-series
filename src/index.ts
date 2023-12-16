function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}

greet("TypeScript"); // Hello, TypeScript!



// Declaring a class 
class Person {
  constructor(public name: string) {}

// Declaring a function
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
// age = "25"; // This will cause a compile-time error

// so that we can use it later

age = 20 + 5; // This is fine
console.log(age); // 25

