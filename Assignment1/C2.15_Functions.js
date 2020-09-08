// Chapter 2 Functions - Tasks

/**********************************************************************/
//Rewrite the function checkAge using '?' or '||'
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  return confirm('Did parents allow you?');
}
//console.log(checkAge(18));

// Using ?
function checkAge1(age) {
  return age > 18 ? true : confirm('Did parents allow you?');
}
//console.log(checkAge1(18));

// Using ||
function checkAge2(age) {
  return age > 18 || confirm('Did parents allow you?');
}
//console.log(checkAge2(18));

/**********************************************************************/
// Write a function min(a,b) which returns the least of two numbers a and b.

function min(a,b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
//console.log(min(8,5));

/**********************************************************************/
// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

function pow(x,n) {
  return Math.pow(x,n);
}

//console.log(pow(8,2));

// For Positive Integer n >= 1
function pow1(x,n) {
  let total = x;
  for (let i = 1; i <= n; i+=1) {
    total*=x;
  }
  return total;
}

//console.log(pow1(8,2));