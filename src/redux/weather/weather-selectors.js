export const selectWeather = (state) => state.data.itemsNew;
export const selectWeatherLoading = (state) => state.data.isLoading;
export const currentCity = (state) => state.data.city;
export const currentError = (state) => state.data.error;

export const userLocation = (state) => state.user.location;
export const userElectCity = (state) => state.user.selectedCity;

// old
export const selectAllWeather = (state) => state.data.items;
