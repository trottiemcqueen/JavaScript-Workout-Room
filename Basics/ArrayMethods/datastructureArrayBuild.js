//Built data structure from scratch using class

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index]
  }

  push(item) {
    this.data[this.length]
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return item;
  }
}

const newArray = new MyArray();

newArray.push('hi');
newArray.push('friend');
newArray.push('!');
newArray.pop();

console.log(newArray);