/*Define a function sum() and a function multiply() that sums and multiplies (respectively)
all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and
multiply([1,2,3,4]) should return 24.

Defining Table

Input                   Processing                  Output
Array of Numbers        Loop Through Array and      Return Total
                        Process Each Item

*/


function sum(arr) {

  let total = arr[0];
  for (let i = 1; i < arr.length; i+=1) {
    total+=arr[i];
  }
  
  return total;

}


function multiply(arr) {

  let total = arr[0];
  for (let i = 1; i < arr.length; i+=1) {
    total*=arr[i];
  }
  
  return total;

}

console.log(sum([1,2,3,4]));
console.log(multiply([1,2,3,4]));

