import { useLazyGetSearchResultQuery } from "./searchApiSlice"
import styles from "./Search.module.css"
import type { ChangeEvent, FormEventHandler } from "react"
import { useState } from "react"
import SearchResultItem from "./SearchResultItem"

function Search() {
  const [textInput, setTextInput] = useState("")

  const [trigger, result] = useLazyGetSearchResultQuery()

  const handleInput: FormEventHandler<HTMLInputElement> | undefined = (
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    setTextInput(e.target.value)
  }

  if (result.isError) {
    return (
      <div>
        <h1>There was an error!!!</h1>
      </div>
    )
  }

  if (result.isUninitialized) {
    return (
      <div>
        <h1>Search</h1>
        <form>
          <input type="text" value={textInput} onInput={handleInput} />
          <button onClick={() => trigger(textInput)}>Search</button>
        </form>
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

  return (
    <div className={styles.container}>
      {result.data.collection.items.map(element => (
        <SearchResultItem item={element}></SearchResultItem>
      ))}
    </div>
  )
}

export default Search
