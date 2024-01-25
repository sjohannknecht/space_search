import SearchResultItem from "./SearchResultItem"
import "./SearchResult.css"
import { type SearchItem, useGetSearchQuery } from "./searchApiSlice"
import { useSearchParams } from "react-router-dom"

function SearchResult() {
  const [searchParams] = useSearchParams()
  const { data, error, isLoading, isFetching, isUninitialized } =
    useGetSearchQuery(searchParams.get("q") as string, {
      skip: !searchParams.get("q"),
    })

  if (error) {
    return <h2>There was an error!!!</h2>
  }

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>
  }

  if (isUninitialized) {
    return null
  }

  return (
    <div className="SearchResult">
      {data.collection.metadata.total_hits === 0 ? (
        <p>No Results</p>
      ) : (
        <>
          {data.collection.items.map((element: SearchItem) => (
            <SearchResultItem
              item={element}
              key={element.data[0].nasa_id}
            ></SearchResultItem>
          ))}
        </>
      )}
    </div>
  )
}

export default SearchResult
