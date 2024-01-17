import type { SearchResultCollectionInterface } from "./searchApiSlice"
import SearchResultItem from "./SearchResultItem"

interface SearchResultProps {
  collection: SearchResultCollectionInterface
}
function SearchResult({ collection }: SearchResultProps) {
  return (
    <div>
      {collection.metadata.total_hits === 0 ? (
        <p>No Results</p>
      ) : (
        collection.items.map(element => (
          <SearchResultItem item={element}></SearchResultItem>
        ))
      )}
    </div>
  )
}

export default SearchResult
