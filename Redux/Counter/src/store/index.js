import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import privacyslice from "./privacy";

const counterstore = configureStore({
  reducer: { counter: counterSlice.reducer, privacy: privacyslice.reducer },
});

export default counterstore;
