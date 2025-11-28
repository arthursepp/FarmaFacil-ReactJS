import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const IconTabLink = ({ text, url, icon, className, iconclassName, ...props }) => {
  return (
    <a
      href={url}
      className={`
                ${className}
                flex
                flex-col
                items-center
                gap-2
                font-poppins
            `}
      {...props}
    >
      <FontAwesomeIcon icon={icon} className={`${iconclassName}`} />
      <span>{text}</span>
    </a>
  )
}

export const GenericLink = ({ url, className, children }) => {
  return (
    <a
      href={url}
      className={`
        text-primaryblue underline underline-offset-2
        hover:text-blue-700 hover:underline-offset-4
        focus:outline-none focus:ring-2 focus:ring-primaryblue focus:ring-offset-2 rounded-sm
        active:text-blue-800
        transition-all duration-200 ease-in-out
        font-poppins
        ${className}
      `}
    >
      {children}
    </a>
  );
};
