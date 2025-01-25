import { Link } from "react-router-dom";
import { BiSolidCameraMovie, BiMenu } from "react-icons/bi"
import { useContext, useState } from "react";
import { MobileSidebar } from "./MobileSidebar";
import { SearchProvider } from "../context/SearchContext";
import { SearchInput } from "./SearchInput";
import { SearchButton } from "./SearchButton";
import { MenuOpenContext, MenuOpenProvider, useMenuOpen } from "../context/MenuOpenContext";



export const NavBar = () => {

    //const [menuOpen, setMenuOpen] = useState<boolean>(false)
    const {menuOpen, setMenuOpen} = useContext(MenuOpenContext)


    return (
        <SearchProvider>
                    <nav className="h-20 w-full bg-gray-900 flex justify-between items-center px-2 sm:px-12 py-1 border-b-4 border-yellow-500 shadow-md overflow-hidden">
                        {/* Logo */}
                        <div className="flex items-center">
                            <Link to="/" className="flex items-center gap-2 text-yellow-500 hover:opacity-80 transition-opacity">
                                <div className="text-center text-xl sm:text-2xl font-bold font-bebas leading-none">
                                    <p>React</p>
                                    <p>Movies</p>
                                </div>
                                <BiSolidCameraMovie className=" hidden md:block text-4xl sm:text-5xl mr-2 lg:mr-0" />
                            </Link>
                        </div>

                        {/* Search Bar */}
                        <div className=" hidden md:flex items-center gap-3 w-full max-w-md">
                            <SearchInput />
                            <SearchButton />

                        </div>


                        {/* Menu Hamb */}
                        <div className='lg:hidden'>
                            <BiMenu
                                className="text-5xl cursor-pointer text-yellow-500 hover:text-yellow-600 transition-all "
                                onClick={()=> setMenuOpen(!menuOpen)}
                            />
                        </div>
                    </nav>

                    {/* Mobile Sidebar */}
                    <MobileSidebar open={menuOpen} />
        </SearchProvider>
    );
};
