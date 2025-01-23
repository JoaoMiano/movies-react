import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieType } from "../types/Movie";
import { Loading } from "../components/Loading";
import { BiCalendar, BiSolidFlagAlt, BiSolidStar, BiSolidLike } from "react-icons/bi";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";

const apiKey = import.meta.env.VITE_API_KEY;
const moviesUrl = import.meta.env.VITE_API;
const imageUrl = import.meta.env.VITE_IMG;

export const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<MovieType | null>(null);
  const [loading, setLoading] = useState(true);

  const getMovie = async (url: string) => {
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `${apiKey}`,
        },
      });
      setMovie(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const url = `${moviesUrl}/${id}`;
    getMovie(url);
  }, []);

  return (
    <div>
      {loading && 
        <div className="h-screen w-full bg-background2 flex items-center justify-center"><Loading/></div>
      }

      {!loading && movie !== null && (
        <div className="flex flex-col items-center gap-10 bg-background2 p-6">
          <h3 className="flex justify-center items-center pt-3 text-white text-4xl font-bebas text-center">
            {movie.title}
          </h3>

          
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-10 w-full max-w-6xl">
            {/* Pôster do filme */}
            <div className="bg-gray-900 rounded-lg p-3 flex-1 max-w-xs md:max-w-sm mx-auto lg:mx-0">
              <img
                src={`${imageUrl}${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>

            {/* Informações do filme */}
            <div className="bg-gray-900 rounded-lg flex-1 p-6 mt-4 lg:mt-0">
              <div className="border-b-4 border-contrast mb-4">
                <h4 className="flex leading-none gap-2 text-contrast font-bold text-xl mt-2">
                  <BiCalendar /> Data de lançamento:
                </h4>
                <p className="text-white my-3 mx-6 text-lg">
                  {movie.release_date}
                </p>
              </div>

              <div className="border-b-4 border-contrast mb-4">
                <h4 className="flex leading-none gap-2 text-contrast font-bold text-xl mt-2">
                  <BiSolidFlagAlt /> Idioma de origem:
                </h4>
                <p className="text-white my-3 mx-6 text-lg">
                  {movie.original_language.toUpperCase()}
                </p>
              </div>

              <div className="border-b-4 border-contrast mb-4">
                <h4 className="flex leading-none gap-2 text-contrast font-bold text-xl mt-2">
                  <BsFillFileEarmarkTextFill /> Descrição:
                </h4>
                <p className="text-white my-3 mx-6 text-lg">{movie.overview}</p>
              </div>

              <div className="border-b-4 border-contrast">
                <h4 className="flex leading-none gap-2 text-contrast font-bold text-xl mt-2">
                  <BiSolidStar /> Avaliação:
                </h4>
                <p className="text-white my-3 mx-6 text-lg">{movie.vote_average.toFixed(1)}</p>
              </div>

              <div className="border-b-4 border-contrast">
                <h4 className="flex leading-none gap-2 text-contrast font-bold text-xl mt-2">
                  <BiSolidLike /> Votos:
                </h4>
                <p className="text-white my-3 mx-6 text-lg">{movie.vote_count}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
