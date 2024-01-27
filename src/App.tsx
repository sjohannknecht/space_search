import "./App.css"
import issUrl from "./assets/img/ISS_spacecraft_model_1-600.png"
import { createSearchParams, Link, Outlet, useNavigate } from "react-router-dom"
import SearchBar from "./features/search/SearchBar"

const App = () => {
  const navigate = useNavigate()

  const fetchResults = (textInput: string) => {
    if (textInput !== "") {
      navigate({
        pathname: "/search",
        search: createSearchParams({
          q: textInput,
        }).toString(),
      })
    }
  }

  return (
    <div className="App">
      <div className="App__Search App__Search--foreground">
        <header>
          <Link to={"/"} className="Link">
            <h1>Space Search</h1>
          </Link>
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
