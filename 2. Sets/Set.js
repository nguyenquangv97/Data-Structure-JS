function mySet(){
  // the var collection will hold the set
  var collection = [];

  // this method will check for presence of an element and return true or false
  this.has = function(element){
    return (collection.indexOf(element) !== -1);
  };

  // this method will return all the values in the set
  this.values = function(){
    return collection;
  };

  // this method will add an element to the set
  this.add = function(element){
    // we do not allow duplicates
    if(!this.has(element)){
      collection.push(element);
      return true;
    }
    return false;
  };

  // this method will remove an element from a Set
  // in ES6 this method is called Delete
  this.remove = function(element){
    // check if that element exists
    if(this.has(element)){
      index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  // this method will return the size of the collection
  // size is a Property in ES6 (not a method)
  this.size = function() {
    return collection.length;
  };
  /************************************************
  * Above code are in ES6 implementation of the Set
  *************************************************/

  // This method will return the union of 2 sets
  this.union = function(otherSet){
    var unionSet = new mySet();
    var firstSet = this.values();
    var secondSet = otherSet.values();

    firstSet.forEach(function(e){
      unionSet.add(e);
    });
    secondSet.forEach(function(e){
      unionSet.add(e);
    });
    return unionSet;
  };

  // this method will return the intersection of two sets as a new set
  this.intersection = function(otherSet){
    var intersectionSet = new mySet();
    var firstSet = this.values();
    var secondSet = otherSet.values();
    firstSet.forEach(function(item){
      if(otherSet.has(item)){
        intersectionSet.add(item);
      }
    });
    return intersectionSet;
  };

  // this method will return the difference of two sets as a new set
  this.difference = function(otherSet) {
    var differenceSet = new mySet();
    var firstSet = this.values();
    var secondSet = otherSet.values();
    firstSet.forEach(function(item) {
      if(!otherSet.has(item)){
        differenceSet.add(item);
      }
    });
    return differenceSet;
  };

  // this method will test if the set is a subset of a different set
  // test if the first set is completety contained by the other set.
  this.subset = function(otherSet){
    var firstSet = this.values();
    // 'every' method is oging to test whether all of the elements in
    // the array pass the test implemented by the provided function
    // test if all the elements in the firstSet will pass this function which
    // has(value);
    return firstSet.every(function(value)  {
      return otherSet.has(value);
    });
  };
}


var setA = new mySet();
var setB = new mySet();
setA.add('a');
setB.add('b');
setB.add('c');
setB.add('a');
setB.add('d');

console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
console.log(setB.difference(setA).values());

// ES6 set

var setC = new Set();
var setD = new Set();
setC.add('a');
setD.add('b');
setD.add('c');
setD.add('a');
setD.add('d');

console.log(setD.values());
setD.delete('a');
console.log(setD.has('a'));
