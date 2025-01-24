import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home.tsx"
import { Movie } from '../pages/Movie.tsx'
import { Search } from '../pages/Search.tsx'
import App from "../App.tsx"
import ScrollToTop from "../components/ScrollToTop.tsx"

export const RoutList = () => {
  return (
    <section>
      <ScrollToTop />
      <Routes>
        <Route element={<App />} />
        <Route path='/' element={<Home />} />
        <Route path='/movie/:id' element={<Movie />} />
        <Route path='/search' element={<Search />} />

      </Routes>
    </section>
  )
}