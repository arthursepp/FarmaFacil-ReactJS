import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import getColor from "./ColorDictionary"

const blue = getColor('primary-blue')
const red = getColor('primary-red')

export const ReturnButton = () => {
    const navigate = useNavigate()

    const voltar = () => {
        if (localStorage.getItem('id_produto')) localStorage.removeItem('id_produto')
        if (localStorage.getItem('id_pedido')) localStorage.removeItem('id_pedido')
        navigate(-1)
    }

    return (
        <button onClick={voltar}
            className="
                group
                flex 
                gap-3 
                items-center 
                rounded-2xl 
                p-3 
                cursor-pointer
                w-35
                hover:bg-slate-200
                active:bg-slate-300
                active:scale-95
                font-poppins
                focus:outline-none
                focus:ring-2
                focus:ring-primaryblue
                focus:ring-offset-2
                transition-all
                duration-200
                ease-in-out
            "
        >
            <FontAwesomeIcon 
                icon={faArrowLeft} 
                color={blue} 
                className="
                    transition-transform 
                    duration-200 
                    ease-in-out
                    group-hover:-translate-x-1
                "
            />
            <span>Voltar</span>
        </button>
    )
}

export const PrimaryButton = ({ children, link, url, className, ...props }) => {
    if (link === true) {
        return (
            <a href={url} {...props}
                className={`
                bg-primaryblue 
                text-white 
                p-3
                cursor-pointer
                rounded-xl
                mt-2
                text-center
                hover:bg-blue-600
                active:bg-blue-700
                active:scale-95
                font-poppins
                focus:outline-none
                focus:ring-2
                focus:ring-primaryblue
                focus:ring-offset-2
                transition-all
                duration-200
                ease-in-out
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
                bg-primaryblue 
                text-white 
                p-3
                cursor-pointer
                rounded-xl
                mt-2
                hover:bg-blue-600
                active:bg-blue-700
                active:scale-95
                font-poppins
                focus:outline-none
                focus:ring-2
                focus:ring-primaryblue
                focus:ring-offset-2
                transition-all
                duration-200
                ease-in-out
                ${className}
            `}
          _>
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
                active:bg-red-700
                active:scale-95
                font-poppins
                focus:outline-none
                focus:ring-2
                focus:ring-red-500
                focus:ring-offset-2
                transition-all
                duration-200
                ease-in-out
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
          _       text-white 
                p-3
                cursor-pointer
                rounded-xl
                mt-2
                hover:bg-red-600
                active:bg-red-700
                active:scale-95
                font-poppins
                focus:outline-none
                focus:ring-2
                focus:ring-red-500
                focus:ring-offset-2
                transition-all
                duration-200
                ease-in-out
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
                border-primaryblue
                text-primaryblue
                p-3
                cursor-pointer
                rounded-xl
                mt-2
                text-center
New               hover:bg-primaryblue
                hover:text-white
                active:bg-blue-600
                active:border-blue-600
                active:scale-95
                font-poppins
                focus:outline-none
                focus:ring-2
                focus:ring-primaryblue
                focus:ring-offset-2
                transition-all
                duration-200
                ease-in-out
s              ${className}
            `}
            >
                {children}
            </a>
        )
    } else {
        return (
            <button {...props}
                className={`
Note              border-2
                border-primaryblue
                text-primaryblue
                p-3
                cursor-pointer
                rounded-xl
                mt-2
                hover:bg-primaryblue
                hover:text-white
                active:bg-blue-600
                active:border-blue-600
                active:scale-95
                font-poppins
                focus:outline-none
                focus:ring-2
                focus:ring-primaryblue
                focus:ring-offset-2
                transition-all
                duration-200
                ease-in-out
s              ${className}
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
Two                 text-red-500
                p-3
                cursor-pointer
                rounded-xl
                mt-2
                hover:bg-red-500
Read                hover:text-white
                active:bg-red-600
                active:border-red-600
                active:scale-95
                font-poppins
                focus:outline-none
                focus:ring-2
                focus:ring-red-500
                focus:ring-offset-2
                transition-all
                duration-200
                ease-in-out
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
                active:bg-red-600
                active:border-red-600
                active:scale-95
                font-poppins
                focus:outline-none
                focus:ring-2
                focus:ring-red-500
                focus:ring-offset-2
                transition-all
                duration-200
                ease-in-out
s              ${className}
            `}
            >
              {children}
            </button>
        )
    }
}