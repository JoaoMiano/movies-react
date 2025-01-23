import { Link, useNavigate } from "react-router-dom";
import { BiSolidCameraMovie, BiSearch } from "react-icons/bi"
import { KeyboardEvent, useState } from "react";


export const NavBar = () => {

    const [searchInput, setSeacrchInput] = useState('')
    const navigate = useNavigate()

    const handleSearchButton = ()=>{
        if (!searchInput) return 
        setSeacrchInput('')
        navigate(`/search?q=${searchInput}`)
    }
    const handleKeyUpAction = (e:KeyboardEvent<HTMLInputElement>)=>{
        if(e.code.toLocaleLowerCase() === 'enter'){
            setSeacrchInput('')
            navigate(`/search?q=${searchInput}`)
        }
    }

    return (
        <nav className="h-20 w-full bg-gray-900 flex justify-between items-center px-6 sm:px-12 py-4 border-b-4 border-yellow-500 shadow-md">
            {/* Logo */}
            <div className="flex items-center">
                <Link to="/" className="flex items-center gap-2 text-yellow-500 hover:opacity-80 transition-opacity">
                    <div className="text-xl sm:text-2xl font-bold font-bebas leading-none">
                        <p>React</p>
                        <p>Movies</p>
                    </div>
                    <BiSolidCameraMovie className="text-4xl sm:text-5xl" />
                </Link>
            </div>

            {/* Search Bar */}
            <div className="flex items-center gap-3 w-full max-w-md">
                <input
                    type="text"
                    placeholder="Busque por um filme"
                    className="flex-grow bg-gray-800 text-white text-sm sm:text-base placeholder-gray-400 p-2 rounded-lg border border-gray-700 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all"
                    value={searchInput}
                    onChange={(e)=>setSeacrchInput(e.target.value)}
                    onKeyUp={handleKeyUpAction}
                />
                <button
                    className="bg-yellow-500 text-gray-900 text-sm sm:text-base font-bold px-4 py-2 rounded-lg hover:bg-yellow-600 transition-all flex items-center gap-2"
                    onClick={handleSearchButton}
                >
                    <BiSearch className="text-lg sm:text-xl" />
                    Buscar
                </button>
            </div>
        </nav>
    );
};
