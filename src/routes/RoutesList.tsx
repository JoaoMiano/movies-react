import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home.tsx"
import { Movie } from '../pages/Movie.tsx'
import { SearchMovie } from '../pages/SearchMovie.tsx'
import App from "../App.tsx"
import ScrollToTop from "../components/ScrollToTop.tsx"
import { Series } from "../pages/Series.tsx"
import { SearchSerie } from "../pages/SearchSerie.tsx"
import { Serie } from "../pages/Serie.tsx"

export const RoutList = () => {
  return (
    <section>
      <ScrollToTop />
      <Routes>
        <Route element={<App />} />
        <Route path='/' element={<Home />} />
        <Route path='/movie/:id' element={<Movie />} />
        <Route path='/tv/:id' element={<Serie />} />
        <Route path='/search-movie' element={<SearchMovie />} />
        <Route path='/search-tv' element={<SearchSerie />} />
        <Route path='/series' element={<Series/>}/>

      </Routes>
    </section>
  )
}