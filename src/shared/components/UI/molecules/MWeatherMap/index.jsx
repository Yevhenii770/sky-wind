import React, { useRef } from 'react';

import {
  MapContainer,
  ImageOverlay,
  TileLayer,
  LayerGroup,
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

  // Установите координаты и границы изображения
  const imageBounds = [
    [51.38494, -0.351468], // Нижний левый угол
    [51.672343, 0.148271], // Верхний правый угол
  ];
  const imageOpacity = 0.7;

  return (
    <MapContainer
      mapContainerClassName="google-map"
      center={userPosition}
      zoom={8}
      placeholder={<MapPlaceholder />}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      <LayerGroup>
        <ImageOverlay
          url="../../../photos/fox.png"
          bounds={imageBounds}
          opacity={imageOpacity}
        />
      </LayerGroup>
    </MapContainer>
  );
};
