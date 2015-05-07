var _ = require("../underscore.js");

describe('Leap Year Calculator', function(){
	
 it('average returns the average of an array of values', function() {
    expect(_.average([4,6,1,1])).toEqual(3)
 });

 it('contains returns true if argument value is contained in array', function() {
    expect(_.contains([7,55,99], 99)).toEqual(true)
    expect(_.contains([7,55,99], 89)).toEqual(false)
 });

 it('first returns the first element of an array', function() {
    expect(_.first([5, 4, 3, 2, 1])).toEqual(5)
 });

 it('last returns the last element of an array', function() {
    expect(_.last([5, 4, 3, 2, 1])).toEqual(1)
 });

 it('max returns the greatest element of an array', function() {
    expect(_.max([5, 400, 3, 1200, 1])).toEqual(1200)
 });

 it('min returns the smallest element of an array', function() {
    expect(_.min([5, 4, 3, 2, 1])).toEqual(1)
 });

 xit('sample returns a random element of an array', function() {
    expect(_.last([5, 4, 3, 2, 1])).toEqual(1)
 });

 it('difference returns the elements contained in first parameter array but not second parameter array', function() {
    expect(_.difference([1, 2, 3, 4, 5], [5, 2, 10])).toEqual([1, 3, 4])
 });

 it('indexOf returns the element of an array for the value passed as parameter', function() {
    expect(_.indexOf([1, 2, 3], 2)).toEqual(1)
 });

});