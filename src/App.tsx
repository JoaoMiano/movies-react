import { Footer } from "./components/Footer.tsx"
import { NavBar } from "./components/NavBar"
import { MenuOpenProvider } from "./context/MenuOpenContext.tsx"
import { SearchProvider } from "./context/SearchContext.tsx"
import { RoutList } from "./routes/RoutesList.tsx"

function App() {

  return (
    <div className=" w-full">
      <MenuOpenProvider>
        <NavBar />
      </MenuOpenProvider>
      <SearchProvider>
        <RoutList />
      </SearchProvider>


      <Footer />
    </div>

  )
}

export default App
