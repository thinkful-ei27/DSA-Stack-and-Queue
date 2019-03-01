const { Stack, peek, display, sortStack } = require('./stack');

function main() {
  const starTrek = new Stack();
  starTrek.push(4);
  starTrek.push(3);
  starTrek.push(1);
  starTrek.push(2);
  // console.log(starTrek.pop());
  // display(starTrek);
  // console.log(peek(starTrek));
  sortStack(starTrek);
}

main();
