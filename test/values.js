var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

const deepEqual = require('deep-equal') //package for testing if arrays are equal

const { Node, List } = require('../singly-linked-list.js');


describe('Getting array values', function () {
 it('Get array of 3 correct values from a list of 3 items', function () {
      // Arrange
      let expectedValues = [ 'yabba', 'dabba', 'doo' ]
      let list = new List()
      list.addNode("yabba");
      list.addNode("dabba");
      list.addNode("doo");

      //Act
      let measuedValues = list.values()

      //Assert
      expect(deepEqual(measuedValues, expectedValues)).to.equal(true)
    });
  it('Returns first Node with a value present the list', function () {
       // Arrange
       let list = new List()
       list.addNode("yabba");
       list.addNode("dabba");
       list.addNode("doo");
       let node = new Node ("dabba");
       node.nextNode = new Node ("doo");
       node.index = 1;
       //Act
       let foundNode = list.findNodeByValue("dabba")
       //Assert
       expect(foundNode.value).to.equal(node.value)
       expect(foundNode.index).to.equal(node.index)
       expect(foundNode.nextNode.value).to.equal(node.nextNode.value)

     });
  it('Returns undefined when asked to retrieve a Node with a value not present in the list', function () {
       // Arrange
       let list = new List()
       list.addNode("yabba");
       list.addNode("dabba");
       list.addNode("doo");

       //Act
       let foundNode = list.findNodeByValue("not in list")
       //Assert
       expect(foundNode).to.equal(undefined)
     });
});
