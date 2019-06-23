class Node {
  constructor(value){
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

  findNodeByValue(value, node, index){
    node = (typeof node !== 'undefined') ?  node : this.head; //if second argument not present assume starting from head of list object
    index = (typeof index !== 'undefined') ?  index : 0; //if second argument not present assume starting from head of list object
    if(node.value == value){
      node.index = index
      return node;
    } else if (node.nextNode == 0){
      return undefined;
    } else {
      index += 1;
      return this.findNodeByValue(value, node.nextNode, index);
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
  }

  getLength(node, index){
    node = (typeof node !== 'undefined') ?  node : this.head; //if second argument not present assume starting from head of list object
    index = (typeof index !== 'undefined') ?  index : 0; //if second argument not present assume starting from head of list object
    if(node === 0){
      return 0;
    } else if(node.nextNode == 0){
      return index+1;
    } else {
      index += 1;
      return this.getLength(node.nextNode, index);
    }
  }

  values(node, values){
    node = (typeof node !== 'undefined') ?  node : this.head; //if second argument not present assume starting from head of list object
    values = (typeof values !== 'undefined') ?  values : [];
    if (node.value == 0){
      return values
    } else if (node.value != undefined) {
      values.push(node.value)
      return this.values(node.nextNode, values)
    } else {
      return values
    }
  }
}

module.exports = {
  Node,
  List
}

myList = new List()
myList.addNode("yabba");
myList.addNode("dabba");
myList.addNode("doo");
myList.addNode("Flintstones innit");
// list.deleteNodeByValue("dabba")
// console.log(list.findNodeByValue("doo"));
// console.log(myList.values());
// console.log(list);
// list.deleteNodeByValue("doo")
// list.deleteNodeByValue("dabba")
// console.log(list);
