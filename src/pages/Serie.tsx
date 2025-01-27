import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../components/Loading";
import { BiCalendar, BiCollection, BiSolidUser,  } from "react-icons/bi";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import { SerieType } from "../types/Serie";

const apiKey = import.meta.env.VITE_API_KEY;
const serieUrl = import.meta.env.VITE_API_TV;
const imageUrl = import.meta.env.VITE_IMG;

export const Serie = () => {
  const { id } = useParams();
  const [serie, setSerie] = useState<SerieType | null>(null);
  const [loading, setLoading] = useState(true);


  const getMovie = async (url: string) => {
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `${apiKey}`,
        },
      });
      setSerie(response.data)
      console.log(response.data);;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const url = `${serieUrl}/${id}`;
    getMovie(url);
  }, []);

  return (
    <div>
      {loading && 
        <div className="h-screen w-full bg-background2 flex items-center justify-center"><Loading/></div>
      }

      {!loading && serie !== null && (
        <div className="flex flex-col items-center lg:gap-10 bg-background2 p-4 lg:p-6">
          <h3 className="flex justify-center items-center lg:pt-3 text-white text-3xl lg:text-4xl font-bebas text-center">
            {serie.name}
          </h3>

          
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-10 w-full max-w-6xl">
            {/* Pôster do filme */}
            <div className="bg-gray-900 rounded-lg p-3 flex-1 max-w-xs md:max-w-sm mx-auto lg:mx-0">
              <img
                src={`${imageUrl}${serie.poster_path}`}
                alt={serie.name}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>

            {/* Informações do filme */}
            <div className="bg-gray-900 rounded-lg flex-1 p-6 mt-2 lg:mt-0">
              <div className="border-b-4 border-contrast mb-4">
                <h4 className="flex leading-none gap-2 text-contrast font-bold text-xl mt-2">
                  <BiCalendar /> Data do episódio 1:
                </h4>
                <p className="text-white my-3 mx-6 text-lg">
                  {serie.first_air_date}
                </p>
              </div>

              <div className="border-b-4 border-contrast mb-4">
                <h4 className="flex leading-none gap-2 text-contrast font-bold text-xl mt-2">
                  <BiCollection /> Temporadas:
                </h4>
                <p className="text-white my-3 mx-6 text-lg">{serie.number_of_seasons}</p>
              </div>



              <div className="border-b-4 border-contrast mb-4">
                <h4 className="flex leading-none gap-2 text-contrast font-bold text-xl mt-2">
                  <BsFillFileEarmarkTextFill /> Descrição:
                </h4>
                <p className="text-white my-3 mx-6 text-lg">{serie.overview}</p>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};
