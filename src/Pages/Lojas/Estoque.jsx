import { useState, useEffect } from 'react'

import { ReturnButton, SecondaryButton } from '../../Components/Buttons'
import GenericContainer from '../../Components/Containers'
import { Header } from '../../Components/Titles'
import { faPills, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'
import Footer from '../../Components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import api from '../../services/api'

import TabelaEstoque from '../../Components/Tables'

function Estoque() {    

    const id = localStorage.getItem('id_farmacia')
    const [medicamentos, setMedicamentos] = useState([])
    const [modalOpen, setModalOpen] = useState(false)
    const [produtoParaDeletar, setProdutoParaDeletar] = useState(null)

    const carregarProdutos = async () => {
        try {
            const response = await api.get(`/produtos/farmacia/${id}`)

            if (!response.data) {
                if (error.response?.status === 404) {
                    setMedicamentos([])
                    return
                }
                alert('Não foi possível buscar os dados.')
                return
            }

            const data = response.data            
            
            setMedicamentos(data)
            
        } catch (error) {
            alert(`Não foi possível buscar os seus produtos: ${error}`)
        }
    }

    useEffect(() => {
        carregarProdutos()
    }, [])

    const handleEdit = (item) => {
        localStorage.setItem('id_produto', item._id)
        window.location.href= '/editar-produto'
    };

    const handleDelete = (item) => {
        setProdutoParaDeletar(item)
        setModalOpen(true)
    };    

    const confirmarDelecao = async () => {
        try {
            await api.delete(`/produtos/${produtoParaDeletar._id}`)

            setMedicamentos(medicamentos.filter(med => med._id !== produtoParaDeletar._id))

            setModalOpen(false)
            setProdutoParaDeletar(null)

            alert('O item foi excluído com sucesso')
        } catch (error) {
            alert(`Não foi possível deletar este item: ${error}`)
        }
    }

    const cancelarDelecao = () => {
        setModalOpen(false)
        setProdutoParaDeletar(null)
    }

    return (
        <>
            <GenericContainer>
                <ReturnButton />
                <div className='flex items-center justify-between'>
                    <Header text={'Estoque'} divClassName={'mt-2'} icon={faPills} iconClassName={'text-2xl'} />
                    <SecondaryButton link={true} className='flex items-center gap-3' url='/adicionar-produto'>
                        <span className='hidden sm:hidden md:block xl:block'>Adicionar produto</span>
                        <FontAwesomeIcon icon={faPlus} />
                    </SecondaryButton>
                </div>               
                

                <TabelaEstoque
                    dados={medicamentos}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />

            </GenericContainer>

            <Modal 
                isOpen={modalOpen}
                onClose={cancelarDelecao}
                onConfirm={confirmarDelecao}
                title="Confirmar Exclusão"
                message={`
                    Tem certeza que deseja excluir o produto "${produtoParaDeletar?.nome}"? Esta ação não pode ser desfeita.
                `}
                confirmText="Excluir"
                cancelText="Cancelar"
            />

            <Footer type='loja' className='fixed' />
        </>
    )
}

function Modal({ isOpen, onClose, onConfirm, title, message, confirmText = "Confirmar", cancelText = "Cancelar" }) {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full mx-4">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-800">{title}</h3>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>
                
                <p className="text-gray-600 mb-6">{message}</p>
                
                <div className="flex gap-3 justify-end">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
                    >
                        {cancelText}
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                    >
                        {confirmText}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Estoque
