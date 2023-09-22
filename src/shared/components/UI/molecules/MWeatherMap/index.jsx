import React, { useMemo } from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { userLocation, currentCity } from '@/redux/weather/weather-selectors';
import { ALoader } from '../../atoms/ALoader';
import { useSelector } from 'react-redux';
import './styled.scss';

export const WeatherMap = () => {
  // const location = useSelector(userLocation);
  const coordinates = useSelector(currentCity);
  const mapRef = React.useRef(undefined);

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

  const position = coordinates
    ? { lat: Number(coordinates.lat), lng: Number(coordinates.lon) }
    : { lat: 49.8383, lng: 24.0232 };

  console.log(position);
  // const center = useMemo(
  //   () => ({ lat: location[0], lng: location[1] }),
  //   [location]
  // );

  const onLoad = React.useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    mapRef.current = undefined;
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerClassName="google-map"
      center={position}
      options={configMap}
      onLoad={onLoad}
      onUnmount={onUnmount}
      zoom={8}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <ALoader />
  );
};
