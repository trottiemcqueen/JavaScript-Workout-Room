// A linked list is a set of nodes, each node with a VALUE and a POINTER
// the first node is called the HEAD and last is called the TAIL
// NULL terminated. ELEMENTS that linked to one another, they can sorted or unsorted.
// A POINTER is just a reference to something else in memory.

//const basket = ['apples', 'grapes', 'pears'];

//linked list: apples --> grapes --> pears
//linked list: apples --> grapes --> pears
//                123         974       682 --> null


// creating a pointer / reference
//const obj1 = { a: true };
//const obj2 = obj1;


//10-->5-->16
//let myLinkedList = {
 // head: {
   // value: 10,
   // next: {
     // value: 5,
     // next: {
      //  value: 16,
       // next: null
    //  }
   // }
 // }
//}
class newNode {
  constructor(value) {
    this.value = value,
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);// instantiate 
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  insert(index, value) {
    // check params
    if (index >= this.length) {
      return this.append(value);
    }
    //const newNode = new Node(value);
    const newNode = {
      value: value,
      next: null
    };
      const leader = this.traverseToIndex(index-1)
      const holdingPointer = leader.next;
      leader.next = newNode;
      newNode.next = holdingPointer;
      this.length++;
      return this.printList()
  } 
  traverseToIndex(index) {
      //check params
      let counter = 0;
      let currentNode = this.head;
      while (counter !== index) {
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
    }
    reverse() {
      if (!this.head.next) {
        return this.head;
      }
      let first = this.head;
      this.tail = this.head;
      let second = first.next;
      while(second) {
        const temp = second.next;
        second.next = first;
        first = second;
        second = temp;
      }
      this.head.next = null;
      this.head = first;
    }
  }


const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.printList();
myLinkedList.insert(20, 88);
myLinkedList.reverse();
//console.log(myLinkedList);