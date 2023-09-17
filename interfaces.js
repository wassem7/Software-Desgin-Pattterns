"use strict";
class Cat {
    constructor(name, age) {
        (this.name = name), (this.age = age);
    }
    feed(food, amount) {
        console.log(`Food : ${food}, Amount : ${amount}`);
    }
}
const spike = new Cat('spike', 2);
spike.feed('banku', 4);
