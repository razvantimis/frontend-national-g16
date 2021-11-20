console.log("OOP - Game");

class GameObject {
  constructor(color) {
    this.width = 50;
    this.height = 50;
    this.x = 0;
    this.y = 0;
    this.color = color;
    this.render();
  }

  render() {
    this.htmlRef = document.createElement("div");
    this.htmlRef.style.width = `${this.width}px`;
    this.htmlRef.style.height = `${this.height}px`;
    this.htmlRef.style.background = this.color;
    this.htmlRef.style.position = "absolute";
    this.htmlRef.style.top = 0;
    this.htmlRef.style.left = 0;
    document.getElementById("game-scene").appendChild(this.htmlRef);
  }

  updatePosition(x, y) {
    this.x = x;
    this.y = y;
    this.htmlRef.style.transform = `translate(${this.x}px,${this.y}px)`;
  }
}

class Player extends GameObject {
  updateYPosition(y) {
    this.updatePosition(this.x, y);
  }

  moveUp() {
    if (this.y - 5 >= 0) {
      this.updateYPosition(this.y - 5);
    }
  }

  moveDown() {
    if (this.y + 5 <= 450) {
      this.updateYPosition(this.y + 5);
    }
  }
}

const player = new Player("blue");
player.updatePosition(50, 225);

class Obstacle extends GameObject {
  updateXPosition(x) {
    this.updatePosition(x, this.y);
  }

  moveLeft() {
    this.updateXPosition(this.x - 5);
  }

  randomPositioning() {
    this.updatePosition(1000, 0);
  }

  destroyObject() {
    this.htmlRef.remove();
    this.canDestroy = true;
  }
}

const obstacle = new Obstacle("red");
const obstacles = [obstacle];
obstacle.randomPositioning();

let keyDownPressed = false;
let keyUpPressed = false;

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowDown") {
    keyDownPressed = true;
  }

  if (event.key === "ArrowUp") {
    keyUpPressed = true;
  }
});

document.addEventListener("keyup", function (event) {
  if (event.key === "ArrowDown") {
    keyDownPressed = false;
  }

  if (event.key === "ArrowUp") {
    keyUpPressed = false;
  }
});

function shouldDestroyObstacle(obstacle) {
  if (obstacle.x <= -50) return true;

  return false;
}

// GAME LOOP

function gameLoop() {
  if (keyDownPressed) {
    player.moveDown();
  }

  if (keyUpPressed) {
    player.moveUp();
  }

  for (const obstacle of obstacles) {
    obstacle.moveLeft();
  }

  for (const obstacle of obstacles) {
    if (shouldDestroyObstacle(obstacle)) {
      obstacle.destroyObject();
    }
  }

  obstacles.filter(function (obstacle) {
    if (obstacle.canDestroy) return false;

    return true;
  });
}

setInterval(gameLoop, 100);
