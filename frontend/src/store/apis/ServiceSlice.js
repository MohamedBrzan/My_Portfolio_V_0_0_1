import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const ServiceSlice = createApi({
  reducerPath: 'ServicesSlice',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v1/about/' }),
  tagTypes: ['aboutId'],
  refetchOnMountOrArgChange: ['aboutId'],
  endpoints: (builder) => ({
    getServiceDetails: builder.query({
      query: (id) => `${id}`,
      providesTags: ['aboutId'],
    }),
  }),
});

export const { useGetServiceDetailsQuery } = ServiceSlice;

export default ServiceSlice;
