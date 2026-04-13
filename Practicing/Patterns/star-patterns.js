
const input = 5;

// Star Pattern 01

function starSquare(n) {

  for (let i = 0; i < n; i++) {
    let line = '';
    for (let j = 0; j < n; j++) line = line + ' *';
    console.log(line);
  }

}

starSquare(input);
console.log("\n");




// Star Pattern 02

function rightAngleTriangle(n) {

  for (let i = 0; i < n; i++) {
    let line = "";
    for (let j = 0; j <= i; j++) line += " *"
    console.log(line);
  }

}

rightAngleTriangle(input);
console.log("\n");




// Star Pattern 03

function invertedLeftAlignedStarTriangle(n) {

  for (let i = 0; i < n; i++) {
    let line = "";
    for (let j = 0; j < n - i; j++) line += " *";
    console.log(line);
  }

}

invertedLeftAlignedStarTriangle(input);
console.log("\n");






// Star Pattern 04

function centeredDecreasingStarPyramid(n) {

  for (let i = 0; i < n; i++) {
    let line = "";
    for (let j = 0; j < i; j++) line += " ";
    for (let j = 0; j < n - i; j++) line += " *";
    console.log(line);
  }

}

centeredDecreasingStarPyramid(input);
console.log("\n");




// Star Pattern 05

function centeredIncreasingStarPyramid(n) {

  for (let i = 0; i < n; i++) {
    let line = "";
    for (let j = 0; j < n - i; j++) line += " ";
    for (let j = 0; j <= i; j++) line += "* ";
    console.log(line);
  }

}

centeredIncreasingStarPyramid(input);
console.log("\n");






// Star Pattern 06

function printHalfDiamondPattern(n) {

  for (let i = 0; i < n; i++) {
    let line = "";
    for (let j = 0; j <= i; j++) line += "* "
    console.log(line);
  }

  for (let i = n; i >= 0; i--) {
    let line = "";
    for (let j = 0; j <= i; j++) line += "* "
    console.log(line);
  }

}

printHalfDiamondPattern(input);
console.log("\n");






// Star Pattern 07

function diamondStarPattern(n) {

  for (let i = 0; i < n; i++) {
    let line = "";
    for (let j = 0; j < n - i; j++) line += " ";
    for (let j = 0; j < i; j++) line += " *";
    console.log(line);
  }

  for (let i = 0; i <= n; i++) {
    let line = "";
    for (let j = 0; j < i; j++) line += " ";
    for (let j = 0; j < n - i; j++) line += " *";
    console.log(line);
  }

}

diamondStarPattern(input);
console.log("\n");





// Star Pattern 08
function hollowSquare(n) {

  for (let i = 0; i <= n; i++) {
    let line = "";
    for (let j = 0; j <= n; j++) {
      if (i == 0 || j == 0 || i == n || j == n) line += "*";
      else line += " ";
    }
    console.log(line);
  }

}

hollowSquare(input);
console.log("\n");
