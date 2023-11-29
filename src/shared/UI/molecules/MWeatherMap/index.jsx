import React, { useRef } from 'react';

import {
  MapContainer,
  ImageOverlay,
  TileLayer,
  LayerGroup,
  Marker,
} from 'react-leaflet';

import { currentCity, currentLayer } from '@/redux/weather/weather-selectors';
import { ALoader } from '../../atoms/ALoader';
import { useSelector } from 'react-redux';
import 'leaflet/dist/leaflet.css';

import './styled.scss';

export const WeatherMap = () => {
  const coordinates = useSelector(currentCity);
  const layer = useSelector(currentLayer);
  const mapRef = useRef(null);

  const lat = coordinates.lat;
  const lng = coordinates.lon;

  const userPosition = coordinates
    ? { lat: lat, lng: lng }
    : { lat: 49.8383, lng: 24.0232 };

  function MapPlaceholder() {
    return (
      <p>
        Map of London.{' '}
        <noscript>You need to enable JavaScript to see this map.</noscript>
      </p>
    );
  }

  // const imageUrl = 'path/to/your/image.png';
  const imageUrl = layer;

  // Calculate the bottom-left and top-right corners of the image overlay
  const bottomLeftCorner = [lat - 0.3, lng - 0.3]; // Adjust the values as needed
  const topRightCorner = [lat + 0.3, lng + 0.3]; // Adjust the values as needed

  // Create the imageBounds array
  const imageBounds = [bottomLeftCorner, topRightCorner];
  const imageOpacity = 0.7;

  return (
    <MapContainer
      mapContainerClassName="google-map"
      center={userPosition}
      zoom={10}
      placeholder={<MapPlaceholder />}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* <LayerGroup>
        <ImageOverlay
          url={response}
          bounds={imageBounds}
          opacity={imageOpacity}
          zIndex={10}
        />
      </LayerGroup> */}
    </MapContainer>
  );
};
