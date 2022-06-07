import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const ContactSlice = createApi({
  reducerPath: 'ContactSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1' }),
  endpoints: (builder) => ({
    getContactData: builder.query({
      query: () => '/contact',
    }),
  }),
});

export const { useGetContactDataQuery } = ContactSlice;

export default ContactSlice;
