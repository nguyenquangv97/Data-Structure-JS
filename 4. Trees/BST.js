/************
 * Node Class
 *************/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

/************
 * BST Class
 *************/
class BinarySearchTree {
  /**********************
   * Constructor
   */
  constructor() {
    this.root = null;
  }

  /*********************************************
   *                public methods              *
   **********************************************/

  /**********************
   * Insert
   */
  insert(data) {
    var newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this._insert(this.root, newNode);
    }
  }

  /**********************
   * Find Smallest (recursive)
   */
  findSmallest() {
    return this._findSmallest(this.root);
  }

  /**********************
   * Find Largest (recursive)
   */
  findLargest() {
    return this._findLargest(this.root);
  }

  /**********************
   * Find Smallest (Iterative)
   */
  findSmallestIterative() {
    var current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  /**********************
   * Find Largest (Iterative)
   */
  findLargestIterative() {
    var current = this.root;
    while (currently.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  /**********************
   * Find
   */
  find(target) {
    return this._find(this.root, target);
  }

  /**********************
   * contain
   */
  contain(target) {
    return this._contain(this.root, target);
  }

  /**********************
   * remove
   */
  remove(target) {
    return this._remove(this.root, target);
  }

  /**********************
   * Find Max Height
   */
  findMaxHeight(node = this.root){
    if(node == null){
      return -1;
    }
    var left = this.findMaxHeight(node.left);
    var right = this.findMaxHeight(node.right);
    return left > right ? left + 1 : right + 1;
  }

  /**********************
   * find Min Height
   */
  findMinHeight(node = this.root){
    if(node === null){
      return -1;
    }
    var left = this.findMinHeight(node.left);
    var right = this.findMinHeight(node.right);
    return left < right ? left + 1 : right + 1;
  }

  /**********************
   * InOrder traversal
   */
  inOrder(node = this.root){
    var result = [];
    if(this.root === null){
      return null;
    }
    (function _inOrder(node){
      if(node.left) { _inOrder(node.left); }
      result.push(node.data);
      if(node.right) { _inOrder(node.right); }
    })(this.root);
    return result;
  }

  /**********************
   * PreOrder traversal
   */
  preOrder(node = this.root){
    var result = [];
    if(this.root === null){
      return null;
    }
    (function _preOrder(node){
      result.push(node.data);
      if(node.left) { _preOrder(node.left); }
      if(node.right) { _preOrder(node.right); }
    })(this.root);
    return result;
  }

  /**********************
   * postOrder traversal
   */
  postOrder(node = this.root){
    var result = [];
    if(this.root === null) {
      return null;
    }
    (function _postOrder(node){
      node.left && _postOrder(node.left);
      node.right && _postOrder(node.right);
      result.push(node.data);
    })(node);
    return result;
  }

  /**********************
   * Level Order traversal
   */
  levelOrder(){
    var result = [];
    var queue = [];
    if(this.root != null){
      queue.push(this.root);
      while(queue.length > 0) {
        var node = queue.shift();
        result.push(node.data);
        if(hasLeftChild(node)) { queue.push(node.left); }
        if(hasRightChild(node)) { queue.push(node.right); }
      }
      return result;
    } else {
      return null;
    }
    return result;
  }

  /**********************
   * print side way
   */
  printSideWays(){
    var level = -1;
    this._printSideWays(this.root, '', level);
  }

  /*********************************************
   *                Helper methods              *
   **********************************************/

  /**********************
   * insert helper
   */
  _insert(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) // if the left branch is empty
        node.left = newNode;
      // return;
      else
        this._insert(node.left, newNode);
    } else if (newNode.data > node.data) {
      // go right
      if (node.right === null) {
        node.right = newNode;
        // return;
      } else {
        this._insert(node.right, newNode);
      }
    }
  }

  /**********************
   * find smallest helper
   */

  _findSmallest(node) {
    if (this.root === null) {
      return null;
    } else {
      if (this.hasLeftChild(node)) {
        return this._findSmallest(node.left);
      } else {
        return node.data;
      }
    }
  }

  /**********************
   * find largest helper
   */

  _findLargest(node) {
    if (this.root === null) {
      return null;
    } else {
      if (this.hasRightChild(node)) {
        return this._findLargest(node.right);
      } else {
        return node.data;
      }
    }
  }

  /**********************
   * find helper
   */
  // return the function value is very important
  /*
  You need to return the result of the recursion,
  or else the method implicitly returns undefined.
  */
  _find(node, target) {
    if (node.data === target) {
      return node;
    }
    if (node.data < target) {
      if (this.hasRightChild(node)) {
        return this._find(node.right, target);
      }
    }
    if (node.data > target) {
      if (this.hasLeftChild(node)) {
        return this._find(node.left, target);
      }
    }
  }

  _contain(node, target) {
    if (node.data === target)
      return true;
    if (target < node.data) {
      if (this.hasLeftChild(node))
        return this._contain(node.left, target);
      else
        return false;
    }
    if (target > node.data)
      if (this.hasRightChild(node))
        return this._contain(node.right, target);
      else
        return false;
  }


  _remove(node, target) {
    if (node === null) {
      return null;
    }
    if (target < node.data) {
      node.left = this._remove(node.left, target);
      return node;
    } else if (target > node.data) {
      node.right = this._remove(node.right, target);
      return node;
    } else {
      // node.data = target
      // I am the node to remove
      if (node.left === null && node.right === null) {
        // case 1: leaf
        node = null;
        return node;
      } else if (node.right === null) {
        // case 2: left child only
        node = node.left;
        return node;
      } else if (node.left === null) {
        // case 3: right child only
        node = node.right;
        return node;
      } else {
        // case 4: Left and Right subtree
        var newData = this._findSmallest(node.right);
        node.data = newData;
        node.right = this._remove(node.right, newData);
        return node;
      }
    }
  }

  _printSideWays(node, indent, level){
    // right subtree, then me, then left subtree
    //1 indentation
    if(node!== null){
      level++;
      this._printSideWays(node.right, indent + "     ", level++);
  		level--;
  		console.log(indent + level + '. ' + node.data);
      this._printSideWays(node.left, indent + "     ", level++);
    }
  }

  /**********************************************
   *                Utility methods              *
   ***********************************************/
  hasLeftChild(node) {
    return node.left !== null;
  }

  hasRightChild(node) {
    return node.right !== null;
  }

  emptyTree() {
    return this.root === null;
  }

  isLeaf(node) {
    return (node.left === null && node.right === null);
  }

  onlyRightSubtree(node) {
    return (node.left === null && node.right !== null);
  }

  onlyLeftSubtree(node) {
    return (node.right === null && node.left !== null);
  }

  isBalanced(){
    return (this.findMinHeight() >= this.findMaxHeight() - 1);
  }



}

/**********************************
 *               Main              *
 ***********************************/

var BST = new BinarySearchTree();
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);

// console.log([BST]);
// console.log(BST.findSmallest());
// console.log(BST.findLargest());
// console.log(BST.find(27));
// console.log(BST.contain(15));
// console.log(BST.contain(100));

console.log("Remove");
console.log(`inOrder ${BST.inOrder()}`);
console.log(`preOrder ${BST.preOrder()}`);
console.log(`postOrder ${BST.postOrder()}`);

console.log(BST.remove(5));
console.log(`Inorder ${BST.inOrder()}`);
console.log(`preOrder ${BST.preOrder()}`);
console.log(`postOrder ${BST.postOrder()}`);
console.log(BST.remove(7));

console.log(`Inorder ${BST.inOrder()}`);
console.log(`preOrder ${BST.preOrder()}`);
console.log(`postOrder ${BST.postOrder()}`);
console.log(BST.remove(15));

console.log(`Inorder ${BST.inOrder()}`);
console.log(`preOrder ${BST.preOrder()}`);
console.log(`postOrder ${BST.postOrder()}`);

BST.printSideWays();

//console.log(`${BST.findMaxHeight()} is the max height`);
