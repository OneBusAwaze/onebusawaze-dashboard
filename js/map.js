// The following example creates complex markers to indicate troublees near
// Sydney, NSW, Australia. Note that the anchor is set to
// (0,32) to correspond to the base of the flagpole.

function initialize() {
    var mapOptions = {
        zoom: 10,
        center: new google.maps.LatLng(47.643770, -122.325606)
    }
    var map = new google.maps.Map(document.getElementById('map-canvas'),
                                  mapOptions);
    map.setOptions({ styles: styles });

    //add transit layer
    var transitLayer = new google.maps.TransitLayer();
    transitLayer.setMap(map);

    //add traffic layer
    var trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(map);

    //var transitTrouble = [
    //['5', 47.662271, -122.348265, 4],
    //['297', 47.643307, -122.204757, 5],
    //['72', 47.655796, -122.319426, 3],
    //['512', 47.784952, -122.316653, 2],
    //['512', 47.821575, -122.278228, 1]
    //];

    setMarkers(map, transitTrouble);
}

function setMarkers(map, locations) {
    // Add markers to the map

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
        anchor: new google.maps.Point(0, 32)
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
    for (var i = 0; i < locations.length; i++) {
        var trouble = locations[i];
        var myLatLng = new google.maps.LatLng(trouble[1], trouble[2]);
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            icon: image,
            shape: shape,
            title: trouble[0],
            zIndex: trouble[3]
        });
    }
}

google.maps.event.addDomListener(window, 'load', initialize);