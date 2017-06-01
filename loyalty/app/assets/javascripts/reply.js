$(document).on("ready", function(){

  $(".reply-box").on("click", function(e){
    e.stopPropagation;
    // will re-center the page on the form on top
    $('html, body').animate({
        scrollTop: $("#nav").offset().top
    });
    // Gets the text of the message being replied to
    var message = $(this).siblings(".text").html()
    // Gets the ID of the message being replied to
    var parentId = $(this).children().val();

    $("#master").attr("value", parentId);

    $(".new-message").html("Reply to " + message)
    $(".insert").html("<div class='cancel'>" + "Cancel" + "</div>")
  });
  // When cancel is pressed, the page is reloaded
  $(".insert").on("click", function(e){
    e.stopPropagation;
    location.reload();
  })
});
