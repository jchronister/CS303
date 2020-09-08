/*  Reverse an Array
*   Arrays have a reverse method that changes the array by inverting the order in which its elements
*   appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first,
*   reverseArray, takes an array as argument and produces a new array that has the same elements in
*   the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it
*   modifies the array given as argument by reversing its elements. Neither may use the standard reverse
*   method.
*
*   reverseArray(["A", "B", "C"])); → ["C", "B", "A"];
*
*   reverseArrayInPlace([1, 2, 3, 4, 5]); → [5, 4, 3, 2, 1]
*
*
*
*   Defining Table
*
*   Input               Processing                    Output
*   Array               Reverse Array Elements        Return Array
*                       Use Same or New Array
*                       Depending on Function
*/


function reverseArray(arr) {

    let retrn = [], j = 0;

    for (i = arr.length - 1; i >= 0; i-=1) {
      retrn[j] = arr[i];
      j+=1;
    }

    return retrn;

}


function reverseArrayInPlace(arr) {

    let begin = 0, end = arr.length - 1, hold;

    while (begin < end) {
      hold = arr[end];
      arr[end] = arr[begin];
      arr[begin] = hold;
      begin+=1;
      end-=1;
    }

    return arr; 

}

let x = ["A", "B", "C"];
//         A, B, C

let y = [1, 2, 3, 4, 5, 6];
//       1, 2, 3, 4, 5, 6