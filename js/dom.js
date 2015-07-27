/*

Hints for the first problem:

  1. Find the button with the ID of `sum-all`
  2. Add an event listener that:
    - finds the select element by name (use getElementsByName)
    - passes all of its options to the `sum` function defined in `logic.js`
    - takes the value returned by the `sum` function and displays it on the page

 */
if (document.URL === "file:///Users/Herkamina/Gschool-Repos/js-iteration/index.html") {

//make a variable that grabs the sum-all button and adds a click event listener to it
var addAll = document.getElementById("sum-all").addEventListener("click", function(){
  //makes the var prices grab all the info from the select class 'prices', and you have the 0 because it's the first part of the array and all the children of it
  var prices = document.getElementsByName("prices")[0].children;
  //another variable to grab the answers area
    var sumAnswer = document.getElementById("answers");
    //add the result of the sumAll function from logic.js to the answers spaces(using the var created above) so when you click the button, it fires the function and shows the answer.
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

var numSel = document.getElementById("count-selected").addEventListener("click", function(){
    var selectedItems = document.getElementsByTagName("select")[0].selectedOptions;
      var numSels = document.getElementById("answers");
        numSels.innerHTML = (numSelected(selectedItems));
});

var avSel = document.getElementById("average-selected").addEventListener("click", function(){
  var selectedItems = document.getElementsByTagName("select")[0].selectedOptions;
  var avSels = document.getElementById("answers");
  avSels.innerHTML = (avSelected(selectedItems));
});

}

else if (document.URL === "file:///Users/Herkamina/Gschool-Repos/js-iteration/names.html"){


var ul = document.getElementById("answer");

var names = document.getElementById("all-names").addEventListener("click", function(){
  ul.innerHTML = null;
  var allNames = document.getElementsByTagName("textarea")[0].value.split("\n");
  //write a for loop that loops through "allNames.length and creates an li and appends each name "
    for (var i = 0; i < allNames.length; i++) {
      var li = document.createElement("li");
      ul.appendChild(li);
      li.innerHTML = allNames[i];
    }
});

// loop over the array and just grab the name in the first positiion of each mini array, then do the same for last names
var names = document.getElementById("first-names").addEventListener("click", function(){
  ul.innerHTML = null;
  var firstNames = document.getElementsByTagName("textarea")[0].value.split("\n");
//console.log(firstNames);
//copy of the firstNames array because we are going to destroy it as we shift names off of it below
  var firstNamesCopy = firstNames.slice();
//console.log(firstNames);
  for (var i = 0; i < firstNames.length; i++) {
    //console.log("firstNames",firstNames);
    //console.log("firstNamesCopy", firstNamesCopy);
    //This takes the first name string in the array and splits it only at the first space, and creates a new array that contains the first and last names of each person.  The last name will be anything after the first space.
    var firstNames2 = firstNamesCopy.shift().split(/ (.+)/);
    //create the li and attach it to the ul
    var li = document.createElement("li");
      ul.appendChild(li);
      //return only the first name by just printing out the first part of each new little array, which is just the first name
      li.innerHTML = firstNames2[0];
  }
});
//AS above, but only returns that second half of the array
var names = document.getElementById("last-names").addEventListener("click", function(){
  ul.innerHTML = null;
  var lastNames = document.getElementsByTagName("textarea")[0].value.split("\n");
  var lastNamesCopy = lastNames.slice();
  for (var i = 0; i < lastNames.length; i++) {
    var lastNames2 = lastNamesCopy.shift().split(/ (.+)/);
    var li = document.createElement("li");
      ul.appendChild(li);
      //return only the last name
      li.innerHTML = lastNames2[1];
    //console.log(firstNames2[0]);
  }
});


var names = document.getElementById("names-with-lengths").addEventListener("click", function(){
  //clear out the inner HTML of the answer space
  ul.innerHTML = null;
  //get the list of names from the text area and make it into an array by splitting on the new line
  var allNames = document.getElementsByTagName("textarea")[0].value.split("\n");
  //console.log(allNames);
  //make an empty array to hold the lengths of each name without the spaces
  var nameCount3 = [];
  //a clean copy of allNames that will be destroyed as it finds the count of the characters
  var nameCount = allNames.slice();
    for (var i = 0; i < allNames.length; i++) {
      //take a name from the nameCount array, take out the spaces and count the characters - find a better way to do this
      var nameCount2 = nameCount.shift().split(" ").join("").length;
         //push the length just counted into the array nameCount3
      nameCount3.push(nameCount2);
      //console.log("nameCount", nameCount);

      //make an li, append it to the ul, and make the li show the names and the lengths.
      var li = document.createElement("li");
      ul.appendChild(li);
      //show the name, and the count, at the same index number of each array
      li.innerHTML = "The # of characters in " + allNames[i] + " is " + nameCount3[i];
    }

});

}
