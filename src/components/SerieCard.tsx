import { Link } from "react-router-dom";
import { BiSolidStar } from "react-icons/bi";
import { SerieType } from "../types/Serie";

const imageUrl = import.meta.env.VITE_IMG;

export const SerieCard = ({ serie }: { serie: SerieType}) => {
    return (
        <Link to={`/movie/${serie.id}`}>
            <div className="cursor-pointer bg-gray-800 rounded-xl shadow-md transition-transform transform hover:scale-105 hover:shadow-lg flex flex-col max-h-80 lg:max-h-full">
                <img
                    src={`${imageUrl}${serie.poster_path}`}
                    alt={`${serie.name}`}
                    className="rounded-t-xl w-full h-52  lg:h-80 lg:object-cover"
                />

                <h2 className="text-white  text-sm lg:text-lg leading-5 text-center font-semibold px-4 py-2 min-h-16 flex items-center justify-center border-y-4 border-contrast">
                    {serie.name}
                </h2>


                <div className="flex justify-between items-center px-4 py-2 mt-auto text-sm">
                    <div className="flex items-center gap-1 text-white font-bold">
                        <BiSolidStar className="text-yellow-400" /> {serie.vote_average.toFixed(1)}
                    </div>
                    <div>
                        <p className="text-white font-semibold ">{serie.first_air_date.slice(0,4)}</p>
                    </div>
                </div>
            </div>
        </Link>

    );
};
