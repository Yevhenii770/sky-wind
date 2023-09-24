import React, { useCallback, useEffect, useRef } from 'react';
import { GoogleMap, useLoadScript, OverlayView } from '@react-google-maps/api';
import { currentCity } from '@/redux/weather/weather-selectors';
import { ALoader } from '../../atoms/ALoader';
import { useSelector } from 'react-redux';
import { currentLayer } from '@/redux/weather/weather-selectors';
import './styled.scss';

export const WeatherMap = () => {
  const coordinates = useSelector(currentCity);
  const mapRef = React.useRef(undefined);
  console.log(currentLayer);
  const configMap = {
    panControl: true,
    ZoonControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    clickableIcons: false,
    keyboardShortcuts: false,
    scrollwheel: false,
    disableDoubleClickZoom: false,
    fullscreencontrol: false,
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const userPosition = coordinates
    ? { lat: Number(coordinates.lat), lng: Number(coordinates.lon) }
    : { lat: 49.8383, lng: 24.0232 };

  const onLoad = React.useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    mapRef.current = undefined;
  }, []);

  ////
  // Функция для отображения вашего PNG слоя на карте
  const renderOverlay = useCallback((canvas, projection) => {
    const div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.width = '100%';
    div.style.height = '100%';

    // Добавьте ваш PNG слой в div
    const img = document.createElement(currentLayer);
    img.src = '/path/to/your/image.png'; // Замените на путь к вашему изображению
    img.style.width = '100%';
    img.style.height = '100%';
    div.appendChild(img);

    // Разместите div на карте
    const position = projection.fromLatLngToDivPixel(position);
    div.style.left = `${position.x}px`;
    div.style.top = `${position.y}px`;

    canvas.appendChild(div);
  }, []);
  ////

  return isLoaded ? (
    <GoogleMap
      mapContainerClassName="google-map"
      center={userPosition}
      options={configMap}
      onLoad={onLoad}
      onUnmount={onUnmount}
      zoom={8}
    >
      {/* Child components, such as markers, info windows, etc. */}
      {/* <OverlayView
        position={position}
        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        getPixelPositionOffset={(width, height) => ({
          x: -width / 2,
          y: -height,
        })}
        bounds={false}
      >
        {renderOverlay}
      </OverlayView> */}
    </GoogleMap>
  ) : (
    <ALoader />
  );
};
