import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { MovieCard } from "../components/MovieCard";
import { Loading } from "../components/Loading";
import { MovieType } from "../types/Movie";
import axios from "axios";
import { BackButton } from "../components/BackButton";
import { SearchInput } from "../components/SearchInput";
import { SearchButton } from "../components/SearchButton";

const searchMovieURL = import.meta.env.VITE_SEARCH_MOVIE
const apiKey = import.meta.env.VITE_API_KEY

export const SearchMovie = () => {
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
            setMovies(response.data.results)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }

    }

    useEffect(() => {
        const searchQueryUrl = `${searchMovieURL}?query=${query}`

        getQueryMovies(searchQueryUrl)
    }, [query])

    return (
        <div className="bg-background2 overflow-x-hidden">

            <div className="flex flex-col pt-4 items-start w-full px-3 gap-3">
                <BackButton />
                <div className=" flex gap-2 w-full">
                    <SearchInput label='Busque por outro filme' page='movie' />
                    <SearchButton page='movie' />
                </div>

            </div>

            <h2 className="text-3xl lg:text-4xl font-bebas text-center py-8">Resultados para: <span className="text-contrast">{query}</span></h2>


            {loading &&
                <div className="h-screen w-full bg-background2 flex items-center justify-center"><Loading /></div>
            }

            {!loading && movies.length > 0 &&
                <div className=" flex flex-col w-screen items-center justify-center px-6 lg:py-8">
                    <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5">
                        {movies.map((item) => (
                            <div key={item.id} className="max-w-56">

                                <MovieCard movie={item} />
                            </div>
                        ))}
                    </div>
                    <div className="my-4">
                        <BackButton />
                    </div>
                </div>

            }

            {!loading && movies.length === 0 &&
                <p>Não há filmes para exibir</p>
            }

        </div>
    )
}