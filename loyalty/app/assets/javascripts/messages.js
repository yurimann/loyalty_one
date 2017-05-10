$(document).on("ready", function(){

  $('.submit').on('click', function(e){
    e.preventDefault();


    if ($('#message_memo').val() === "") {
      alert("Sorry, message cannot be blank")
    }
    else {
      var authToken = {"auth_token": $(this).children('input[type=hidden]').val()}
      $.ajax({
        url: "/messages",
        method: "POST",
        data: {"message":
                { authToken,
                  "memo": $('#message_memo').val(),
                  "user_id": userId
                }
             },
        dataType: "JSON"

      }).done(function(data){
          console.log(data);
          $(".board").prepend('<div class="box">' + $('#message_memo').val() + '</div>');
          $('#message_memo').val('');
      }).fail(function(){
        console.log("failed");
      });
    }
  });

})
