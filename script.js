let sentence = "Hello world.";

let lengthCounter = 0;
let wordCounter = 1;
let vowelCounter = 0;

for (let i = 0; i < sentence.length; i++) {
  let character = sentence[i];

  lengthCounter++;

  if (character === " ") {
    wordCounter++;
  }

  if (
    character === "a" ||
    character === "e" ||
    character === "i" ||
    character === "o" ||
    character === "u" ||
    character === "A" ||
    character === "E" ||
    character === "I" ||
    character === "O" ||
    character === "U"
  ) {
    vowelCounter++;
  }

  if (character === ".") {
    break;
  }
}
console.log("Length of sentence:", lengthCounter);
console.log("Number of words:", wordCounter);
console.log("Number of vowels:", vowelCounter);
