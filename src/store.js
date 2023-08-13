import { configureStore } from "@reduxjs/toolkit";
import ipInfo from "./features/ipInfo";

export const store = configureStore({
  reducer: {
    ipInfo,
  },
});
