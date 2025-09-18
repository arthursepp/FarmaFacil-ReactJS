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

export default GenericContainer
