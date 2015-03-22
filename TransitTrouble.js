/**
 * Data for the markers consisting of a name, a LatLng and a zIndex for
 * the order in which these markers should display on top of each
 * other.
 */
var transitTrouble = [
  ['5', 47.662271, -122.348265, 4],
  ['297', 47.643307, -122.204757, 5],
  ['72', 47.655796, -122.319426, 3],
  ['512', 47.784952, -122.316653, 2],
  ['512', 47.821575, -122.278228, 1]
];

var busIssuesReported = [
['5', "Full", "2013-10-15 07:30:00"],
  ['297', "Full", "2013-10-15 07:33:00"],
  ['72', "Full", "2013-10-15 07:36:00"],
  ['512', "Disabled", "2013-10-15 07:29:00"],
  ['512', "Full", "2013-10-15 07:25:00"]];

var busIssuesLast20Days = [
['5', "Full", '87'],
['15', "Full", '44'],
['550', "Full", '78'],
['72', "Full", '32'],
['76', "Full", '32'],
['512', "Full", '40'],
['511', "Full", '25'],
['33', "Disabled", '4'],
['12', "Disabled", '1'],
  ['512', "Disabled", '2']];


var styles = [
  {
    stylers: [
      { hue: "#66ffff" },
      { saturation: -20 }
    ]
  },{
    featureType: "road",
    elementType: "geometry",
    stylers: [
      { lightness: 100 },
      { visibility: "simplified" }
    ]
  },{
    featureType: "road",
    elementType: "labels",
    stylers: [
      { visibility: "off" }
    ]
  }
];

