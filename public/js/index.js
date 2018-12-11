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


});

