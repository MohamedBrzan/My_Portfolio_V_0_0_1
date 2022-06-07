import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const AboutSlice = createApi({
  reducerPath: 'AboutSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1' }),
  // tagTypes: ['About'],
  endpoints: (builder) => ({
    getAboutData: builder.query({
      query: () => '/about',
      // providesTags: ['About'],
    }),
    getAboutById: builder.query({
      query: (id) => `/about/${id}`,
      // invalidatesTags: ['About'],
    }),
  }),
});

export const { useGetAboutDataQuery, useGetAboutByIdQuery } = AboutSlice;

export default AboutSlice;
