import axios from "axios"
import { useEffect, useState } from "react"
import { MovieType } from "../types/Movie"
import { Loading } from "../components/Loading"
import { MovieCard } from "../components/MovieCard"


const apiKey = import.meta.env.VITE_API_KEY
const moviesUrl = import.meta.env.VITE_API

export const Home = () => {
    const [movies, setMovies] = useState<MovieType[]>([])
    const [loading, setLoading] = useState(true)

    const getTopRatedMovies = async (url: string) => {
        try {
            const response = await axios.get(`${url}`, {
                headers: {
                    Authorization: `${apiKey}`
                }
            })
            setMovies(response.data.results)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }

    }

    useEffect(() => {
        const urlPopularFilms = `${moviesUrl}/top_rated`
        getTopRatedMovies(urlPopularFilms)
    }, [])

    return (
        <div className="bg-background2 overflow-x-hidden">
            <h2
                className="text-5xl font-bebas text-center py-8"
            >Melhores filmes:</h2>

            {loading &&
                <div className="h-screen w-full bg-background2 flex items-center justify-center"><Loading /></div>
            }

            {!loading && movies.length > 0 &&
                <div className=" flex w-screen justify-center px-6 pb-8">
                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 lg:grid-cols-5">
                        {movies.map((item) => (
                            <div key={item.id} className="max-w-56">

                                <MovieCard movie={item} />
                            </div>
                        ))}
                    </div>
                </div>

            }

            {!loading && movies.length === 0 &&
                <p>Não há filmes para exibir</p>
            }

        </div>
    )
}