import { createContext, ReactNode, useContext, useState } from "react";

type MenuOpenCtxType = {
  menuOpen: boolean,
  setMenuOpen: (n: boolean)=> void
}

export const MenuOpenContext = createContext<MenuOpenCtxType>({
  menuOpen: false,
  setMenuOpen: ()=> {}
})

export const MenuOpenProvider = ({children}: {children:ReactNode})=>{
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  return(
    <MenuOpenContext.Provider value={{menuOpen, setMenuOpen}}>
      {children}
    </MenuOpenContext.Provider>  
  )
}

export const useMenuOpen = ()=> useContext(MenuOpenContext)
