/*

Hints for the first problem:

  1. Define a function that:
    - is assigned to a variable named `sum`
    - has one parameter named `options`
    - returns the calculated sum of all of the values of all of the options passed in

NOTE: use a `for` loop to make this happen.

*/
//1
//var test = [ 4, 2, 3];

function sumAll(options){
  var total = 0;
  for (var i = 0; i < options.length; i++) {
    total += parseInt(options[i].value);
  }
  return total;
}

//console.log(sumAll(options));
