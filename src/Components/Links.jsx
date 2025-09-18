import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const IconTabLink = ({ text, url, icon, classes, iconClasses,...props }) => {
    return (
        <a 
            href={url} 
            className={`
                ${classes}
                flex
                flex-col
                items-center
                gap-2
            `} 
            {...props}
        >
            <FontAwesomeIcon icon={icon} className={`${iconClasses}`}/>
            <span>{text}</span>
        </a>
    )
}
