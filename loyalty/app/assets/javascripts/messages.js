$(document).on("ready",function(){
  // This call gets the user ID and the location entered
  $.ajax({
    url: "/index",
    method: "GET",
    dataType: "JSON"
  }).done(function(e){
    var parentId = e.id;
    var city = e.location;
    $("#city").val(city);
    geolocate(city);
  })

  $(".submit").on("click", function(e){
    e.preventDefault();

    var tabValue = $("#tab").val();
    var message = $("#message_memo").val();
    var lat = $("#lat").val();
    var lng = $("#lng").val();
    var weather = $("#weather").val();
    var parentId = $("#master").val();
    var city = $("#city").val();
    var userId = $("#user").val();

    if (message === "") {
      alert("Sorry, message cannot be blank")
    }
    else {
        $.ajax({
        url: "/messages",
        method: "POST",
        data: {"message":
                {
                  "memo": message,
                  "user_id": userId,
                  "parent_message_id": parentId,
                  "city": city,
                  "lat": lat,
                  "lng": lng,
                  "weather": weather
                }
             },
        dataType: "JSON"

      }).done(function(data){
        // console.log(data);
          location.reload();
      }).fail(function(){
        console.log("failed");
      });
    }
  });

  $('.view-messages').on('click', function(){
    $('.message-modal').fadeToggle();
    $('.board').fadeToggle();
    if ($(".view-messages").html() === "View all my messages"){
      $(".view-messages").html("Show all messages");
    }
    else {
      $(".view-messages").html("View all my messages")
    }
  });

  $(".close").children().on("click", function(){
    $(".show").toggleClass("form-modal");
    console.log("click");
  });

  function geolocate(location){
    // Based on the location provided, the longitude and latitude are returned by the API call
    $.ajax({
      url: "https://maps.googleapis.com/maps/api/geocode/json?address="+location+"+CANADA",
      method: "POST",
      dataType: "JSON"
    }).done(function(e){
      var lat = (e.results[0].geometry.bounds.northeast.lat);
      var lng = (e.results[0].geometry.bounds.northeast.lng);
      // The hidden values in the form are updated
      $("#lat").val(lat);
      $("#lng").val(lng);
      apixu(location);
      console.log(lat, lng);

    }).fail(function(e){
      console.log(e);
    })
  }

  function apixu(location) {
      // Call to the API to get the current weather based on the location provided
       $.ajax({
         url: "https://api.apixu.com/v1/current.json?key=" + weather + "&q=" + location,
         method: 'GET',
         dataType: 'JSON'
       }).done(function(e){
         console.log(e.current.temp_c);
        //  Hidden value is updated
         $("#weather").val(e.current.temp_c);
       }).fail(function(e){
         console.log("Failed");
       })
     }
})
