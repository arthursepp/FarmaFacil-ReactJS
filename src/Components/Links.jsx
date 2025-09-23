import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const IconTabLink = ({ text, url, icon, className, iconclassName,...props }) => {
    return (
        <a 
            href={url} 
            className={`
                ${className}
                flex
                flex-col
                items-center
                gap-2
            `} 
            {...props}
        >
            <FontAwesomeIcon icon={icon} className={`${iconclassName}`}/>
            <span>{text}</span>
        </a>
    )
}
