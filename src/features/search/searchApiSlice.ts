import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export interface SearchApiResponse {
  collection: {
    version: string
    href: string
    items: SearchItem[]
    metadata: {
      total_hits: number
    }
  }
}

export interface SearchItem {
  href: string
  data: SearchItemData[]
  links: SearchItemLink[]
}

interface SearchItemData {
  center: string
  title: string
  nasa_id: string
  date_created: string
  keywords: string[]
  media_type: string
  description_508: string
  secondary_creator: string
  description: string
}

interface SearchItemLink {
  href: string
  rel: string
  render: string
}

export const searchApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://images-api.nasa.gov" }),
  reducerPath: "searchApi",
  endpoints: build => ({
    getSearch: build.query<SearchApiResponse, string>({
      query: (searchParam = "") => `search?q=${searchParam}`,
    }),
  }),
})

export const { useLazyGetSearchQuery } = searchApiSlice
