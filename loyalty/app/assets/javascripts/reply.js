$(document).on("ready", function(){

  $(".reply-box").on("click", function(e){
    e.stopPropagation;

    $('html, body').animate({
        scrollTop: $("#nav").offset().top
    });
    var message = $(this).siblings(".text").html()
    var parentId = $(this).children().val();
    
    $("#master").attr("value", parentId);

    $(".new-message").html("Reply to " + message)
    $(".insert").html("<div class='cancel'>" + "Cancel" + "</div>")
  });

  $(".insert").on("click", function(e){
    e.stopPropagation;
    location.reload();
  })
});
