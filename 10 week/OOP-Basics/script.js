console.log("Week 10 - Car Example");

class CarType {
  constructor() {
    this.imagesSrc = ["./sedan.png", "./car.png", "./sport-car.png"];
  }

  getRandomSrc() {
    return this.imagesSrc[Math.floor(Math.random() * this.imagesSrc.length)];
  }
}

const carType = new CarType();

class Car {
  constructor() {
    this.x = 0;
    this.setCarType();
    this.renderCar();
    this.setMoveInteraction();
  }

  setCarType() {
    this.type = carType.getRandomSrc();
  }

  renderCar() {
    this.htmlRef = document.createElement("img");
    this.htmlRef.classList.add("car");
    this.htmlRef.src = this.type;
    document.body.appendChild(this.htmlRef);
  }

  moveRight() {
    this.x++; // this.x = this.x + 1;
    this.updateHtmlRefPosition();
  }

  updateHtmlRefPosition() {
    this.htmlRef.style.transform = `translateX(${this.x}px)`;
  }

  setMoveInteraction() {
    document.addEventListener("keydown", (event) => {
      console.log(event.key);
      if (event.key === "ArrowRight") {
        this.moveRight();
      }
    });
  }
}

const car1 = new Car();
const car2 = new Car();
const car3 = new Car();
console.log(car1);
