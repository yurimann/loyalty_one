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
        // if ($("#temp").length > 0 ){
        //   $(
        //   '<div class="box" style="margin-left: '+tabValue+'px">' +
        //     '<div class="text">' +
        //       "<p>" + message + "</p>" +
        //       "<p>" + "Author:" + author + "</p>" +
        //     "</div>" +
        //     '<div class="reply-box">' +
        //       '<input type="hidden" class="parent_message_id" value="'+lastMessageId+'">' +
        //       '<p class="reply">' + "Reply" + "</p>" +
        //     "</div>" +
        //   "</div>"
        //   ).insertAfter('#temp');
        // }
        // else {
        //   $(".board").append(
        //     $(
        //     '<div class="box" style="margin-left: '+tabValue+'px">' +
        //       '<div class="text">' +
        //         "<p>" + message + "</p>" +
        //         "<p>" + "Author:" + author + "</p>" +
        //       "</div>" +
        //       '<div class="reply-box">' +
        //         '<input type="hidden" class="parent_message_id" value="'+lastMessageId+'">' +
        //         '<p class="reply">' + "Reply" + "</p>" +
        //       "</div>" +
        //     "</div>"
        //     )
        //   )
        // }
        // $(".show").fadeToggle();
        // $("#message-memo").val("")

          location.reload();
      }).fail(function(){
        console.log("failed");
      });
    }
  });



})
