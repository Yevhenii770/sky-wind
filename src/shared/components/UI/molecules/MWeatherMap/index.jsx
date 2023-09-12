import { useMemo } from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { userLocation, currentCity } from '@/redux/weather/weather-selectors';
import { ALoader } from '../../atoms/ALoader';
import { useSelector } from 'react-redux';
import './styled.scss';

export const WeatherMap = () => {
  const location = useSelector(userLocation);
  const coordinates = useSelector(currentCity);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const position = coordinates
    ? { lat: Number(coordinates.lat), lng: Number(coordinates.lon) }
    : { lat: 49.8383, lng: 24.0232 };

  const center = useMemo(
    () => ({ lat: location[0], lng: location[1] }),
    [location]
  );

  if (!isLoaded) {
    return <ALoader />;
  }

  return (
    <GoogleMap zoom={7} center={center} mapContainerClassName="google-map">
      <Marker position={position} />
    </GoogleMap>
  );
};
