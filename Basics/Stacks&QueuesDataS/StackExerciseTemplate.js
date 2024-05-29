//Stacks - have a top and bottom

//Arrays
//LinkedList - dynamic memory
// both work well, depends on priority





//Queues

//LinkedList


//Stack exercise template
/* class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {// allows us to see the top of a element/node/stack
    }

    push(value) {// lets us add a node to the top of the stack
    }

    pop() {// remove
    }

    //isEmpty
//}

//const myStack = new Stack();

//Browser history:

//Discord (push)
//StackOverflow (pop)
//Google (peek)   */

//Exercise solution 1

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    // const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    return this;
  }
  //isEmpty
}

const myStack = new Stack();
console.log(myStack.push("google"));
console.log(myStack.push("google2"));
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.pop());
//Discord
//ZTM
//google
