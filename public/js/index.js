// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/examples",
      data: JSON.stringify(example)
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "api/examples",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var example = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(example).then(function() {
    refreshExamples();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);




  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCgw7HqOw9nbPA6cjRTrsQQcn0tlDa12aE",
    authDomain: "madlib-68ea6.firebaseapp.com",
    databaseURL: "https://madlib-68ea6.firebaseio.com",
    projectId: "madlib-68ea6",
    storageBucket: "madlib-68ea6.appspot.com",
    messagingSenderId: "639479628767"
  };
  firebase.initializeApp(config);

var database = firebase.database();
var initialValue = 0;
var vote1Counter = initialValue;
var vote2Counter= initialValue;
var vote3Counter = initialValue;
var totalCounter = initialValue;
var userVote = initialValue;

database.ref().on("value", function(snapshot){
console.log(snapshot.val());

 vote1Counter = snapshot.val().vote1Count;
 vote2Counter= snapshot.val().vote2Count;
 vote3Counter = snapshot.val().vote3Count;
 totalCounter = snapshot.val().totalCount;

 console.log(vote1Counter);
 console.log(vote2Counter);
 console.log(vote3Counter);
 console.log(totalCounter);
});



$(".btn").on("click", function(){
  event.preventDefault();
 var userVote = this.value;
 console.log(userVote);

  if (userVote === "1") {
    vote1Counter++;
    totalCounter++;
    sameChoice = Math.floor(vote1Counter / totalCounter * 100);
  } 

  else if( userVote === "2"){
    vote2Counter++;
    totalCounter++;
    sameChoice = Math.floor(vote2Counter / totalCounter * 100);
    }

    else {
      vote3Counter++;
    totalCounter++;
    sameChoice = Math.floor(vote3Counter / totalCounter * 100);
    }
    database.ref().set({
      vote1Count: vote1Counter,
      vote2Count: vote2Counter,
      vote3Count: vote3Counter,
      totalCount: totalCounter
    });

    database.ref().set({
      vote1Count: vote1Counter,
      vote2Count: vote2Counter,
      vote3Count: vote3Counter,
      totalCount: totalCounter
    });    
console.log(sameChoice);

});