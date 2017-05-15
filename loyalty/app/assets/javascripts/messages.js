$(document).on("ready", function(){



  $(".new-message").on("click", function(e){
    $(".show").toggleClass("form-modal");
  });

  $(".submit").on("click", function sumbit(e){
    e.preventDefault();

    var parentId = $("#master").val()
    console.log(parentId);

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
          $("#message_memo").val("");
          location.reload();
      }).fail(function(){
        // console.log("failed");
      });
    }
  });



})
