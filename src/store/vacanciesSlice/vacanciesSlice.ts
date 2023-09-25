import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL, VACANCY_URL } from "../../utils/constants";
import { TVacancy } from "../../utils/types";

type TVacanciesState = {
  isLoading: boolean;
  vacancies: Array<TVacancy>;
  error: string;
};

const initialState: TVacanciesState = {
  isLoading: false,
  error: "",
  vacancies: [],
};

export const fetchVacancies = createAsyncThunk("fetch/vacancies", async () => {
  const response = await fetch(`${API_URL}${VACANCY_URL}`);
  const vacancies = await response.json();
  return vacancies;
});

const vacanciesSlice = createSlice({
  name: "vacancies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchVacancies.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchVacancies.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.vacancies = [...payload.vacancies];
    });
    builder.addCase(fetchVacancies.rejected, (state) => {
      state.isLoading = false;
      state.error = "Возникла ошибка при загрузке вакансий";
    });
  },
});

const vacanciesReducer = vacanciesSlice.reducer;

export default vacanciesReducer;
