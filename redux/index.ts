import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import noteReducer from "./noteReducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    note: noteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
