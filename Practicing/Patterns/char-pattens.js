const input = 5;

// char Pattern 01

function printAlphabetTriangle(n) {

  for (let i = 0; i < n; i++) {
    let line = "";
    let charCode = 65;
    for (let j = 0; j <= i; j++) line += String.fromCharCode(charCode++);
    console.log(line);
  }

}

printAlphabetTriangle(input);
console.log("\n");






// char Pattern 02

function printInvertedAlphabetTriangle(n) {

  for (let i = 0; i < n; i++) {
    let line = "";
    let charCode = 65;
    for (let j = 0; j < n - i; j++) line += String.fromCharCode(charCode++);
    console.log(line);
  }

}

printInvertedAlphabetTriangle(input);
console.log("\n");






// char Pattern 03

function printAlphabetRepeatTriangle(n) {

  let charCode = 65;
  for (let i = 0; i < n; i++) {
    let line = "";
    for (let j = 0; j <= i; j++) line += String.fromCharCode(charCode);
    charCode++;
    console.log(line);
  }

}

printAlphabetRepeatTriangle(input);
console.log("\n");
