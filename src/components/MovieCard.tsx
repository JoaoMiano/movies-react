import { Link } from "react-router-dom";
import { MovieType } from "../types/Movie";
import { BiSolidStar } from "react-icons/bi";

const imageUrl = import.meta.env.VITE_IMG;


export const MovieCard = ({ movie }: { movie: MovieType}) => {
    return (
        <Link to={`/movie/${movie.id}`}>
            <div className="cursor-pointer bg-gray-800 rounded-xl shadow-md transition-transform transform hover:scale-105 hover:shadow-lg flex flex-col max-h-80 h-full lg:max-h-full">
                <img
                    src={`${imageUrl}${movie.poster_path}`}
                    alt={`${movie.title}`}
                    className="rounded-t-xl w-full h-52  lg:h-80 lg:object-cover border-b-4 border-contrast"
                />

                <h2 className="text-white  text-sm lg:text-lg leading-5 text-center font-semibold px-4 py-2 min-h-16 flex items-center justify-center h-full">
                    {movie.title}
                </h2>


                <div className="flex justify-between items-center px-4 py-2 mt-auto text-sm border-t-4 border-contrast">
                    <div className="flex items-center gap-1 text-white font-bold">
                        <BiSolidStar className="text-yellow-400" /> {movie.vote_average.toFixed(1)}
                    </div>
                    <div>
                        <p className="text-white font-semibold ">{movie.release_date.slice(0, 4)}</p>
                    </div>
                </div>
            </div>
        </Link>

    );
};
