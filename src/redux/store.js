import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { weatherReducer, userReducer } from './weather/weather-slice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];
const authPersistConfig = {
  key: 'user',
  storage,
};

export const store = configureStore({
  reducer: {
    data: weatherReducer,
    user: persistReducer(authPersistConfig, userReducer),
  },
  middleware,
});

export const persistor = persistStore(store);
