import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export interface SearchResultApiResponseInterface {
  collection: SearchResultCollectionInterface
}

interface SearchResultCollectionInterface {
  version: string
  href: string
  items: SearchResultItemInterface[]
  metadata: MetaData
}

interface MetaData {
  total_hits: number
}

export interface SearchResultItemInterface {
  href: string
  data: SearchResultItemDataInterface[]
  links: SearchResultItemLinkInterface[]
}

interface SearchResultItemDataInterface {
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

interface SearchResultItemLinkInterface {
  href: string
  rel: string
  render: string
}

export const searchApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://images-api.nasa.gov" }),
  reducerPath: "searchResultApi",
  endpoints: build => ({
    getSearchResult: build.query<SearchResultApiResponseInterface, string>({
      query: (searchParam = "") => `search?q=${searchParam}`,
    }),
  }),
})

export const { useLazyGetSearchResultQuery } = searchApiSlice
