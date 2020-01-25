/*
Given an array of integers, find the continuous subarray, which when sorted, results in the entire array being sorted. 
For example: A = [0,2,3,1,8,6,9], result is the subarray [2,3,1,8,6]
*/

function findSubArray(a) {
  let firstPointer = 0;
  let secondPointer = a.length - 1;

  let firstDone = false;
  let secondDone = false;

  //instead of this while loop you can use 2 for loops
  while(!firstDone && !secondDone) {
    if (a[firstPointer] > a[firstPointer + 1]) {
      firstDone = true
    } else {
      firstPointer++;
    }
    if(a[secondPointer] < a[secondPointer - 1]) {
      secondDone = true;
    } else {
      secondPointer--;
    }
  }

  // find min and max of a[start..end]

  let max = a[0];
  let min = a[a.length -1];

  for(let k = firstPointer; k <= secondPointer ; k++) {
    if (a[k] > max) {
      max = a[k];
    }
    if (a[k] < min) {
      min = a[k];
    }
  }

  //expend your sub array
  while(a[firstPointer] > min && a[secondPointer] < max) {
    if(a[firstPointer] > min) {
      firstPointer--;
    }
    if(a[secondPointer] < max) {
      secondPointer++;
    }
  }


  return a.slice(firstPointer, secondPointer)
  
}

console.log(findSubArray([1,2,4,5,3,5,6,7]));
console.log(findSubArray([0,2,3,1,8,6,9]))
