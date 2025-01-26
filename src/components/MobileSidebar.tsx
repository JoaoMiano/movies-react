import { useEffect, useState } from "react"
import { SearchButton } from "./SearchButton"
import { SearchInput } from "./SearchInput"
import { Link } from "react-router-dom"

export const MobileSidebar = ({ open }: { open: boolean | undefined }) => {
    const [show, setShow] = useState(open)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        if (open) {
            setShow(true);
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }, [open])

    const handleAnimationEnd = () => {
        if (!open) {
            setShow(false)
        }
    }
    return (
        <>
            {show && (
                <div
                    className={`w-full absolute z-20 ${isVisible ? 'animate-slide-down opacity-100' : 'animate-slide-up opacity-0'}`}
                    onAnimationEnd={handleAnimationEnd}
                >
                    <ul className="flex flex-col items-center gap-4 m-4 bg-gray-900 rounded-lg py-4 px-4 text-lg ">
                        <li className="text-white font-bold bg-transparent hover:bg-yellow-600 w-full text-center rounded-md hover:text-gray-950" 
                            onClick={()=> setShow(false)}>
                            <Link to={'/'}>Filmes</Link>
                        </li>
                        <li className=" text-white font-bold bg-transparent hover:bg-yellow-600 hover:text-gray-950 w-full text-center rounded-md "
                            onClick={()=> setShow(false)}>
                            <Link to={'/series'}>Series</Link>
                        </li>
                        <li className="w-full">
                            <SearchInput />
                        </li>
                        <li className="w-full flex justify-center">
                            <SearchButton />
                        </li>
                    </ul>
                </div>
            )}
        </>
    )
}