var Stack = function(){
    this.count = 0; // keep track of how many items are in the stack
    this.storage = {};   // 0 based index (like an array)

    this.push = function(value){
        this.storage[this.count] = value;
        this.count++;
    };

    this.pop = function(){
        // if there is nothing in the stack
        if(this.count === 0) {
            return undefined;
        }
        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    };
    this.size = function(){
        return this.count;
    };

    this.peek = function(){
        return this.storage[this.count - 1];
    };
    console.log(this);
};

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push('freeCodeCamp');
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
