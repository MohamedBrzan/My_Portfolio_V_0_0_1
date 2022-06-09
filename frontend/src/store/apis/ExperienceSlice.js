import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const ExperienceSlice = createApi({
  reducerPath: 'ExperienceSlice',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v1' }),
  endpoints: (builder) => ({
    getExperienceData: builder.query({
      query: () => '/experience',
    }),
  }),
});

export const { useGetExperienceDataQuery } = ExperienceSlice;

export default ExperienceSlice;
