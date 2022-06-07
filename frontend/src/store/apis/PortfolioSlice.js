import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const PortfolioSlice = createApi({
  reducerPath: 'PortfolioSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1' }),
  endpoints: (builder) => ({
    getPortfolioData: builder.query({
      query: () => '/portfolio',
    }),
  }),
});

export const { useGetPortfolioDataQuery } = PortfolioSlice;

export default PortfolioSlice;
