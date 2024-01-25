import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export interface SearchResponse {
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

interface AssetResponse {
  collection: {
    version: string
    href: string
    items: AssetResponseLink[]
  }
}

interface AssetResponseLink {
  href: string
}

export const searchApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://images-api.nasa.gov" }),
  reducerPath: "searchApi",
  endpoints: build => ({
    getSearch: build.query<SearchResponse, string>({
      query: (searchParam = "") => `search?q=${searchParam}`,
    }),
    getAsset: build.query<AssetResponse, string>({
      query: (assetId = "") => `asset/${assetId}`,
    }),
  }),
})

export const { useGetSearchQuery } = searchApiSlice
