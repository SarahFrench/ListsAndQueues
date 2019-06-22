var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

const deepEqual = require('deep-equal') //package for testing if arrays are equal

const { Node, List } = require('../singly-linked-list.js');


describe('Getting array values', function () {
 it('Get array of values from a list of 3 items', function () {
      // Arrange
      let expectedValues = [ 'yabba', 'dabba', 'doo' ]
      //Act
      list = new List()
      list.addNode("yabba");
      list.addNode("dabba");
      list.addNode("doo");
      let measuedValues = list.values()
      //Assert
      expect(deepEqual(measuedValues, expectedValues)).to.equal(true)
    });
});
