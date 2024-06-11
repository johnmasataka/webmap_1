'use strict';

console.log('Loaded map.js');

mapboxgl.accessToken = 'pk.eyJ1Ijoiam9obm1hc2F0YWthIiwiYSI6ImNseDl0ZnByMzJ1cnQyam9lbnB5ajQ3d3EifQ.vDNx6tuvH4CxRBRu-Tt0Tg';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v9',
    center: [-73.93324, 40.80877],
    zoom: 14
});
