import { type ChangeEvent, type FormEventHandler, useState } from "react"
import "./SearchBar.css"

interface SearchBarProps {
  fetchResults: (textInput: string) => void
}

function SearchBar({ fetchResults }: SearchBarProps) {
  const [textInput, setTextInput] = useState("")

  const handleSubmit: FormEventHandler<HTMLFormElement> | undefined = e => {
    e.preventDefault()
    fetchResults(textInput)
  }

  const handleInput: FormEventHandler<HTMLInputElement> | undefined = (
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    setTextInput(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit} className="SearchBar">
      <input
        type="text"
        value={textInput}
        onInput={handleInput}
        className="SearchBar__input SearchBar__item"
      />
      <button
        type="submit"
        className="SearchBar__item SearchBar__item--pointer"
      >
        Search
      </button>
    </form>
  )
}

export default SearchBar
