class Node {
  constructor(value, index){
    this.value = value;
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

  findNodeByValue(value, node){
    node = (typeof node !== 'undefined') ?  node : this.head; //if second argument not present assume starting from head of list object
    if(node.value == value){
      return node;
    } else if (node.nextNode == 0){
      return undefined;
    } else {
      return this.findNodeByValue(value, node.nextNode)
    }
  }

  findNodeByIndex(index, node, currentIndex){
    node = (typeof node !== 'undefined') ?  node : this.head; //if second argument not present assume starting from head of list object
    currentIndex = (typeof currentIndex !== 'undefined') ?  currentIndex : 0; //if third argument not present assume starting from beginning
    if(currentIndex == index){
      return node;
    } else if (node.nextNode == 0){
      return undefined;
    } else {
      currentIndex += 1;
      return this.findNodeByIndex(index, node.nextNode, currentIndex)
    }
  }

  changeNextNodeAtIndex(index, newNextNode, node, currentIndex){
    newNextNode = (newNextNode instanceof Node) ?  newNextNode : new Node (newNextNode);
    node = (typeof node !== 'undefined') ?  node : this.head; //if second argument not present assume starting from head of list object
    currentIndex = (typeof currentIndex !== 'undefined') ?  currentIndex : 0; //if third argument not present assume starting from beginning

    if(currentIndex == index){
      node.nextNode = newNextNode;
    } else if (node.nextNode == 0){
      return undefined;
    } else {
      currentIndex += 1;
      this.changeNextNodeAtIndex(index, newNextNode, node.nextNode, currentIndex )
    }
  }

  deleteNodeByValue(value){
    let nodeToDelete = this.findNodeByValue(value);
    let downstreamNode = nodeToDelete.nextNode;
    this.changeNextNodeAtIndex(nodeToDelete.index-1, downstreamNode);
    this.updateIndices()
  }

  updateIndices(node){
    node = (typeof node !== 'undefined') ?  node : this.head; //if second argument not present assume starting from head of list object
    if (node.nextNode.index != node.index+1 && node.nextNode != 0){
      node.nextNode.index = node.index+1;
      this.updateIndices(node.nextNode);
    } else if (node.nextNode != 0) {
      this.updateIndices(node.nextNode);
    } else {
      this.length = node.index + 1
    }
  }

}

list = new List()
list.addNode("yabba");
list.addNode("dabba");
list.addNode("doo");
list.addNode("Flintstones innit");
list.changeNextNodeAtIndex(1, "Hello world")
console.log(list.head.nextNode);
// console.log(list);
// list.deleteNodeByValue("doo")
// list.deleteNodeByValue("dabba")
// console.log(list);
