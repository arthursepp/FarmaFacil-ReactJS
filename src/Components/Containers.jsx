import React from 'react'

function GenericContainer({ children }) {
    return (
        <div
            className='flex flex-col flex-1 h-full w-full p-5'
        >
            {children}
        </div>
    )
}

export const CardContainer = ({ classes, children, ...props }) => {
    return (
        <div
            className={`
                p-5
                border-2
                border-blue-500
                rounded-xl                
                flex
                flex-col                
                ${classes}
            `}
            {...props}
        >
            {children}
        </div>
    )
}

export default GenericContainer
