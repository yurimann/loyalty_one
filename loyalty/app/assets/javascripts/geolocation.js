$(document).on("ready", function(){

  $(".search").on("click", function(){
    $.ajax({
      // This gets the coordinates of the current location of the user
      url: "https://www.googleapis.com/geolocation/v1/geolocate?key=" + google,
      method: "POST",
      dataType: "JSON"
    }).done(function(e){
      var latitude = e.location.lat;
      var longtitude = e.location.lng;
      console.log(latitude, longtitude);
      // Values are assigned to a hidden input on the form
      $("#lng").val(longtitude);
      $("#lat").val(latitude);
      reverse(latitude, longtitude);
    });

    function reverse(latitude, longtitude){
      // based on the coordinates returned by the ajax call, this would look for the city of those coordinates
      $.ajax({
        url: "https://maps.googleapis.com/maps/api/geocode/json?latlng="+latitude+","+ longtitude+"",
        method: "POST",
        data:"",
        dataType: "JSON"
      }).done(function(e){
        var city = e.results[0].address_components[3].long_name;
        console.log(city);
        $("#user_location").val(city)
      })
    }
  })
})
