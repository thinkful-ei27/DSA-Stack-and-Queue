const _Node = require('./node');

class Stack {
  constructor() {
    this.top = null;
  }

  pop() {
    if (this.top === null) {
      console.log('Null, No Pop');
      return;
    }
    const node = this.top;
    this.top = node.next;
    return node.data;
  }

  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }

    const node = new _Node(data, this.top);
    this.top = node;
  }
}

function peek(stack) {
  return stack.top;
}

function display(stack) {
  console.log(JSON.stringify(stack, null, 2));
}

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  const strStack = new Stack();
  let revStr = '';
  for (let i = 0; i < s.length; i++) {
    strStack.push(s[i]);
  }

  while (strStack.top !== null) {
    revStr += strStack.pop();
  }

  return revStr === s;
}

function matchParenthese(str) {
  const strStack = new Stack();
  let parenCount = 0;
  let posCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      strStack.push(str[i]);
    }

    if (str[i] === ')') {
      strStack.push(str[i]);
    }
  }
  let pop = '';
  while (strStack.top !== null) {
    pop = strStack.pop();
    if (pop === '(') {
      parenCount++;
    }
    if (pop === ')') {
      parenCount--;
    }
    posCount++;
  }

  if (parenCount > 0) {
    console.log('You have too many (');
  } else if (parenCount < 0) {
    console.log('You have too many )');
  }
  return parenCount === 0;
}

function sortStack(stack) {
   let sortedStack = new Stack();
   let temp1 = stack.pop();
   sortedStack.push(temp1);

   while (stack.top !== null) {
    temp1 = stack.pop();
     if (temp1 < peek(sortedStack).data) {
      sortedStack.push(temp1);
     } else {
      let temp2 = sortedStack.pop();
      if (temp2 > temp1) {
        
      }
      // stack.push(sortedStack.pop())
      
  }

   display(stack);
  // display(stack)
  // return sortedStack;

}
}


module.exports = { Stack, peek, display, sortStack };
