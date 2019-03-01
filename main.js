const { Stack, peek, display } = require('./stack');

function main() {
  const starTrek = new Stack();
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  // console.log(starTrek.pop());
  // display(starTrek);
  // console.log(peek(starTrek));
}

main();
