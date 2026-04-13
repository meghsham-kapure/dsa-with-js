const input = 5;

// Number Pattern 01

function rightAngleTriangleRowNumbered(n) {

  for (let i = 0; i < n; i++) {
    let line = "";
    for (let j = 0; j <= i; j++) {
      line += " " + (i + 1);
    }
    console.log(line);
  }

}

rightAngleTriangleRowNumbered(5);
console.log("\n");






// Number Pattern 02

function invertedLeftAlignedNumberTriangle(n) {

  for (let i = 0; i < n; i++) {
    let line = "";
    for (let j = 0; j < n - i; j++) {
      line += " " + (j + 1);
    }
    console.log(line);
  }

}

invertedLeftAlignedNumberTriangle(5);
console.log("\n");






// Number Pattern 03

function printBinaryTriangle(n) {

  let printer = 1;

  for (let i = 0; i <= n; i++) {
    let line = "";
    for (let j = 0; j < i; j++) {
      line += " " + printer;
      printer = printer == 0 ? 1 : 0;
    }
    console.log(line);
  }

}

printBinaryTriangle(5);
console.log("\n");






// Number Pattern 04

function rightAngleTriangleColumnNumbered(n) {

  for (let i = 0; i < n; i++) {
    let line = "";
    for (let j = 0; j <= i; j++) {
      line += " " + (j + 1);
    }
    console.log(line);
  }

}

rightAngleTriangleColumnNumbered(5);
console.log("\n");






// Number Pattern 05

function invertedNumberTriangle(n) {

  for (let i = 0; i < 5; i++) {
    let line = "";
    for (let j = 0; j < n - i; j++) {
      line += j + 1;
    }
    console.log(line);
  }

}

invertedNumberTriangle(5);






// Number Pattern 06

function printFloydsTriangle(n) {

  let counter = 1;

  for (let i = 0; i <= n; i++) {
    let line = "";
    for (let j = 0; j < i; j++) {

      line += String(counter) + " ";
      counter++;
    }
    console.log(line);
  }
}

printFloydsTriangle(5);

