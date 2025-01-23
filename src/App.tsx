import { Footer } from "./components/Footer.tsx"
import { NavBar } from "./components/NavBar"
import { RoutList } from "./routes/RoutesList.tsx"

function App() {

  return (
    <div className="container mx-auto flex-col">
      <NavBar />

      <RoutList/>

      <Footer/>
    </div>

  )
}

export default App
