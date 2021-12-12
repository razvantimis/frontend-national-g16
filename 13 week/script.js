const fileSystem = require("fs");

const content = fileSystem.readFileSync("./file.txt", {
  encoding: "utf8",
  flag: "r",
});
console.log(content);

console.log("this is run with node");

const a = 1;
const b = 2;
const c = a + b;
console.log(c);
