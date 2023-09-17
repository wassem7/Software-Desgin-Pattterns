class Animal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  feed(food: string, amount: number) {
    console.log(`Food : ${food}, Amount : ${amount}`);
  }
}

class Dog extends Animal {}

const kwadwo = new Dog('spike', 2);
kwadwo.feed('eggs', 3);
