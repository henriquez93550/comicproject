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
var vote2Counter = initialValue;
var vote3Counter = initialValue;
var totalCounter = initialValue;
var userVote = initialValue;

$(function () {

	$(".create-form  ").on("submit", function (event) {
		// Make sure to preventDefault on a submit event.
		event.preventDefault();
		console.log("you clicked me")
		var newUser = {
			category: $("#category").val().trim(),
			word1: $("#w1").val().trim(),
			word2: $("#w2").val().trim(),
			word3: $("#w3").val().trim(),
			word4: $("#w1").val().trim(),
			word5: $("#w4").val().trim(),
			word6: $("#w5").val().trim(),
			word7: $("#w6").val().trim(),
			word8: $("#w7").val().trim(),
			word9: $("#w8").val().trim(),
			word10: $("#w9").val().trim(),

		};
		console.log(newUser)
		// Send the POST request.
		$.ajax("/api/words/", {
			type: "POST",
			data: newUser
		}).then(
			function (user) {

				// Reload the page to get the updated list
				location.reload();
				//link to the story page
				window.location.href = "/user/" + user.id;

			}
		);
	});

	$(".rate").on("click", function () {
		event.preventDefault();
		var userVote = this.value;
		console.log(userVote);
	
		if (userVote === "1") {
			vote1Counter++;
			totalCounter++;
			sameChoice1 = Math.floor(vote1Counter / totalCounter * 100);
			$(".ratings1").html(sameChoice1 + "% of users have chosen the Forunate Events story.");
			$(".ratings2").html(sameChoice2 + "% of users have chosen the Motor Skills story.");
			$(".ratings3").html(sameChoice3 + "% of users have chosen the Furry Friends story.");
	
		}
	
		else if (userVote === "2") {
			vote2Counter++;
			totalCounter++;
			sameChoice2 = Math.floor(vote2Counter / totalCounter * 100);
			$(".ratings2").html(sameChoice2 + "% of users have chosen the Motor Skills story.");
			$(".ratings3").html(sameChoice3 + "% of users have chosen the Furry Friends story.");
			$(".ratings1").html(sameChoice1 + "% of users have chosen the Forunate Events story.");
		}
	
		else {
			vote3Counter++;
			totalCounter++;
			sameChoice3 = Math.floor(vote3Counter / totalCounter * 100);
			$(".ratings3").html(sameChoice3 + "% of users have chosen the Furry Friends story.");
			$(".ratings2").html(sameChoice2 + "% of users have chosen the Motor Skills story.");
			$(".ratings1").html(sameChoice1 + "% of users have chosen the Forunate Events story.");
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

});


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



$(".rate").on("click", function(){
  event.preventDefault();
 var userVote = this.value;
 console.log(userVote);

  if (userVote === "1") {
    vote1Counter++;
    totalCounter++;
    sameChoice1 = Math.floor(vote1Counter / totalCounter * 100);
    $(".ratings1").html(sameChoice1 + "% of users have chosen the Forunate Events story.")
  } 

  else if( userVote === "2"){
    vote2Counter++;
    totalCounter++;
    sameChoice2 = Math.floor(vote2Counter / totalCounter * 100);
    $(".ratings2").html(sameChoice2 + "% of users have chosen the Motor Skills story.")
    }

    else {
      vote3Counter++;
    totalCounter++;
    sameChoice3 = Math.floor(vote3Counter / totalCounter * 100);
    $(".ratings3").html(sameChoice3 + "% of users have chosen the Furry Friends story.")
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

