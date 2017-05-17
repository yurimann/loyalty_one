$(document).on("ready", function(){

  $(".reply-box").on("click", function(e){
    e.stopPropagation;
    
    $(".show").toggleClass("form-modal");
    let parentId = $(this).children().val();
    let temp = $(this).parent();
    let tabValue = parseInt(temp.css('margin-left'), 10);
    let addWidth = ($(window).width() * .05);
    $("#master").attr("value", parentId);
    $("#tab").attr("value", tabValue + addWidth);
    $('<div id="temp">' + "</div>").insertAfter(temp)
  });

});
