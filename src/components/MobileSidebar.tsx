import { SearchButton } from "./SearchButton"
import { SearchInput } from "./SearchInput"

export const MobileSidebar = ({ open }: { open: boolean | undefined }) => {
        
    return (
        <>
            {open && (
                <div className="w-full absolute z-20  ">
                    <ul className="flex flex-col items-center gap-4 m-4 bg-gray-900 rounded-lg py-4 px-4 text-lg ">
                        <li>
                            <p className="text-white font-bold">Filmes</p>
                        </li>
                        <li>
                            <p className="text-white font-bold">Series</p>
                        </li>
                        <li className="w-full">
                            <SearchInput/>
                        </li>
                        <li className="w-full flex justify-center">
                            <SearchButton/>
                        </li>
                    </ul>
                </div>
            )}
        </>
    )
}