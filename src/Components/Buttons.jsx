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
                w-35
                hover:bg-slate-200
            "
        >
            <FontAwesomeIcon icon={faArrowLeft} color={blue} />
            <span>Voltar</span>
        </button>
    )
}

export const PrimaryButton = ({ children, link, url, className, ...props }) => {
    if (link === true) {
        return (
            <a href={url} {...props}
                className={`
                bg-blue-500 
                text-white 
                p-3
                cursor-pointer
                rounded-xl
                mt-2
                text-center
                hover:bg-blue-600
                ${className}
            `}
            >
                {children}
            </a>
        )
    } else {
        return (
            <button {...props}
                className={`
                bg-blue-500 
                text-white 
                p-3
                cursor-pointer
                rounded-xl
                mt-2
                hover:bg-blue-600
                ${className}
            `}
            >
                {children}
            </button>
        )
    }
}

export const PrimaryDangerButton = ({ children, link, url, className, ...props }) => {
    if (link === true) {
        return (
            <a href={url} {...props}
                className={`
                bg-red-500 
                text-white 
                p-3
                cursor-pointer
                rounded-xl
                mt-2
                text-center
                hover:bg-red-600
                ${className}
            `}
            >

                {children}

            </a>
        )
    } else {
        return (
            <button {...props}
                className={`
                bg-red-500 
                text-white 
                p-3
                cursor-pointer
                rounded-xl
                mt-2
                hover:bg-red-600
                ${className}
            `}
            >

                {children}

            </button>
        )
    }
}

export const SecondaryButton = ({ children, link, url, className, ...props }) => {
    if (link === true) {
        return (
            <a href={url} {...props}
                className={`
                border-2
                border-blue-500
                text-blue-500
                p-3
                cursor-pointer
                rounded-xl
                mt-2
                text-center
                hover:bg-blue-500
                hover:text-white
                ${className}
            `}
            >
                {children}
            </a>
        )
    } else {
        return (
            <button {...props}
                className={`
                border-2
                border-blue-500
                text-blue-500
                p-3
                cursor-pointer
                rounded-xl
                mt-2
                hover:bg-blue-500
                hover:text-white
                ${className}
            `}
            >
                {children}
            </button>
        )
    }
}

export const SecondaryDangerButton = ({ link, url, className, children, ...props }) => {
    if (link === true) {
        return (
            <a href={url} {...props}
                className={`
                border-2
                border-red-500
                text-red-500
                p-3
                cursor-pointer
                rounded-xl
                mt-2
                hover:bg-red-500
                hover:text-white
                ${className}
            `}
            >
                {children}
            </a>
        )
    } else {
        return (
            <button {...props}
                className={`
                border-2
                border-red-500
                text-red-500
                p-3
                cursor-pointer
                rounded-xl
                mt-2
                hover:bg-red-500
                hover:text-white
                ${className}
            `}
            >
                {children}
            </button>
        )
    }
}
