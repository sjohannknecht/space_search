import SearchResultItem from "./SearchResultItem"
import "./SearchResult.css"
import { type SearchResultItemInterface } from "./searchApiSlice"

interface SearchResultProps {
  result: any
}
function SearchResult({ result }: SearchResultProps) {
  if (result.isError) {
    return <h2>There was an error!!!</h2>
  }

  if (result.isLoading || result.isFetching) {
    return <h2>Loading...</h2>
  }

  return (
    <div className="SearchResult">
      {result.data.collection.metadata.total_hits === 0 ? (
        <p>No Results</p>
      ) : (
        <>
          {result.data.collection.items.map(
            (element: SearchResultItemInterface) => (
              <SearchResultItem
                item={element}
                key={element.data[0].nasa_id}
              ></SearchResultItem>
            ),
          )}
        </>
      )}
    </div>
  )
}

export default SearchResult
