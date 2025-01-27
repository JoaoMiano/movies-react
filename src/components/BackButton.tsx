import { BiArrowBack } from "react-icons/bi"
import { useNavigate } from "react-router-dom"

export const BackButton = () => {
    const navigate = useNavigate()
    return (
        <button
            onClick={() => navigate(-1)}
            className="flex gap-2 justify-center font-semibold items-center py-2 px-4 rounded-lg bg-yellow-500 w-full max-w-24 hover:opacity-80
                       lg:max-w-32 lg:text-2xl"
        >
            <BiArrowBack />
            <p>Voltar</p>
        </button>
    )
}