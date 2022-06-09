import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const PortfolioSlice = createApi({
  reducerPath: 'PortfolioSlice',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v1' }),
  endpoints: (builder) => ({
    getPortfolioData: builder.query({
      query: () => '/portfolio',
    }),
  }),
});

export const { useGetPortfolioDataQuery } = PortfolioSlice;

export default PortfolioSlice;
