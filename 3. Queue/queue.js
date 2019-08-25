function Queue() {
  this.collection = [];
  this.print = function() {
    console.log(this.collection);
  };
  this.enqueue = function(element) {
    this.collection.push(element);
  };
  this.dequeue = function(){
    return this.collection.shift();
  };
  this.front = function(){
    return this.collection[0];
  };
  this.size = function(){
    return this.collection.length;
  };
  this.isEmpty = function(){
    return this.collection.length === 0;
  };

}
var myQueue = new Queue();
myQueue.print();
myQueue.enqueue('1');
myQueue.enqueue('2');
myQueue.enqueue('3');
myQueue.enqueue('4');
myQueue.print();
myQueue.dequeue();
myQueue.print();
