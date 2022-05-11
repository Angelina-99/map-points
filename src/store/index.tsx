import { configureStore } from '@reduxjs/toolkit';
import MapSlice from './MapSlice';

const store = configureStore({
    reducer: {
        Map: MapSlice,
    },
});
  
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;
  
  