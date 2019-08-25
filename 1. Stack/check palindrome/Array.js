/* Stacks! */

// functions: push, pop, peek, length

/*************************
 * Using array as a stack
 */
var letters = []; // this is our stack

var word = "bob";

var rword = ""; // reversed word

// push all letters into the stack
for (var i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

// pop off the stack in reverse order
for (var i = 0; i < word.length; i++) {
  rword += letters.pop();
}

if (rword === word) {
  console.log(`${word} is a palindrome.`);
} else {
  console.log(`${word} is not a palindrome.`);
}

