$(document).on("ready", function(){

  $(".reply-box").on("click", function(e){
    e.stopPropagation;
    $(".show").toggleClass("form-modal");
    let parentId = $(this).children().val()
    $("#master").attr("value", parentId);
    console.log(parentId);
    // console.log($("#master").attr("value", parentId));
  });

});
