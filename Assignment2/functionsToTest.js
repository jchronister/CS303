"use strict";

/**
 * Returns Largest of 3 Numbers
 *
 * @param {number} num1 - Number 1
 * @param {number} num2 - Number 2
 * @param {number} num3 - Number 3
 * @return {number} Largest Number
 */
  function maxOfThree(num1, num2, num3) {

    let largest = num1;
    if (num2 > largest) largest = num2;
    if (num3 > largest) largest = num3;
    return largest;

}

/**
 * Returns Sum of Numbers in an Array
 *
 * @param {number[]} arr - Array of Numbers  
 * @return {number} Sum
 */
function sum(arr) {

  let total = arr[0];
  for (let i = 1; i < arr.length; i+=1) {
    total+=arr[i];
  }
  
  return total;

}


/**
 * Returns Length of Longest Word in an Array
 *
 * @param {string[]} arr - Array of Words  
 * @return {number} Word Length
 */
function findLongestWord(arr) {
    
  if (arr.length === 0) return 0;

  let longest = arr[0].length;
  
  for (let i = 1; i < arr.length; i+=1) {
    if(arr[i].length > longest) longest = arr[i].length;
  }

  return longest || 0;

}

