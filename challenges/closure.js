// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: nestedFunction can access internal because of closure, an internal function can access variables that are in an outer scope.


/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */


// function summation(number){
//   let counter = 0;
//   for (let i = 0; i < number; i++){
//     counter += i + 1;
//   }
//   return counter;
//   }



function summation(number){
  let counter = 0;
  function mathMagic(){
    for (let i = 0; i < number; i++){
    counter += i + 1;
    }
    return counter;
  }
  return mathMagic();
}

console.log(summation(4));   // 10