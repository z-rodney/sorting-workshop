const { bubbleSort } = require('./bubblesort')

describe('Bubble Sort', function () {
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles an array with one elements', function () {
    expect(bubbleSort([2])).toEqual([2])
  });
  it('handles an array with multiple elements', function () {
    expect(bubbleSort([3, 1, 2])).toEqual([1, 2, 3])
  });
  it('handles an array with 10 elements', function(){
    expect(bubbleSort([3, 1, 2, 3, 2, 5, 8 ,9, 7, 0])).toEqual([0, 1, 2, 2, 3, 3, 5, 7, 8, 9])
  })
});
