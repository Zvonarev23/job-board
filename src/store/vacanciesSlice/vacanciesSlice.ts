import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL, VACANCY_URL } from "../../utils/constants";
import { TVacancy } from "../../utils/types";

type TPagination = {
  currentPage: number;
  totalPages: number;
  totalVacancies: number;
};

type TVacanciesState = {
  isLoading: boolean;
  error: string;
  vacancies: Array<TVacancy>;
  pagination: TPagination | null;
};

const initialState: TVacanciesState = {
  isLoading: false,
  error: "",
  vacancies: [],
  pagination: null,
};

export const fetchVacancies = createAsyncThunk(
  "fetch/vacancies",
  async (currentPage: number) => {
    const response = await fetch(
      `${API_URL}${VACANCY_URL}?page=${currentPage}`
    );
    const vacancies = await response.json();
    return vacancies;
  }
);

export const fetchFilteredVacancies = createAsyncThunk(
  "fetch/filteredVacancies",
  async (url: string) => {
    const response = await fetch(url);
    const vacancies = await response.json();
    return vacancies;
  }
);

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
      state.vacancies = [...state.vacancies, ...payload.vacancies];
      state.pagination = { ...payload.pagination };
    });
    builder.addCase(fetchVacancies.rejected, (state) => {
      state.isLoading = false;
      state.error = "Возникла ошибка при загрузке вакансий";
    });
    builder.addCase(fetchFilteredVacancies.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchFilteredVacancies.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.vacancies = [...payload.vacancies];
    });
    builder.addCase(fetchFilteredVacancies.rejected, (state) => {
      state.isLoading = false;
      state.error = "Возникла ошибка при загрузке вакансий";
    });
  },
});

const vacanciesReducer = vacanciesSlice.reducer;

export default vacanciesReducer;
