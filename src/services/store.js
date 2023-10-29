// Importing necessary utilities from Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";
// Importing the API slice for articles
import { articleApi } from "./article";

// Configuring the Redux store
export const store = configureStore({
  // Adding reducers - in this case, only the reducer from the article API slice
  reducer: {
    [articleApi.reducerPath]: articleApi.reducer
  },
  // Adding middleware - the default ones, and the middleware from the article API slice
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware)
});
