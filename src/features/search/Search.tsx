import { useLazyGetSearchResultQuery } from "./searchApiSlice"
import styles from "./Search.module.css"
import SearchResult from "./SearchResult"
import SearchBar from "./SearchBar"

function Search() {
  const [trigger, result] = useLazyGetSearchResultQuery()

  const fetchResults = (textInput: string) => {
    if (textInput !== "") {
      trigger(textInput)
    }
  }

  if (result.isError) {
    return (
      <div>
        <h1>There was an error!!!</h1>
      </div>
    )
  }

  if (result.isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  console.log(result)

  return (
    <div className={styles.container}>
      <h1>Search</h1>
      <SearchBar fetchResults={fetchResults}></SearchBar>
      {!result.isUninitialized && (
        <SearchResult collection={result.data.collection}></SearchResult>
      )}
    </div>
  )
}

export default Search
