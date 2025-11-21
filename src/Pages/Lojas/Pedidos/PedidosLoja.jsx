import { SecondaryText } from '../../../Components/Titles'
import Footer from '../../../Components/Footer'
import { ReturnButton } from '../../../Components/Buttons'
import PedidoComponent from '../../../Components/Pedidos'
import GenericTabs from '../../../Components/Tabs'
import api from '../../../services/api'
import { useState, useEffect } from 'react'


function PedidosLoja() {

    const id_farmacia = localStorage.getItem('id_farmacia')
    const [pedidos, setPedidos] = useState([])
    const [concluidos, setConcluidos] = useState([])
    const [pendentes, setPendentes] = useState([])

    const carregarPedidos = async () => {
        try {
            const response = await api.get(`/pedidos/farmacia/${id_farmacia}`)
            setPedidos(response.data)
        } catch (error) {
            if (error.response?.status === 404) {
                setPedidos([])
                return
            }
            alert(`Não foi possível buscar os pedidos: ${error}`)
        }
    }

    useEffect(() => {
        carregarPedidos()
    }, [])

    useEffect(() => {
        setConcluidos(pedidos.filter((p) => p.status === 'Concluido'))
        setPendentes(pedidos.filter((p) => p.status === 'Pendente'))
    }, [pedidos])

    const tabs = [
        {
            id: "Concluidos",
            label: "Concluídos",
            content: (
                <div>
                    {concluidos.length === 0 ? (
                        <p className='p-5'>Nenhum pedido concluído.</p>
                    ) : (
                        concluidos.map((pedido) => (
                            <PedidoComponent
                                key={pedido._id}
                                url={`/pedidos/lojas/detalhes`}
                                imageUrl="https://placehold.co/600x400"
                                nomeProduto={`Pedido ${pedido._id}`}
                                precoProduto={`R$ ${parseFloat(pedido.precoTotal).toFixed(2)}`}
                                pedido={pedido}
                                onClick={() => localStorage.setItem('id_pedido', pedido._id)}
                            />
                        ))
                    )}
                </div>
            )
        },
        {
            id: "Pendentes",
            label: "Pendentes",
            content: (
                <div>
                    {pendentes.length === 0 ? (
                        <p className='p-5'>Nenhum pedido pendente.</p>
                    ) : (
                        pendentes.map((pedido) => (
                            <PedidoComponent
                                key={pedido._id}
                                url={`/pedidos/lojas/detalhes`}
                                imageUrl="https://placehold.co/600x400"
                                nomeProduto={`Pedido ${pedido._id}`}
                                precoProduto={`R$ ${parseFloat(pedido.precoTotal).toFixed(2)}`}
                                pedido={pedido}
                                onClick={() => localStorage.setItem('id_pedido', pedido._id)}
                            />
                        ))
                    )}
                </div>
            )
        }
    ]

    return (
        <>
            <div className='p-5'>                
                <SecondaryText text='Seus pedidos' className={'text-black my-4'} />
                <GenericTabs
                    tabs={tabs}
                    defaultActive={'Concluidos'}
                    className='                        
                        xl:max-h-[480px]
                        md:max-h-[390px]
                        max-h-[400px]
                    '
                />
            </div>
            <Footer type='loja' className='fixed' />
        </>
    )
}

export default PedidosLoja
