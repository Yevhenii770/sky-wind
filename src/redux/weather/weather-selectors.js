export const selectAllWeather = (state) => state.data.items;
export const selectWeatherLoading = (state) => state.data.isLoading;
export const currentCity = (state) => state.data.city;
export const userLocation = (state) => state.user.location;
