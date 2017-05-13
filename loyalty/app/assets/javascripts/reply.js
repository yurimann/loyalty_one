$(document).on("ready", function(){

  $(".reply-box").on("click", function(e){
    e.stopPropagation;
    var replyForm = $(this).siblings('.show');
    var activeReply = replyForm.find('textarea');
    replyForm.toggleClass("form-modal");
    activeReply.attr('id', 'reply-value');
  });

  $(".submit-reply").on("click", function(e){
    e.preventDefault();

    var parentId = $(this).parent().siblings($('.parent_message_id')).val();
    let temp = $(this).parent();
    let temp2 = temp.parent();
    var replyBox = temp2.parent();

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

          // var close = $(this).parent().eq(2)
          let parentId = `<input type="hidden" class="parent_message_id" value="${lastMessageId + 1}">`;
          
          $('<div class="box2">' +
              parentId +
              '<div class="text">' +
                $("#reply-value").val() +
              '</div>'  +
              '<div class="reply-box">' +
                  '<p class="reply">' + 'Reply' + '</p>' +
              '</div>' +
            '</div>'
          ).insertAfter(replyBox);

          $("#reply-value").val("");
          $(".show").fadeOut();
          lastMessageId++
      }).fail(function(){
        // console.log("failed");
      });
    }
  });
});
