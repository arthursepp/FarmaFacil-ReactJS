import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

function PedidoComponent({ 
    url,
    imageUrl,
    nomeProduto,
    precoProduto,    
}) {
    return (
        <a
            href={url}
            className='
                flex 
                items-center 
                justify-between 
                border-b-1 
                border-slate-300 
                w-full 
                p-5 
                hover:bg-gray-200
            '
        >
            <img src={imageUrl} className='max-w-[200px] max-h-[200px]' />
            <div className='flex items-center gap-10'>
                <div className='flex flex-col gap-3 text-center'>
                    <span>{nomeProduto}</span>
                    <span>{precoProduto}</span>
                </div>
                <FontAwesomeIcon icon={faChevronRight} className='text-slate-400' />
            </div>
        </a>

    )
}

export default PedidoComponent
