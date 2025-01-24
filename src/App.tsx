import { Analytics } from "@vercel/analytics/next"
import { Footer } from "./components/Footer.tsx"
import { NavBar } from "./components/NavBar"
import { RoutList } from "./routes/RoutesList.tsx"

function App() {

  return (
    <div className="container mx-auto flex-col">
      <Analytics/>
      <NavBar />

      <RoutList/>

      <Footer/>
    </div>

  )
}

export default App
