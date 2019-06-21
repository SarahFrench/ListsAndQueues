class Node {
  constructor(value){
    this.value = value;
    this.nextNode = 0;
  }
}

class List {
  constructor(){
    this.head = 0;
  }

  addNode(value){
    if (this.head == 0){
      this.head = new Node(value)
    } else {
      this.assignNodeValue(this.head, value)
    }
  }

  assignNodeValue(node, value){
    if (node.nextNode == 0){
      node.nextNode = new Node(value);
    } else {
      this.assignNodeValue(node.nextNode, value)
    }
  }
}

list = new List()
console.log(list);
list.addNode(1)
list.addNode(2)
list.addNode(3)
list.addNode(4)
console.log(list.head.nextNode.nextNode);
