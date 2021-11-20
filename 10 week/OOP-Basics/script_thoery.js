console.log("JavaScript OOP");

const car1 = {
  color: "blue",
  motor: "diesel",
  wheels: 4,
  startEngine() {
    console.log("start engine");
  },
  moveForward() {
    console.log("Move forward");
  },
};

console.log(car1);
console.log(car1.wheels);
console.log(car1.moveForward);
console.log(car1.moveForward());

function addition() {}

class Car {
  constructor(color, motor, wheels) {
    this.color = color;
    this.motor = motor;
    this.wheels = wheels;
  }

  startEngine() {
    console.log("start engine", this.motor);
    addition();
  }

  moveForward() {
    console.log("Move forward on", this.wheels);
  }
}

const car2 = new Car("white", "electric", "4");
console.log(car2);
console.log(car2.motor);
console.log(car2.wheels);
car2.startEngine();
console.log(
  "same functionality different function",
  car1.moveForward === car2.moveForward
);

const car3 = new Car("red", "gas", "6");
car3.startEngine();
console.log(
  "same functionality same function",
  car2.startEngine === car3.startEngine
);
car3.moveForward();
car3.windows = 4;
console.log(car3);

const car4 = new Car();
console.log(car4);

class Person {
  setName(name) {
    this.name = name;
  }
}

const person1 = new Person();
console.log(person1);
person1.setName("Stef");
console.log(person1);
