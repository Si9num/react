import { combineReducers, configureStore } from '@reduxjs/toolkit';
/* eslint-disable import/no-cycle */
// import reducer from './reducer';
import toolkitReducer from './reducer';

const rootReducer = combineReducers({
  toolkit: toolkitReducer,
});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
