import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "./countriesSlice/countriesSlice";
import vacanciesReducer from "./vacanciesSlice/vacanciesSlice";

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
    vacancies: vacanciesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
