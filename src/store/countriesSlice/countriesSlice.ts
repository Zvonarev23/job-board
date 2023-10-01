import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL, LOCATION_URL } from "../../utils/constants";

type TCountry = Array<string>;

type TCountriesState = {
  isLoading: boolean;
  countries: TCountry;
  error: string;
};

const initialState: TCountriesState = {
  isLoading: false,
  error: "",
  countries: [],
};

export const fetchCountries = createAsyncThunk("countries/fetch", async () => {
  const response = await fetch(`${API_URL}${LOCATION_URL}`);
  const countries: TCountry = await response.json();
  return countries;
});

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCountries.fulfilled, (state, { payload }) => {
      state.countries = [...payload];
      state.isLoading = false;
    });
    builder.addCase(fetchCountries.rejected, (state) => {
      state.isLoading = false;
      state.error = "Возникла ошибка при загрузке списка городов";
    });
  },
});

const countriesReducer = countriesSlice.reducer;
export default countriesReducer;
