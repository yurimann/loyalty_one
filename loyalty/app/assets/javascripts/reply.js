$(document).on("ready", function(){

  $(".reply-box").on("click", function(e){
    e.stopPropagation;
    var temp = $(this).siblings($('.show'));
    var activeReply = temp.find($('textarea'));

    $(this).siblings().toggleClass("form-modal");
    activeReply.attr('id', 'reply-value')
    console.log(parentId);
  });

  $(".submit-reply").on("click", function(e){
    e.preventDefault();
    console.log(parentId);
    if ($("#reply-value").val() === "") {
      alert("Sorry, message cannot be blank")
    }
    else {
        $.ajax({
        url: "/messages",
        method: "POST",
        data: {"message":
                {
                  "memo": $('#reply-value').val(),
                  "user_id": userId,
                  "parent_message_id": parentId
                }
             },
        dataType: "JSON"

      }).done(function(data){
          console.log(data);
          $(".board").prepend('<div class="box">' + '<div class="text">' + $("#reply").val() + '</div>'  + '</div>');
          $("#message_memo").val("");
      }).fail(function(){
        console.log("failed");
      });
    }
  });
});
