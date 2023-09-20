interface IProduct {
  name: string;
}

class ConcreteProduct implements IProduct {
  name: string;
  constructor() {
    this.name = '';
  }
}

class ConcreteProductA extends ConcreteProduct {
  name: string;

  constructor() {
    super();
    this.name = 'Product A';
  }
}

class ConcreteProductB extends ConcreteProduct {
  name: string;

  constructor() {
    super();
    this.name = 'Product B';
  }
}

class ConcreteProductC extends ConcreteProduct {
  name: string;

  constructor() {
    super();
    this.name = 'Product B';
  }
}

class Creator {
  static createObject(property: string): IProduct {
    if (property === 'a') {
      return new ConcreteProductA();
    } else if (property === 'b') {
      return new ConcreteProductB();
    } else {
      return new ConcreteProductC();
    }
  }
}

const product = Creator.createObject('a');

console.log(product.name);
