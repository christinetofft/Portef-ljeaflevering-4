let geojson;

const map = L.map('map').setView([62, 15], 4);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 5,
    minZoom: 2,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// ---------------------------
// Map colouring functionality
// ---------------------------
/* Function to check if country is sweden, to apply different color */
function getCountry(country) {
    return country === 'Sweden' ? 'green' :
           'pink';
}

/* Add a basic color to the entire map */
function mapStyle(feature) {
    return {
        fillColor: getCountry(feature.properties.Country),
        color: '',
        weight: 1,
        fillOpacity: 0.4,
    }
}

/* Function to highlight a country on mouseover */
function highlightCountry(element) {
    let mapLayer = element.target;

    mapLayer.setStyle({
        weight: 4,
        fillOpacity: 0.8
    });

    genreInfoBox.update(mapLayer.feature.properties);

    mapLayer.bringToFront();
}

/* Function to remove highlight on mouseout */
function resetHighlight(element) {
    geojson.resetStyle(element.target);
    genreInfoBox.update();
}

/* Function to zoom / center camera on clicked country */
function zoomToHighlight(element) {
    map.fitBounds(element.target.getBounds());
}

/* Function to add event listeners to make above highlight / zoom functions work */
function onEachFeature(feature, mapLayer) {
    mapLayer.on({
        mouseover: highlightCountry,
        mouseout: resetHighlight,
        click: zoomToHighlight
    });
}

geojson = L.geoJson(countryData, {
    style: mapStyle,
    onEachFeature: onEachFeature
}).addTo(map);

// ----------------------
// Info box functionality base functionality
// ----------------------
let genreInfoBox = L.control();

genreInfoBox.onAdd = function() {
    this._div = L.DomUtil.create('div', 'genre-info-box'); // Makes a div element with class "info"
    this.update();
    return this._div;
};

/* Functionality to update info box */
genreInfoBox.update = function(props) {
    this._div.innerHTML = '<h4>Most popular music genre</h4>' + (props ?
        '<b>' + props.Country + '</b><br/>' + props.favGenre
        : 'Hover over a country');
};

genreInfoBox.addTo(map);