import Search from "./Components/Search"
import Info from "./Components/Info"
import IPContextProvider from "./Contexts/IPContextProvider"
import './App.css'
import Map from "./Components/Map"

function App() {
  return (
    <div className="App">
      <IPContextProvider>
        <div className="container">
          <Search/>
          <Info/>
          <Map/>
        </div>
      </IPContextProvider>
    </div>
  )
}

export default App
