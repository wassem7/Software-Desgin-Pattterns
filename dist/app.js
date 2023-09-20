"use strict";
class ConcreteProduct {
    constructor() {
        this.name = '';
    }
}
class ConcreteProductA extends ConcreteProduct {
    constructor() {
        super();
        this.name = 'Product A';
    }
}
class ConcreteProductB extends ConcreteProduct {
    constructor() {
        super();
        this.name = 'Product B';
    }
}
class ConcreteProductC extends ConcreteProduct {
    constructor() {
        super();
        this.name = 'Product B';
    }
}
class Creator {
    static createObject(property) {
        if (property === 'a') {
            return new ConcreteProductA();
        }
        else if (property === 'b') {
            return new ConcreteProductB();
        }
        else {
            return new ConcreteProductC();
        }
    }
}
const product = Creator.createObject('a');
console.log(product.name);
