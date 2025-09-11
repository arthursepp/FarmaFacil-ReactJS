import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import getColor from "./ColorDictionary"

const blue = getColor('primary-blue')
const red = getColor('primary-red')

export const ReturnButton = () => {
    const navigate = useNavigate()

    const voltar = () => {
        navigate(-1)
    }

    return (
        <button onClick={voltar}         
            className="
                flex 
                gap-3 
                items-center 
                border-2 
                border-blue-500 
                rounded-2xl 
                p-3 
                cursor-pointer                 
            "
        >
            <FontAwesomeIcon icon={faArrowLeft} color={blue} />
            <span>Voltar</span>
        </button>
    )
}

export const PrimaryButton = ({ text, ...props }) => {
    return (
        <button {...props} 
            className="
                bg-blue-500 
                text-white 
                p-3
                cursor-pointer
                rounded-xl
                mt-2
                hover:bg-blue-600
            "
            >
            <span className="text-xl">
                {text}
            </span>
        </button>
    )
}
