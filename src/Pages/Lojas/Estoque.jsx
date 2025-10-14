import { useState, useEffect } from 'react'

import { ReturnButton, SecondaryButton } from '../../Components/Buttons'
import GenericContainer from '../../Components/Containers'
import { Header } from '../../Components/Titles'
import { faPills, faPlus } from '@fortawesome/free-solid-svg-icons'
import Footer from '../../Components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import api from '../../services/api'

import TabelaEstoque from '../../Components/Tables'

function Estoque() {    

    const id = localStorage.getItem('id_farmacia')
    const [medicamentos, setMedicamentos] = useState([])

    const carregarProdutos = async () => {
        try {
            const response = await api.get(`/produtos/farmacia/${id}`)

            if (!response.data) {
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

    console.log(medicamentos)

    const handleEdit = (item) => {
        localStorage.setItem('id_produto', item._id)
        window.location.href= '/editar-produto'
    };

    const handleDelete = (item) => {
        console.log("Excluir:", item);
        // aqui você pode chamar sua API de delete
    };    

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
            <Footer type='loja' className='fixed' />
        </>
    )
}

export default Estoque
