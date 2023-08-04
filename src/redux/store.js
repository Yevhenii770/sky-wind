import { configureStore } from '@reduxjs/toolkit';
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

const authPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['location'],
};

export const store = configureStore({
  reducer: {
    data: weatherReducer,
    user: persistReducer(authPersistConfig, userReducer),
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
