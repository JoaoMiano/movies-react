import axios from "axios"
import { useEffect, useState } from "react"
import { Loading } from "../components/Loading"
import { SerieType } from "../types/Serie"
import { SerieCard } from "../components/SerieCard"


const apiKey = import.meta.env.VITE_API_KEY
const serieUrl = import.meta.env.VITE_API_TV
// console.log(serieUrl)
export const Series = () => {
    const [series, setSeries] = useState<SerieType[]>([])
    const [loading, setLoading] = useState(true)

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
        const urlTopSeries = `${serieUrl}/top_rated`
        // console.log(urlTopSeries)
        getTopRatedSeries(urlTopSeries)

    }, [])

    return (
        <div className="bg-background2 overflow-x-hidden">
            <h2
                className="text-5xl font-bebas text-center py-8"
            >Melhores filmes:</h2>

            {loading &&
                <div className="h-screen w-full bg-background2 flex items-center justify-center"><Loading /></div>
            }

            {!loading && series.length > 0 &&
                <div className=" flex w-screen justify-center px-6 pb-8">
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