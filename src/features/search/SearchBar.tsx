import { type ChangeEvent, type FormEventHandler, useState } from "react"

interface SearchBarProps {
  fetchResults: (textInput: string) => void
}

function SearchBar({ fetchResults }: SearchBarProps) {
  const [textInput, setTextInput] = useState("")

  const handleSubmit: FormEventHandler<HTMLFormElement> | undefined = e => {
    e.preventDefault()
    fetchResults(textInput)
    setTextInput("")
  }

  const handleInput: FormEventHandler<HTMLInputElement> | undefined = (
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    setTextInput(e.target.value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={textInput} onInput={handleInput} />
        <button type="submit">Search</button>
      </form>
    </div>
  )
}

export default SearchBar
