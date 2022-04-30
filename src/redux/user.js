import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    users: {
      total_count: 0,
      items: [],
    },
    users_per_page: 5,
    isLoading: false,
    page: 1,
    search_name: "",
  },
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setPaginationPage: (state, action) => {
      state.page = action.payload.page;
    },
    setUsersPerPage: (state, action) => {
      state.users_per_page = action.payload.users_per_page;
    },
    setUserResults: (state, action) => {
      state.users = action.payload.users;
    },
    setSearchName: (state, action) => {
      state.search_name = action.payload.search_name;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setUserResults,
  setIsLoading,
  setPaginationPage,
  setUsersPerPage,
  setSearchName,
} = userSlice.actions;

export default userSlice.reducer;
