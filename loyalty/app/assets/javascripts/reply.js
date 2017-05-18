$(document).on("ready", function(){

  $(".reply-box").on("click", function(e){
    e.stopPropagation;

    $('html, body').animate({
        scrollTop: $("#nav").offset().top
    });
    let message = $(this).siblings(".text").html()
    // $(".show").toggleClass("form-modal");
    let parentId = $(this).children().val();
    // let temp = $(this).parent();
    // let tabValue = parseInt(temp.css('margin-left'), 10);
    // let addWidth = ($(window).width() * .05);
    $("#master").attr("value", parentId);
    // $("#tab").attr("value", tabValue + addWidth);
    $(".new-message").html("Reply to " + message)
    $(".insert").html("<div class='cancel'>" + "Cancel" + "</div>")
  });

  $(".insert").on("click", function(e){
    e.stopPropagation;
    location.reload();
  })
});
