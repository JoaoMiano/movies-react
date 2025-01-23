import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { MovieCard } from "../components/MovieCard";
import { Loading } from "../components/Loading";
import { MovieType } from "../types/Movie";
import axios from "axios";

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

export const Search = () => {
    const [searchParams] = useSearchParams()

    const [loading, setLoading] = useState(true)
    const [movies, setMovies] = useState<MovieType[]>([])

    const query = searchParams.get('q')

    const getQueryMovies = async (url: string) => {
        try {
            const response = await axios.get(`${url}`, {
                headers: {
                    Authorization: `${apiKey}`
                }
            })
            console.log(response.data)
            setMovies(response.data.results)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }

    }

    useEffect(() => {
        const searchQueryUrl = `${searchURL}?query=${query}`
        console.log(searchQueryUrl)
        getQueryMovies(searchQueryUrl)
    }, [query])

    return (
        <div className="bg-background2 overflow-x-hidden">
            <h2
                className="text-5xl font-bebas text-center py-8"
            >Resultados para: <span>{query}</span></h2>
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