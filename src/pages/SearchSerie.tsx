import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Loading } from "../components/Loading";
import axios from "axios";
import { SerieType } from "../types/Serie";
import { SerieCard } from "../components/SerieCard";
import { BackButton } from "../components/BackButton";
import { SearchInput } from "../components/SearchInput";
import { SearchButton } from "../components/SearchButton";

const searchTvURL = import.meta.env.VITE_SEARCH_TV
const apiKey = import.meta.env.VITE_API_KEY

export const SearchSerie = () => {
    const [searchParams] = useSearchParams()

    const [loading, setLoading] = useState(true)
    const [series, setSeries] = useState<SerieType[]>([])

    const query = searchParams.get('q')

    const getQueryMovies = async (url: string) => {
        try {
            const response = await axios.get(`${url}`, {
                headers: {
                    Authorization: `${apiKey}`
                }
            })
            setSeries(response.data.results)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }

    }

    useEffect(() => {
        const searchQueryUrl = `${searchTvURL}?query=${query}`

        getQueryMovies(searchQueryUrl)
    }, [query])

    return (
        <div className="bg-background2 overflow-x-hidden">
            <div className="flex flex-col lg:flex-row lg:justify-between pt-4 items-start w-full px-3 gap-3">
                <BackButton />
                <div className=" flex gap-2 w-full max-w-96">
                    <SearchInput label='Busque por outra serie' page='tv' />
                    <SearchButton page='tv' />
                </div>

            </div>

            <h2 className="text-3xl lg:text-5xl font-bebas text-center py-8">Resultados para: <span className="text-contrast">{query}</span></h2>

            {loading &&
                <div className="h-screen w-full bg-background2 flex items-center justify-center"><Loading /></div>
            }

            {!loading && series.length > 0 &&
                <div className=" flex flex-col w-screen items-center justify-center px-6 lg:py-8">
                    <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5">
                        {series.map((item) => (
                            <div key={item.id} className="max-w-56">

                                <SerieCard serie={item} />
                            </div>
                        ))}
                    </div>
                    <div className="my-4">
                        <BackButton/>
                    </div>
                    
                </div>

            }

            {!loading && series.length === 0 &&
                <p>Não há filmes para exibir</p>
            }

        </div>
    )
}