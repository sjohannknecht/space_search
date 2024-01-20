import "./App.css"
import Search from "./features/search/Search"
import issUrl from "./assets/img/ISS_spacecraft_model_1.png"

const App = () => {
  return (
    <div className="App">
      <Search className="App__Search--foreground" />
      <img src={issUrl} alt="ISS" className="App__bg-img-iss"></img>
    </div>
  )
}

export default App
