$(document).on("ready", function(){

  var parentId;

  $(".submit").on("click", function(e){
    e.preventDefault();
    if ($("#message_memo").val() === "") {
      alert("Sorry, message cannot be blank")
    }
    else {
        $.ajax({
        url: "/messages",
        method: "POST",
        data: {"message":
                {
                  "memo": $("#message_memo").val(),
                  "user_id": userId,
                  "parent_message_id": parentId
                }
             },
        dataType: "JSON"

      }).done(function(data){
          $(".board").prepend('<div class="box">' + '<div class="text">' + $("#message_memo").val() + '</div>'  + '</div>');
          $("#message_memo").val("");
      }).fail(function(){
        // console.log("failed");
      });
    }
  });



})
