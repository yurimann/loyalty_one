$(document).on('ready', function(){

  $.ajax({
    url: '/',
    method: 'GET',
    dataType: 'JSON'
  }).done(function(data){

  }).fail(function(data){
  
  });

  $('.edit-link').on('click', function(){
    $('.edit-modal').fadeToggle();
  });

  $('.view-messages').on('click', function(){
    $('.message-modal').fadeToggle();
  });
})
