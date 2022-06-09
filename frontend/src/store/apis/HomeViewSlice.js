import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const HomeViewSlice = createApi({
  reducerPath: 'HomeViewSlice',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v1' }),

  endpoints: (builder) => ({
    getAllHomeViews: builder.query({
      query: () => '/',
    }),
  }),
});

export const { useGetAllHomeViewsQuery } = HomeViewSlice;

export default HomeViewSlice;
