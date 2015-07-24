/*

Hints for the first problem:

  1. Find the button with the ID of `sum-all`
  2. Add an event listener that:
    - finds the select element by name (use getElementsByName)
    - passes all of its options to the `sum` function defined in `logic.js`
    - takes the value returned by the `sum` function and displays it on the page

 */
var addAll = document.getElementById("sum-all").addEventListener("click", function(){
  var prices = document.getElementsByName("prices")[0].children;
    var sumAnswer = document.getElementById("answers");
      sumAnswer.innerHTML = (sumAll(prices));
});


var averageAll = document.getElementById("average-all").addEventListener("click", function(){
    var prices = document.getElementsByName("prices")[0].children;
      var averageAnswer = document.getElementById("answers");
        averageAnswer.innerHTML = (avAll(prices));
  });

var addSel = document.getElementById("sum-selected").addEventListener("click", function(){
  var selectedItems = document.getElementsByTagName("select")[0].selectedOptions;
    var sumSelecteds =document.getElementById("answers");
      sumSelecteds.innerHTML = (sumSelected(selectedItems));
});
