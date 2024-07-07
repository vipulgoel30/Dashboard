// Third party imports
import { createSlice } from "@reduxjs/toolkit";

export enum themes {
  light = "light",
  dark = "dark",
}

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: "light", // or "dark"
  },
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload.theme;
    },
  },
});

// action creators
export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
