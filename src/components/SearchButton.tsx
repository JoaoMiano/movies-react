import { useContext } from "react"
import { BiSearch } from "react-icons/bi"
import { SearchContext } from "../context/SearchContext"
import { useNavigate } from "react-router-dom"
import { useMenuOpen } from "../context/MenuOpenContext"

export const SearchButton = () => {

    const menuOpenContext = useMenuOpen()
    const searchCtx = useContext(SearchContext)
    const navigate = useNavigate()

    const handleSearchButton = () => {
        if (!searchCtx?.searchInput) return
        searchCtx?.setSearchInput('')
        menuOpenContext.setMenuOpen(false)
        navigate(`/search?q=${searchCtx.searchInput}`)
        
    }



    return (
        <button
            className="w-full lg:max-w-32 bg-yellow-500 text-gray-900 text-sm sm:text-base font-bold px-4 py-2 rounded-lg hover:bg-yellow-600 transition-all flex items-center gap-2"
            onClick={handleSearchButton}
        >
            <BiSearch className="text-lg sm:text-xl" />
            <p className="flex-1">Buscar</p>
        </button>
    )
}