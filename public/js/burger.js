$(function() {

  $(".delete-burger").on("click", function() {
    const id = $("this").attr("data-id");
    // delete selected cat
    $.ajax(`/api/burgers/${id}`, {
      type: "DELETE"
    }).then(() => {
      console.log(`Deleted burger with id: ${id}`);
      location.reload();
    });
  });

  $(".change-consumed").on("click", function(event) {
    var id = $(this).data("id");
    var consume = $(this).data("consume");

    var consumedState = {
      data: consume
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: consumedState
    }).then(
      function() {
        console.log("changed consumed to", consume);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  // { name: sleepy }
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#hamburg").val().trim(),
      consume: $("[name=consumed]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});