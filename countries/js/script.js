      // Regular map
      function regular_mapCancon() {
        var var_location = new google.maps.LatLng(32.601364, 35.283235);

        var var_mapoptions = {
            center: var_location,
            zoom: 14
        };

        var var_map = new google.maps.Map(document.getElementById("map-container1"),
            var_mapoptions);

        var var_marker = new google.maps.Marker({
            position: var_location,
            map: var_map,
            title: "Afula"
        });
    }

    // Initialize maps
    google.maps.event.addDomListener(window, 'load',regular_mapCancon);


    function regular_mapMexico() {
        var var_location = new google.maps.LatLng(32.601364, 35.283235);

        var var_mapoptions = {
            center: var_location,
            zoom: 14
        };

        var var_map = new google.maps.Map(document.getElementById("map-container2"),
            var_mapoptions);

        var var_marker = new google.maps.Marker({
            position: var_location,
            map: var_map,
            title: "Afula"
        });
    }

    // Initialize maps
    google.maps.event.addDomListener(window, 'load', regular_mapMexico);
