import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

function PedidoComponent({ 
    url,
    imageUrl,
    nomeProduto,
    precoProduto,
    onClick,
}) {
    return (
        <a
            href={url}
            onClick={onClick}
            className='
                flex
                flex-col 
                gap-4
                items-center 
                justify-between 
                border-b-1 
                border-slate-200
                w-full 
                p-5 
                hover:bg-gray-200
                md:flex-row
            '
        >
            <img src={imageUrl} className='max-w-[200px] max-h-[200px]' />
            <div className='flex items-center gap-5'>
                <div className='flex flex-col gap-3 text-center'>
                    <span>{nomeProduto}</span>
                    <span>{precoProduto}</span>
                </div>
                
                <div className="hidden xl:block md:block">
                    <FontAwesomeIcon
                        icon={faChevronRight}
                        className='text-slate-300'
                    />
                </div>
            </div>
        </a>

    )
}

export default PedidoComponent
