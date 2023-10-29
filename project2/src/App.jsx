import "./App.css"
import Auth from "./components/auth"
import { DataProvider } from "./context/Context"
import Menu from "./components/menu"

function App() {
  return (
    <DataProvider>
      <header>
        <Menu />
      </header>
      <Auth />
      <footer>
        <a href='/about'>About</a>
        <a href='/contact'>Contact</a>
        <a href='/'>React Project</a>
      </footer>
    </DataProvider>
  )
}

export default App
