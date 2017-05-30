$(document).on("ready", function(){

  $(".search").on("click", function(){
    $.ajax({
      url: "https://www.googleapis.com/geolocation/v1/geolocate?key=" + google,
      method: "POST",
      dataType: "JSON"
    }).done(function(e){
      var latitude = e.location.lat;
      var longtitude = e.location.lng;
      console.log(latitude, longtitude);
      $("#lng").val(longtitude);
      $("#lat").val(latitude);
      reverse(latitude, longtitude);
    });

    function reverse(latitude, longtitude){
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
