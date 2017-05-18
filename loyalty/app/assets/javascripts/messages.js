$(document).on("ready",function(){

  $(".new-message").on("click", function(e){
    $(".show").toggleClass("form-modal");
  });

  $(".submit").on("click", function(e){
    e.preventDefault();

    var parentId = $("#master").val();
    var tabValue = $("#tab").val();
    var message = $("#message_memo").val();
    var city = $("#city").val();
    var lat = $("#lat").val();
    var lng = $("#lng").val();
    var weather = $("#weather").val();

    if (message === "") {
      alert("Sorry, message cannot be blank")
    }
    else {

        $.ajax({
        url: "/messages",
        method: "POST",
        data: {"message":
                {
                  "memo": message,
                  "user_id": userId,
                  "parent_message_id": parentId,
                  "city": city,
                  "lat": lat,
                  "lng": lng,
                  "weather": weather
                }
             },
        dataType: "JSON"

      }).done(function(data){
          location.reload();
      }).fail(function(){
        console.log("failed");
      });
    }
  });

  $('.view-messages').on('click', function(){
    $('.message-modal').fadeToggle();
    $('.board').fadeToggle();
    if ($(".view-messages").html() === "View all my messages"){
      $(".view-messages").html("Show all messages");
    }
    else {
      $(".view-messages").html("View all my messages")
    }
  });

  $(".close").children().on("click", function(){
    $(".show").toggleClass("form-modal");
    console.log("click");
  });

})
