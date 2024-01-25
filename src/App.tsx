import "./App.css"
import issUrl from "./assets/img/ISS_spacecraft_model_1.png"
import { Outlet, useNavigate, useSearchParams } from "react-router-dom"
import SearchBar from "./features/search/SearchBar"

const App = () => {
  const navigate = useNavigate()
  const [, setSearchParams] = useSearchParams()

  const fetchResults = (textInput: string) => {
    if (textInput !== "") {
      navigate("/search")
      setSearchParams({ q: textInput })
    }
  }

  return (
    <div className="App">
      <div className="App__Search App__Search--foreground">
        <header>
          <h1>Space Search</h1>
          <SearchBar fetchResults={fetchResults}></SearchBar>
          <p>This page is querying the NASA Image and Video Library API</p>
        </header>
        <Outlet></Outlet>
      </div>
      <img src={issUrl} alt="ISS" className="App__bg-img-iss"></img>
    </div>
  )
}

export default App
