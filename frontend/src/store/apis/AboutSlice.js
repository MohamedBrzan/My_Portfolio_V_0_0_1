import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const AboutSlice = createApi({
  reducerPath: 'AboutSlice',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v1' }),
  endpoints: (builder) => ({
    getAboutData: builder.query({
      query: () => '/about',
    }),
  }),
});

export const { useGetAboutDataQuery } = AboutSlice;

export default AboutSlice;
