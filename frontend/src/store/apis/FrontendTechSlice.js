import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const FrontendTechSlice = createApi({
  reducerPath: 'FrontendTechsSlice',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v1' }),
  // tagTypes: ['About'],
  endpoints: (builder) => ({
    getAllFrontendTechs: builder.query({
      query: (id) => `/about/${id}/frontend/tech`,
    }),

    getFrontendTechById: builder.query({
      query: (id) => `${id}`,
    }),

    updateFrontendTech: builder.mutation({
      query: (data) => ({
        url: `/about/${data.aboutId}/frontend/tech`,
        method: 'PUT',
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllFrontendTechsQuery,
  useGetFrontendTechByIdQuery,
  useUpdateFrontendTechMutation,
} = FrontendTechSlice;

export default FrontendTechSlice;
