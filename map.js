'use strict'        // let the browser know we're serious

// debug statement letting us know the file is loaded
console.log('Loaded map.js')

// your mapbox token
mapboxgl.accessToken = 'pk.eyJ1Ijoiam9obm1hc2F0YWthIiwiYSI6ImNseDl0ZnByMzJ1cnQyam9lbnB5ajQ3d3EifQ.vDNx6tuvH4CxRBRu-Tt0Tg'

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v9',
    center: [-73.93324, 40.80877],
    zoom: 14
});