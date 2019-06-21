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
}

list = new List()
console.log(list);
list.addNode(1);
list.addNode(2);
list.addNode(3);
console.log(list);
