/*
Solved example:
Create a generator called traverse that accepts a matrix and returns an array with it's values
in a 1 dimensional matrix.
*/
function* traverse(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[0].length; j++) {
      result.push(array[i][j]);
    }
  }
  yield result;
}
/*
Problem 1
Create a generator function named transpose that accepts a
matrix (2 dimensional array) of numbers and yields the entries of that matrix
in tranposed order.

For example, 
let arr = [[1, 2], [3, 4]]

g = transpose(arr)
console.log(g.next().value)
expect to see: [1, 3, 2, 4]

*/
function* transpose(array) {}

/*
Problem 2
Create a generator function named pairWiseTransform that accepts an array of 
numbers and yields an array of pairwise contiguous sums

For example, 
let arr = [1, 9, 2, 4, 1, 4]
g = pairWiseTransform(arr)
console.log(g.next().value)
}
expect to see: [10, 11, 6, 5, 5]

*/

function* pairWiseTransform(array) {}

/*
Problem 3
Create a generator function named findConsecutive that accepts an array of 
numbers and a target number and yields any pair of numbers that sum up to the target number.

For example, 
let arr = [1, 9, 2, 4, 7, 4]
g = findConsecutive (arr, 11)
console.log(g.next().value)
}
expect to see: [9, 2]

*/

function* findConsecutive(array) {}

module.exports = { transpose, traverse, pairWiseTransform, findConsecutive };
