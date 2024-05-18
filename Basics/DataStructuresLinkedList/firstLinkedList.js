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
    const newNode = {
      value: value,
      next: null
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
console.log(myLinkedList);