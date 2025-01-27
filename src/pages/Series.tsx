import axios from "axios"
import { useEffect, useState } from "react"
import { Loading } from "../components/Loading"
import { SerieType } from "../types/Serie"
import { SerieCard } from "../components/SerieCard"
import { SearchInput } from "../components/SearchInput"
import { SearchButton } from "../components/SearchButton"


const apiKey = import.meta.env.VITE_API_KEY
const serieUrl = import.meta.env.VITE_API_TV
// console.log(serieUrl)
export const Series = () => {
    const [series, setSeries] = useState<SerieType[]>([])
    const [loading, setLoading] = useState(true)
    const [optionSelected, setOptionSelected] = useState('top_rated')

    const getTopRatedSeries = async (url: string) => {
        try {
            const response = await axios.get(`${url}`, {
                headers: {
                    Authorization: `${apiKey}`
                }
            })
            setSeries(response.data.results)
            console.log(response.data.results)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }

    }

    useEffect(() => {
        const urlTopSeries = `${serieUrl}/${optionSelected}`
        // console.log(urlTopSeries)
        getTopRatedSeries(urlTopSeries)

    }, [optionSelected])

    return (
        <div className="bg-background2 overflow-x-hidden ">

            <div className="flex flex-col lg:flex-row gap-3 lg:gap-10 py-4 px-8 lg:justify-between ">

                <div className=" flex gap-5 bg-gray-800 p-2 rounded-md w-full max-w-96">
                    <p className="flex-1 text-gray-200 text-md font-semibold">Mostrar:</p>
                    <select 
                        name="Exibindo" 
                        className="text-sm px-2 bg-yellow-500 rounded-md font-semibold border-2 border-transparent focus:border-contrast hover:cursor-pointer"
                        onChange={(e)=>setOptionSelected(e.target.value)}
                    >
                        <option value="top_rated" className="cursor-pointer hover:opacity-80 ">Mais votados</option>
                        <option value="popular" className="cursor-pointer hover:opacity-80 ">Populares</option>
                        <option value="on_the_air" className="cursor-pointer hover:opacity-80 ">No ar</option>
                        <option value="airing_today" className="cursor-pointer hover:opacity-80 ">Exibindo Hoje</option>
                    </select>
                </div>

                <div className=" flex flex-col gap-3 lg:flex-row lg:flex-1 max-w-96">
                    <SearchInput label='Busque por uma serie' page='tv'/>
                    <SearchButton page='tv'/>
                </div>
            </div>



            {loading &&
                <div className="h-screen w-full bg-background2 flex items-center justify-center"><Loading /></div>
            }

            {!loading && series.length > 0 &&
                <div className=" flex w-screen justify-center px-6 py-8">
                    <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5">
                        {series.map((item) => (
                            <div key={item.id} className="max-w-56">

                                <SerieCard serie={item} />
                            </div>
                        ))}
                    </div>
                </div>

            }

            {!loading && series.length === 0 &&
                <p>Não há filmes para exibir</p>
            }

        </div>
    )
}