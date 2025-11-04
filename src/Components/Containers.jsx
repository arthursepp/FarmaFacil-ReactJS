import React from 'react'

function GenericContainer({ children, className }) {
    return (
        <div className={`flex flex-col flex-1 h-full w-full p-5 ${className}`}>
            {children}
        </div>
    )
}

export const CardContainer = ({ className, children, ...props }) => {
    return (
        <div
            className={`                
                border-2                
                rounded-xl                
                flex
                flex-col
                ${className}
            `}
            {...props}
        >
            {children}
        </div>
    )
}

export const ProductCard = ({ nomeProduto, descricaoProduto, precoProduto, className }) => {
    return (
        <div className={`flex flex-col p-3 border-2 border-primaryblue rounded-xl w-full max-w-sm ${className}`}>
            
            <div className="mb-3 flex justify-center w-full">
                <img 
                    src="placeholder-url" 
                    alt={nomeProduto || 'Imagem do Produto'} 
                    className="w-full max-h-40 object-contain rounded-lg" 
                />
            </div>

            <div className='flex flex-col mb-4'>
                <span className="text-lg font-bold text-gray-800 mb-1">
                    {nomeProduto || 'Nome do Produto'}
                </span>
                
                <p className="text-sm text-gray-600 mb-2">
                    {descricaoProduto || 'Descrição breve do produto, ideal para identificar seu uso principal.'}
                </p>
            </div>

            <div className="flex items-center justify-between mt-auto">
                
                <span className="text-lg font-semibold text-green-600">
                    R$ {precoProduto || '00,00'}
                </span>

                <button 
                    className="py-2 px-4 flex items-center justify-center space-x-2 text-white bg-primaryblue hover:bg-blue-600 rounded-lg font-bold transition duration-150"
                >
                    <span>Comprar</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                </button>
            </div>
        </div>
    )
}


export default GenericContainer
