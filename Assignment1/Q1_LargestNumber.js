/* Define a function maxOfThree() that takes three numbers as arguments and returns the
largest of them

Defining Table

Input                 Processing           Output
Number Arguments      Check to Find        Largest Number
                      Largest Number

*/

// With 3 Arguments
function maxOfThree(num1, num2, num3) {

    let largest = num1;
    if (num2 > largest) largest = num2;
    if (num3 > largest) largest = num3;
    return largest;

}

// With Any Length of Arguments
function maxOfThree1(AnyNumberOfArguments) {

  let largest = arguments[0];

  for (let i = 1; i < arguments.length; i+=1){
    if (arguments[i] > largest) largest = arguments[i];

  }

  return largest;

}


console.log(maxOfThree(1,2,3));
console.log(maxOfThree1(5,1,2));



