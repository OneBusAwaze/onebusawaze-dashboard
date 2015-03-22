function initialize() {
    var mapOptions = {
        zoom: 11,
        center: new google.maps.LatLng(47.609536, -122.335193)
    }
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    //add transit layer
    var transitLayer = new google.maps.TransitLayer();
    transitLayer.setMap(map);

    //add traffic layer
    var trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(map);

    //#region Add markers to the map

    // Marker sizes are expressed as a Size of X,Y
    // where the origin of the image (0,0) is located
    // in the top left of the image.

    // Origins, anchor positions and coordinates of the marker
    // increase in the X direction to the right and in
    // the Y direction down.
    var image = {
        url: 'images/alerticon.png',
        // This marker is 20 pixels wide by 32 pixels tall.
        size: new google.maps.Size(20, 32),
        // The origin for this image is 0,0.
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at 0,32.
        anchor: new google.maps.Point(10, 16)
    };
    // Shapes define the clickable region of the icon.
    // The type defines an HTML &lt;area&gt; element 'poly' which
    // traces out a polygon as a series of X,Y points. The final
    // coordinate closes the poly by connecting to the first
    // coordinate.
    var shape = {
        coords: [1, 1, 1, 20, 18, 20, 18, 1],
        type: 'poly'
    };

    Parse.initialize("fJs3oUmiiROLCIwRUdR0zpO9YnmGJ8P5frsYStku", "gKKi8PO3xBbKM9garOk9frovdWr5dASF7lJgtvln");

    var OBAProblemReport = Parse.Object.extend("OBAProblemReport");
    var query = new Parse.Query(OBAProblemReport);
    query.greaterThan("createdAt", moment().subtract(1, 'hour').format());
    query.find({
        success: function (results) {
            console.log("# of reports: " + results.length);

            for (var i = 0; i < results.length; i++) {
                var trouble = results[i];
                var myLatLng = new google.maps.LatLng(trouble.attributes.location._latitude, trouble.attributes.location._longitude);
                var marker = new google.maps.Marker({
                    position: myLatLng,
                    map: map,
                    icon: image,
                    shape: shape
                });
            }
        },
        error: function (error) {
            alert("Error: " + error.code + " " + error.message);
        }
    });

    //#endregion
}

google.maps.event.addDomListener(window, 'load', initialize);