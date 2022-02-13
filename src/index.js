import '@babel/polyfill';
import './scss/index.scss';
import iconLocation from './images/icon-location.svg';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import {
  validateIp,
  addTileLayer,
  getAddress,
  addOffset
} from './js/helpers';


const ipInput = document.querySelector('.search-bar__input');
const btn = document.querySelector('.search-bar__btn');

const ipInfo = document.getElementById('ip')
const locationInfo = document.getElementById('location')
const timezoneInfo = document.getElementById('timezone')
const ispInfo = document.getElementById('isp')

btn.addEventListener('click', getData);
ipInput.addEventListener('keydown', handleKey);

const markerIcon = L.icon({
  iconUrl: iconLocation,
  iconSize: [30, 40],
});

const mapArea = document.querySelector('.map');
const map = L.map(mapArea, {
  center: [51.505, -0.09],
  zoom: 13,
  zoomControl: false
});

addTileLayer(map);
L.marker([51.505, -0.09], {icon: markerIcon}).addTo(map);

function getData() {
  if (validateIp(ipInput.value)) {
    getAddress(ipInput.value).then((data) => setInfo(data));
  }
  clearInput();
}

function handleKey(e) {
  if (e.key === 'Enter') {
    getData();
    clearInput();
  }
}

function clearInput() {
  ipInput.value = '';
}

function setInfo(mapData) {
  const {
    ip,
    location: {
      lat,
      lng,
      region,
      country,
      timezone
    },
    isp
  } = mapData;

  ipInfo.textContent = ip;
  locationInfo.textContent = `${region}, ${country}`;
  timezoneInfo.textContent = timezone;
  ispInfo.textContent = isp;

  map.setView([lat, lng]);
  L.marker([lat, lng], {icon: markerIcon}).addTo(map);

  if (matchMedia('(max-width: 1023px)').matches) {
    addOffset(map);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  getAddress('102.22.22.1').then(setInfo);
})
