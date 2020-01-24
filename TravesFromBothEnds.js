/*
Given a sorted array in non-decreasing order, return an array of squares of each number, also in non-decreasing order. For example:

[-4,-2,-1,0,3,5] -> [0,1,4,9,16,25]

How can you do it in O(n) time?
*/


function traverse(a) {

  let firstPointer = 0;
  let lastPointer = a.length -1;
  let currentIndex = lastPointer;
  let newArray = [];

  while(firstPointer <= lastPointer) {
    let firstElement = a[firstPointer] * a[firstPointer];
    let lastElement = a[lastPointer] * a[lastPointer];

    if(firstElement > lastElement) {
        newArray[currentIndex] = firstElement;
        firstPointer++;
  
  } else {
      newArray[currentIndex] = lastElement;
      lastPointer = lastPointer - 1;
    }
    currentIndex--;
  }

  return newArray;
}
 //O(n) time O(n) space
console.log(traverse([-4,-2,-1,0,3,5]))
