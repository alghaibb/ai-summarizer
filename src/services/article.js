// Import necessary utilities from Redux Toolkit for creating an API slice
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Create an API slice for handling articles
export const articleApi = createApi({
  // Define the path in the Redux store where this API's data will be saved
  reducerPath: 'articleApi',
  // Sets up endpoints for the API
  endpoints: (builder) => ({
    // Defines a query endpoint named 'getSummary'
    getSummary: builder.query({
      // Specifies the query function that returns the URL or endpoint string
      query: (params) => `test`
    })
  })
});
