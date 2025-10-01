import { SecondaryText } from '../../../Components/Titles'
import Footer from '../../../Components/Footer'
import { ReturnButton } from '../../../Components/Buttons'
import PedidoComponent from '../../../Components/Pedidos'
import GenericTabs from '../../../Components/Tabs'

function PedidosLoja() {
    const tabs = [
        {
            id: "Concluidos",
            label: "Concluídos",
            content: (
                <div>
                    <PedidoComponent
                        url="/pedidos/lojas/detalhes"
                        imageUrl="https://placehold.co/600x400"
                        nomeProduto="Produto concluído 1"
                        precoProduto="R$ 100,00"
                    />
                    <PedidoComponent
                        url="/pedidos/lojas/detalhes"
                        imageUrl="https://placehold.co/600x400"
                        nomeProduto="Produto concluído 2"
                        precoProduto="R$ 200,00"
                    />
                    <PedidoComponent
                        url="/pedidos/lojas/detalhes"
                        imageUrl="https://placehold.co/600x400"
                        nomeProduto="Produto concluído 2"
                        precoProduto="R$ 200,00"
                    />
                    <PedidoComponent
                        url="/pedidos/lojas/detalhes"
                        imageUrl="https://placehold.co/600x400"
                        nomeProduto="Produto concluído 2"
                        precoProduto="R$ 200,00"
                    />
                </div>
            )
        },
        {
            id: "Pendentes",
            label: "Pendentes",
            content: (
                <div>
                    <PedidoComponent
                        url="/pedidos/lojas/detalhes"
                        imageUrl="https://placehold.co/600x400"
                        nomeProduto="Produto pendente"
                        precoProduto="R$ 150,00"
                    />
                </div>
            )
        }
    ]

    return (
        <>
            <div className='p-5'>
                <ReturnButton />
                <SecondaryText text='Seus pedidos' className={'text-black my-4'} />
                <GenericTabs 
                    tabs={tabs} 
                    defaultActive={'Concluidos'} 
                    className='
                        xl:max-h-[400px]
                        md:max-h-[350px]
                        max-h-[350px]
                    '
                />
            </div>
            <Footer type='loja' className='fixed' />
        </>
    )
}

export default PedidosLoja
