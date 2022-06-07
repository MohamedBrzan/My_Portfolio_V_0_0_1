import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const ServiceSlice = createApi({
  reducerPath: 'ServicesSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1/about/' }),
  endpoints: (builder) => ({
    getServiceDetails: builder.query({
      query: (id) => `${id}`,
    }),
    editService: builder.mutation({
      query: (service) => ({
        url: `${service.id}`,
        method: 'PUT',
        body: service,
      }),
    }),
  }),
});

export const { useGetServiceDetailsQuery, useEditServiceMutation } =
  ServiceSlice;

export default ServiceSlice;
