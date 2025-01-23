import { Link } from "react-router-dom";
import { MovieType } from "../types/Movie";
import { BiSolidStar } from "react-icons/bi";

const imageUrl = import.meta.env.VITE_IMG;

export const MovieCard = ({ movie }: { movie: MovieType }, showLink: boolean = true) => {
    return (
        <div className="bg-gray-800 rounded-xl shadow-md transition-transform transform hover:scale-105 hover:shadow-lg h-full flex flex-col">
            <img
                src={`${imageUrl}${movie.poster_path}`}
                alt={`${movie.title}`}
                className="rounded-t-xl w-full object-cover h-80"
            />

            <div className="h-1 w-full bg-contrast"></div>

            <h2 className="text-white text-lg leading-5 text-center font-semibold px-4 py-2 min-h-16 flex items-center justify-center">
                {movie.title}
            </h2>


            <div className="flex justify-between items-center px-4 py-2 mt-auto text-sm border-t-4 border-contrast">
                <div className="flex items-center gap-1 text-white font-bold">
                    <BiSolidStar className="text-yellow-400" /> {movie.vote_average.toFixed(1)}
                </div>

                {showLink && (
                    <Link
                        to={`/movie/${movie.id}`}
                        className="text-contrast hover:underline font-medium bg-white p-2 rounded-lg"
                    >
                        Detalhes
                    </Link>
                )}
            </div>
        </div>
    );
};
