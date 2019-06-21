class Node {
  constructor(value, index){
    this.value = value;
    this.index = index;
    this.nextNode = 0;
  }
}

class List {
  constructor(){
    this.head = 0;
    this.length = 0;
  }

  addNode(value){
    let index = 0
    if (this.head == 0){
      this.head = new Node(value, index)
      this.length = index+1
    } else {
      this.assignNodeValue(this.head, value, index)
    }
  }

  assignNodeValue(node, value, index){
    index += 1;
    if (node.nextNode == 0){
      node.nextNode = new Node(value, index);
      this.length = index+1;
    } else {
      this.assignNodeValue(node.nextNode, value, index)
    }
  }

  findIndexOfValue(value, node){
    node = (typeof node !== 'undefined') ?  node : this.head; //if second argument not present assume starting from head of list object
    if(node.value == value){
      return node;
    } else if (node.nextNode == 0){
      return undefined;
    } else {
      return this.findIndexOfValue(value, node.nextNode)
    }
  }
}

list = new List()
list.addNode("yabba");
list.addNode("dabba");
list.addNode("doo");
console.log("The string 'doo' is in:");
console.log(list.findIndexOfValue("doo"));
console.log("The string 'qwerty' is in:");
console.log(list.findIndexOfValue("qwerty"));
