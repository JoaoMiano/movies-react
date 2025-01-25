import { KeyboardEvent, useContext } from "react"
import { SearchContext } from "../context/SearchContext"
import { useNavigate } from "react-router-dom"
import { useMenuOpen } from "../context/MenuOpenContext"

export const SearchInput = () => {
    const searchCtx = useContext(SearchContext)
    const menuOpenCtx= useMenuOpen()
    const navigate = useNavigate()

    const handleKeyUpAction = (e: KeyboardEvent) => {
        if (e.code.toLocaleLowerCase() === 'enter') {
            searchCtx?.setSearchInput('')
            menuOpenCtx.setMenuOpen(false)
            if(searchCtx?.searchInput === undefined) return
            navigate(`/search?q=${searchCtx?.searchInput}`)
        }
    }
    return (
        <input
            type="text"
            placeholder="Busque por um filme"
            className="w-full lg:w-24 flex-grow bg-gray-800 text-white text-sm sm:text-base placeholder-gray-400 p-2 rounded-lg border border-gray-700 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all"
            value={searchCtx?.searchInput}
            onChange={(e) => searchCtx?.setSearchInput(e.target.value)}
            onKeyUp={handleKeyUpAction}
        />
    )
}