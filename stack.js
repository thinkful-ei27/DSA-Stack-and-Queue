const _Node = require('./node');

class Stack {
  constructor() {
    this.top = null;
  }

  pop() {
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

module.exports = { Stack, peek, display };
