import L from 'leaflet';

export function addTileLayer(map) {
  L.tileLayer(
    'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGluZGVuYmVyZ2FubmllIiwiYSI6ImNrdnpzNGwzMmF5anYycHF3NWp2cW9kamQifQ.6Sr-bttHAqrAXpsh8ui00A',
    {
      attribution: `Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
  Coded by <a href="#">Annie Hartmann</a>.`,
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
    },
  ).addTo(map);
}
