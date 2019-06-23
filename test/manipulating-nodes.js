var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

const deepEqual = require('deep-equal') //package for testing if arrays are equal

const { Node, List } = require('../singly-linked-list.js');


describe('Deleting nodes from a list', function () {
 it('Can delete a node selected by value: at the end of a list', function () {
      // Arrange
      let list = new List()
      list.addNode("yabba");
      list.addNode("dabba");
      list.addNode("doo");

      let expectedValues = ["yabba", "dabba"]

      //Act
      list.deleteNodeByValue("doo")
      let foundValues = list.values()
      //Assert
      expect(deepEqual(foundValues, expectedValues)).to.equal(true)
      expect(list.head.nextNode.value).to.equal("dabba")
      expect(list.head.nextNode.nextNode).to.equal(0)
      expect(list.getLength()).to.equal(2)
    });
});
