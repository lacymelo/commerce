import Leaflet from 'leaflet';
import mapMarkerImg from '../assets/map-marker.svg';

const MapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [0, -20]
});

export default MapIcon;