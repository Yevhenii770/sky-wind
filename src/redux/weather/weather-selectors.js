export const selectWeather = (state) => state.data.items;
export const selectWeatherLoading = (state) => state.data.isLoading;
export const currentCity = (state) => state.data.city;
export const currentError = (state) => state.data.error;
export const currentLayer = (state) => state.data.layer;

export const userLocation = (state) => state.user.location;
export const userElectCity = (state) => state.user.selectedCity;
