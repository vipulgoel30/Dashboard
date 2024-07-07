// Third party imports
import { configureStore } from "@reduxjs/toolkit";

// User imports
import themeReducer from "./theme";

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export type IRootState = ReturnType<typeof store.getState>;

export default store;
