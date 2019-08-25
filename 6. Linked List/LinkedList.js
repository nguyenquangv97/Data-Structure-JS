class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  size(){
    return this.length;
  }

  add(data) {
    if (this.head === null) {
      this.head = new ListNode(data);
    } else {
      var current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new ListNode(data);
    }
    this.length++;
  }


  // fix remove later
  remove(data) {
    var currentNode = this.head;
    var previousNode;
    if (currentNode.data === data) {
      head = currentNode.next;
    } else {
      while (currentNode.data !== data) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    this.length--;
  }

  isEmpty() {
    return length === 0;
  }

  indexOf(data) {
    var currentNode = this.head;
    var index = -1;

    while (currentNode) {
      index++;
      if (currentNode.data === data)
        return index;
      currentNode = currentNode.next;
    }
    return -1;
  }

  elementAt(index){
    var currentNode = this.head;
    var count = 0;
    while(count < index){
      count++;
      currentNode = currentNode.next;
    }
    return currentNode.data;
  }


  addAt(data, index){
    var node = new ListNode(data);

    var currentNode = this.head;
    var previousNode;
    var currentIndex = 0;

    if(index > length){
      return false;
    }
    if(index === 0){
      node.next = currentNode;
      head = node;
    } else {
      while(currentIndex < index){
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      node.next = currentNode;
      previousNode.next = node;
    }
    this.length++;
  }

  removeAt(index){
    var currentNode = this.head;
    var previousNode;
    var currentIndex = 0;

    if(index < 0 || index >= this.length){
      return null;
    }
    if(index === 0){
      head = current.next;
    } else {
      while(currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    this.length--;
    return currentNode.data;
  }
}

var linkedList = new LinkedList();
linkedList.add('Kitten');
linkedList.add('Puppy');
linkedList.add('Dog');
linkedList.add('Cat');
linkedList.add('Fish');

console.log(linkedList.size());
console.log(linkedList.removeAt(3));
console.log(linkedList.elementAt(3));
console.log(linkedList.indexOf('Puppy'));
console.log(linkedList.size());
