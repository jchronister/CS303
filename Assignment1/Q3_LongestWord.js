  /*Write a function findLongestWord() that takes an array of words and returns the length of
the longest one. 

Defining Table

Input                   Processing                  Output
Array of Words          Loop Through Array and      Return Max Length
                        Find Max Length

*/

function findLongestWord(arr) {

    if (arr.length === 0) return 0;

    let longest = arr[0].length;
    
    for (i = 1; i < arr.length; i+=1) {
      if(arr[i].length > longest) longest = arr[i].length;
    }

    return longest || 0;
  
}

let x = ['hi','hello','never','thoughts'];

console.log(findLongestWord(x));