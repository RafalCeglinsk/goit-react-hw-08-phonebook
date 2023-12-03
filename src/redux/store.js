import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './reducers/contacts/contactSlice';
import { filterReducer } from './reducers/contacts/filterSlice';
import { authReducer } from './reducers/auth/authSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const authConfig = {
  key: 'auth',
  storage,
};

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
    auth: persistReducer(authConfig, authReducer),
  },
});

export const persistor = persistStore(store);
