// Import necessary utilities from Redux Toolkit for creating an API slice
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const rapidApiKey = import.meta.env.VITE_RAPID_API_SUM_KEY;

// Create an API slice for handling articles
export const articleApi = createApi({

  // Define the path in the Redux store where this API's data will be saved
  reducerPath: 'articleApi',

  // Set up the base query configuration using `fetchBaseQuery` utility from Redux Toolkit
  baseQuery: fetchBaseQuery({
    
    // Specify the base URL for all API requests
    baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',

    // Function to prepare and modify the headers before sending the request
    prepareHeaders: (headers) => {
      
      // Set the 'X-RapidAPI-Key' header with the API key for authentication
      headers.set('X-RapidAPI-Key', rapidApiKey);
      
      // Set the 'X-RapidAPI-Host' header with the host information
      headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');

      return headers;
    }
  }),

  // Sets up endpoints for the API
  endpoints: (builder) => ({

    // Defines a query endpoint named 'getSummary'
    getSummary: builder.query({

      // Specifies the query function that returns the URL or endpoint string
      query: (params) => `test`
    })
  })
});
