// initialize the map on the "map" div with a given center and zoom
var map = new L.Map('map', {
  zoom: 6,
  minZoom: 3,
});

// create a new tile layer
var tileUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
layer = new L.TileLayer(tileUrl,
{
    attribution: 'Maps © <a href=\"www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors',
    maxZoom: 18
});

// add the layer to the map
map.addLayer(layer);

var parisKievLL = [[3.155942,101.662997],[3.142402,101.699543]];
var londonParisRomeBerlinBucarest = [[3.165198,101.685989],[3.173768,101.701259],[3.164855,101.706921],[3.158171,101.710867],[3.153714,101.697827]];
var londonBrusselFrankfurtAmsterdamLondon = [
    [3.148401, 101.723049],
    [3.16177, 101.719274],
    [3.164512, 101.715499]];
var barcelonePerpignanPauBordeauxMarseilleMonaco = [
    [3.149258,101.710352],[3.147029,101.719103],[3.148229,101.723735],[3.150972,101.71996],[3.152857,101.716014],[3.152343,101.713097],[3.149258,101.710352]
];


map.fitBounds(londonBrusselFrankfurtAmsterdamLondon);



var marker3 = L.Marker.movingMarker(londonBrusselFrankfurtAmsterdamLondon,
    [2000, 2000, 2000, 2000], {autostart: true, loop: true,}).addTo(map);

marker3.loops = 0;
marker3.bindPopup('', {closeOnClick: false});

