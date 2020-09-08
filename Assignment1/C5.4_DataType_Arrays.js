/*****************************************************************/
//Is array copied? 
/* What is this code going to show?*/

          let fruits = ["Apples", "Pear", "Orange"];

          // push a new value into the "copy"
          let shoppingCart = fruits;
          shoppingCart.push("Banana");

          // what's in fruits?
          // ["Apples", "Pear", "Orange", "Banana"]
 //        console.log( fruits.length ); //  = 4

/*****************************************************************/
//Array operations. 
/*Let’s try 5 array operations.*/

          // Create an array styles with items “Jazz” and “Blues”.
          // Append “Rock-n-Roll” to the end.
          // Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
          // Strip off the first value of the array and show it.
          // Prepend Rap and Reggae to the array.
          // The array in the process:

          // Jazz, Blues
          // Jazz, Blues, Rock-n-Roll
          // Jazz, Classics, Rock-n-Roll
          // Classics, Rock-n-Roll
          // Rap, Reggae, Classics, Rock-n-Roll

         var arr = ['Jazz','Blues'];
//         console.log(arr);
         arr.push('Rock-n-Roll');
//         console.log(arr);
        arr[Math.floor(arr.length/2)] = 'Classics';
//         console.log(arr);
         arr.shift();
//         console.log(arr);
        arr.unshift('Rap','Reggae');
//         console.log(arr);

/*****************************************************************/
//Calling in an array context 

          /* What is the result? Why? */

          arr = ["a", "b"];

          arr.push(function() {
            console.log( this.toString() );
          })
        
//          arr[2](); // = [ 'a', 'b', Function ]

          // The function is called as a method of the Array
          // this references the object or Array in this Case

/*****************************************************************/
//Sum input numbers

          /* Write the function sumInput() that: 
          
          Asks the user for values using prompt and stores the values in the array.
          Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
          Calculates and returns the sum of array items.
          P.S. A zero 0 is a valid number, please don’t stop the input on zero.
          */

          let prompt = require('prompt-sync')();
          let arrStore = [];

          while (true) {
break; // Remove Break to Run This Code Block       
            let str = prompt('Please Enter Number');
            let num = parseFloat(str);

            if (str != num) break;

            arrStore.push(num);

          }

//          console.log(arrStore.reduce((a,n)=>a+n,0));


/*****************************************************************/     
//A maximal subarray

          /*The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].
          
          The task is: find the contiguous subarray of arr with the maximal sum of items.
          
          Write the function getMaxSubSum(arr) that will return that sum. */

          function getMaxSubSum(arr) {
            let sum = 0, max = 0;

            for (let i = 0; i < arr.length; i+=1) {
              sum = 0;
              for (let j = i; j < arr.length; j+=1){
                sum+= arr[j];
                if (sum > max) max = sum;
              }
              
              
            }

            return max;
          }

          // console.log(getMaxSubSum([-1, 2, 3, -9]));
          // console.log(getMaxSubSum([2, -1, 2, 3, -9]));
          // console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
          // console.log(getMaxSubSum([-2, -1, 1, 2]));
          // console.log(getMaxSubSum([100, -9, 2, -3, 5]));
          // console.log(getMaxSubSum([1, 2, 3])); 
          // console.log(getMaxSubSum([-1, -2, -3]));

