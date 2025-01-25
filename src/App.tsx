import { Footer } from "./components/Footer.tsx"
import { NavBar } from "./components/NavBar"
import { MenuOpenProvider } from "./context/MenuOpenContext.tsx"
import { RoutList } from "./routes/RoutesList.tsx"

function App() {

  return (
    <div className="container mx-auto flex-col">
      <MenuOpenProvider>
        <NavBar />
      </MenuOpenProvider>

      <RoutList/>

      <Footer/>
    </div>

  )
}

export default App
