import React, { useState } from 'react'
import GenericContainer from '../../../Components/Containers'
import { SecondaryText } from '../../../Components/Titles'
import Footer from '../../../Components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { ReturnButton } from '../../../Components/Buttons'

function PedidosLoja() {
    const [activeTab, setActiveTab] = useState('Concluidos')

    return (
        <div>
            <GenericContainer>
                <ReturnButton />
                <SecondaryText text='Seus pedidos' classes={'text-black my-4 text-center'} />

                <div className="flex border-b-1 border-slate-300 mt-3">
                    <button
                        onClick={() => setActiveTab("Concluidos")}
                        className={`
                                flex-1 
                                p-2 
                                text-center 
                                ${activeTab === "Concluidos" ?
                                `
                                        p-2.5
                                        rounded-t-xl
                                        font-bold
                                        cursor-pointer
                                        bg-blue-500
                                        text-white
                                    `
                                : `
                                        cursor-pointer 
                                        hover:bg-blue-500 
                                        hover:text-white 
                                        hover:rounded-t-xl 
                                        p-2.5
                                    `
                            }`}
                    >
                        Concluidos
                    </button>
                    <button
                        onClick={() => setActiveTab("Pendentes")}
                        className={`
                                flex-1 
                                p-2 
                                text-center 
                                ${activeTab === "Pendentes" ?
                                `
                                        p-2.5
                                        rounded-t-xl
                                        font-bold
                                        cursor-pointer
                                        bg-blue-500
                                        text-white
                                `
                                : `
                                        cursor-pointer 
                                        hover:bg-blue-500 
                                        hover:text-white 
                                        hover:rounded-t-xl 
                                        p-2.5
                                    `
                            }`}
                    >
                        Pendentes
                    </button>
                </div>

                {/* Conteúdo da aba */}
                <div className="flex flex-col w-full border-l-1 border-r-1 border-b-1 border-slate-300 overflow-y-auto max-h-[520px]">
                    {activeTab === "Concluidos" &&
                        <div className=''>
                            <a
                                href='#'
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
                                <img src='https://placehold.co/600x400' className='max-w-[200px] max-h-[200px]' />
                                <div className='flex items-center gap-10'>
                                    <div className='flex flex-col'>
                                        <span>Nome do produto aqui</span>
                                        <span>Preço do produto aqui</span>
                                    </div>
                                    <FontAwesomeIcon icon={faChevronRight} className='text-slate-400' />
                                </div>
                            </a>
                            <a
                                href='#'
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
                                <img src='https://placehold.co/600x400' className='max-w-[200px] max-h-[200px]' />
                                <div className='flex items-center gap-10'>
                                    <div className='flex flex-col'>
                                        <span>Nome do produto aqui</span>
                                        <span>Preço do produto aqui</span>
                                    </div>
                                    <FontAwesomeIcon icon={faChevronRight} className='text-slate-400' />
                                </div>
                            </a>
                            <a
                                href='#'
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
                                <img src='https://placehold.co/600x400' className='max-w-[200px] max-h-[200px]' />
                                <div className='flex items-center gap-10'>
                                    <div className='flex flex-col'>
                                        <span>Nome do produto aqui</span>
                                        <span>Preço do produto aqui</span>
                                    </div>
                                    <FontAwesomeIcon icon={faChevronRight} className='text-slate-400' />
                                </div>
                            </a>
                            <a
                                href='#'
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
                                <img src='https://placehold.co/600x400' className='max-w-[200px] max-h-[200px]' />
                                <div className='flex items-center gap-10'>
                                    <div className='flex flex-col'>
                                        <span>Nome do produto aqui</span>
                                        <span>Preço do produto aqui</span>
                                    </div>
                                    <FontAwesomeIcon icon={faChevronRight} className='text-slate-400' />
                                </div>
                            </a>
                        </div>
                    }
                    {activeTab === "Pendentes" &&
                        <div>
                            <a
                                href='#'
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
                                <img src='https://placehold.co/600x400' className='max-w-[200px] max-h-[200px]' />
                                <div className='flex items-center gap-10'>
                                    <div className='flex flex-col'>
                                        <span>Nome do produto aqui</span>
                                        <span>Preço do produto aqui</span>
                                    </div>
                                    <FontAwesomeIcon icon={faChevronRight} className='text-slate-400' />
                                </div>
                            </a>

                            <a
                                href='#'
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
                                <img src='https://placehold.co/600x400' className='max-w-[200px] max-h-[200px]' />
                                <div className='flex items-center gap-10'>
                                    <div className='flex flex-col'>
                                        <span>Nome do produto aqui</span>
                                        <span>Preço do produto aqui</span>
                                    </div>
                                    <FontAwesomeIcon icon={faChevronRight} className='text-slate-400' />
                                </div>
                            </a>

                            <a
                                href='#'
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
                                <img src='https://placehold.co/600x400' className='max-w-[200px] max-h-[200px]' />
                                <div className='flex items-center gap-10'>
                                    <div className='flex flex-col'>
                                        <span>Nome do produto aqui</span>
                                        <span>Preço do produto aqui</span>
                                    </div>
                                    <FontAwesomeIcon icon={faChevronRight} className='text-slate-400' />
                                </div>
                            </a>

                            <a
                                href='#'
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
                                <img src='https://placehold.co/600x400' className='max-w-[200px] max-h-[200px]' />
                                <div className='flex items-center gap-10'>
                                    <div className='flex flex-col'>
                                        <span>Nome do produto aqui</span>
                                        <span>Preço do produto aqui</span>
                                    </div>
                                    <FontAwesomeIcon icon={faChevronRight} className='text-slate-400' />
                                </div>
                            </a>

                            <a
                                href='#'
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
                                <img src='https://placehold.co/600x400' className='max-w-[200px] max-h-[200px]' />
                                <div className='flex items-center gap-10'>
                                    <div className='flex flex-col'>
                                        <span>Nome do produto aqui</span>
                                        <span>Preço do produto aqui</span>
                                    </div>
                                    <FontAwesomeIcon icon={faChevronRight} className='text-slate-400' />
                                </div>
                            </a>

                            <a
                                href='#'
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
                                <img src='https://placehold.co/600x400' className='max-w-[200px] max-h-[200px]' />
                                <div className='flex items-center gap-10'>
                                    <div className='flex flex-col'>
                                        <span>Nome do produto aqui</span>
                                        <span>Preço do produto aqui</span>
                                    </div>
                                    <FontAwesomeIcon icon={faChevronRight} className='text-slate-400' />
                                </div>
                            </a>

                            <a
                                href='#'
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
                                <img src='https://placehold.co/600x400' className='max-w-[200px] max-h-[200px]' />
                                <div className='flex items-center gap-10'>
                                    <div className='flex flex-col'>
                                        <span>Nome do produto aqui</span>
                                        <span>Preço do produto aqui</span>
                                    </div>
                                    <FontAwesomeIcon icon={faChevronRight} className='text-slate-400' />
                                </div>
                            </a>

                            <a
                                href='#'
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
                                <img src='https://placehold.co/600x400' className='max-w-[200px] max-h-[200px]' />
                                <div className='flex items-center gap-10'>
                                    <div className='flex flex-col'>
                                        <span>Nome do produto aqui</span>
                                        <span>Preço do produto aqui</span>
                                    </div>
                                    <FontAwesomeIcon icon={faChevronRight} className='text-slate-400' />
                                </div>
                            </a>
                        </div>
                    }
                </div>
            </GenericContainer>

            <Footer type='loja' />
        </div>
    )
}

export default PedidosLoja
