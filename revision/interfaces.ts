interface IAnimal {
  name: string;
  age: number;

  feed(food: string, amount: number): void;
}

class Cat implements IAnimal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    (this.name = name), (this.age = age);
  }

  feed(food: string, amount: number) {
    console.log(`Food : ${food}, Amount : ${amount}`);
  }
}

const spike = new Cat('spike', 2);

spike.feed('banku', 4);
