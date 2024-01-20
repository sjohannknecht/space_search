import { useLazyGetSearchResultQuery } from "./searchApiSlice"
import "./Search.css"
import SearchResult from "./SearchResult"
import SearchBar from "./SearchBar"

interface SearchInterface {
  className: string
}

function Search({ className }: SearchInterface) {
  const [trigger, result] = useLazyGetSearchResultQuery()

  const fetchResults = (textInput: string) => {
    if (textInput !== "") {
      trigger(textInput)
    }
  }

  console.log(result)

  return (
    <div className={`Search ${className}`}>
      <header>
        <h1>Space Search</h1>
        <SearchBar fetchResults={fetchResults}></SearchBar>
        <p>This page is querying the NASA Image and Video Library API</p>
      </header>
      {!result.isUninitialized && <SearchResult result={result}></SearchResult>}
    </div>
  )
}

export default Search
