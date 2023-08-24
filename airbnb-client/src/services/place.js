import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const placeApi = createApi({
  reducerPath: "placeApi",
  baseQuery: fetchBaseQuery({}),
});
