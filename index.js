function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();

/**
 * 1. Count Character Frequencies (Intermediate)Problem: Write a function that takes a string as input and returns an object showing how many times each character appears. Do not use any built-in string splitting or regex methods. Ignore spaces.Example: countChars("hello apple")Expected Output: { h: 1, e: 2, l: 3, o: 1, a: 1, p: 2 }Core Logic: Single loop, object property assignment, and manual space checking.
 */

// step-1: write a func
// step let a object

function characterFrequencies(str) {
  const counts = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char == "") {
      continue;
    }
    if (counts[char] === undefined) {
      counts[char] = 1;
    } else {
      counts[char] = counts[char] + 1;
    }
  }
  console.log(counts);
}



