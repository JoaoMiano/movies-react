import { createContext, ReactNode, useState } from "react";

type SearchContext = {
    searchInput: string,
    setSearchInput: (n: string)=> void
}

export const SearchContext = createContext<SearchContext | null>(null)

export const SearchProvider = ({children}:{children:ReactNode})=>{
    const [searchInput, setSearchInput] = useState('')
    return(
        <SearchContext.Provider value={{searchInput, setSearchInput}}>
            {children}
        </SearchContext.Provider>
    )
}