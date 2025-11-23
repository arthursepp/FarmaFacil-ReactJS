import React from "react";
import { useNavigate, Link } from "react-router-dom"; // Added Link
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import getColor from "./ColorDictionary";

const blue = getColor('primary-blue');

// --- Helper Component (Internal Use Only) ---
// This handles the logic: Is it an external link? An internal Link? Or a Button?
const BaseButton = ({ children, link, url, className = "", ...props }) => {
    const baseClasses = `
        p-3
        cursor-pointer
        rounded-xl
        mt-2
        text-center
        font-poppins
        focus:outline-none
        focus:ring-2
        focus:ring-offset-2
        transition-all
        duration-200
        ease-in-out
        active:scale-95
        ${className}
    `;

    // 1. If it's a link with a URL
    if (link && url) {
        // If it starts with http, treat as external <a>
        if (url.startsWith('http')) {
            return (
                <a href={url} className={baseClasses} target="_blank" rel="noopener noreferrer" {...props}>
                    {children}
                </a>
            );
        }
        // Otherwise treat as internal React Router <Link>
        return (
            <Link to={url} className={baseClasses} {...props}>
                {children}
            </Link>
        );
    }

    // 2. Default to standard <button>
    return (
        <button className={baseClasses} {...props}>
            {children}
        </button>
    );
};

// --- Exported Components ---

export const ReturnButton = () => {
    const navigate = useNavigate();

    const voltar = () => {
        // Safe check for window/localStorage existence
        if (typeof window !== 'undefined') {
            localStorage.removeItem('id_produto');
            localStorage.removeItem('id_pedido');
        }
        navigate(-1);
    };

    return (
        <button 
            onClick={voltar}
            className="
                group
                flex 
                gap-3 
                items-center 
                rounded-2xl 
                p-3 
                cursor-pointer
                w-36  
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
    );
};

export const PrimaryButton = (props) => {
    return (
        <BaseButton
            {...props}
            className={`
                bg-primaryblue 
                text-white 
                hover:bg-blue-600
                active:bg-blue-700
                focus:ring-primaryblue
                ${props.className || ''}
            `}
        />
    );
};

export const PrimaryDangerButton = (props) => {
    return (
        <BaseButton
            {...props}
            className={`
                bg-red-500 
                text-white 
                hover:bg-red-600
                active:bg-red-700
                focus:ring-red-500
                ${props.className || ''}
            `}
        />
    );
};

export const SecondaryButton = (props) => {
    return (
        <BaseButton
            {...props}
            className={`
                border-2
                border-primaryblue
                text-primaryblue
                hover:bg-primaryblue
                hover:text-white
                active:bg-blue-600
                active:border-blue-600
                focus:ring-primaryblue
                ${props.className || ''}
            `}
        />
    );
};

export const SecondaryDangerButton = (props) => {
    return (
        <BaseButton
            {...props}
            className={`
                border-2
                border-red-500
                text-red-500
                hover:bg-red-500
                hover:text-white
                active:bg-red-600
                active:border-red-600
                focus:ring-red-500
                ${props.className || ''}
            `}
        />
    );
};