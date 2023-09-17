"use strict";
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    feed(food, amount) {
        console.log(`Food : ${food}, Amount : ${amount}`);
    }
}
class Dog extends Animal {
}
const kwadwo = new Dog('spike', 2);
kwadwo.feed('eggs', 3);
