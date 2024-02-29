import { configureStore } from "@reduxjs/toolkit";
import { playersApi } from "../API/playersSlice";
// TODO will need to import something from 'playersSlice'

export const store = configureStore({
  reducer: {
    playersApi: playersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(playersApi.middleware),
  // TODO willl use things imported from 'playersSlice"
});
