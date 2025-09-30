import { PrimaryButton, PrimaryDangerButton, ReturnButton, SecondaryButton } from '../../Components/Buttons'
import GenericContainer from '../../Components/Containers'
import { Header } from '../../Components/Titles'
import { faPills, faPlus, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import GenericTable from '../../Components/Tables'
import Footer from '../../Components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Estoque() {

    const cols = [        
        { header: 'Nome', accessor: 'name' },
        { header: 'Estoque', accessor: 'estoque' },
        { header: 'Qtd vendida', accessor: 'qtdVendas' },        
        {
            header: 'Ações',
            accessor: () => (
                <div className='flex gap-4 items-center justify-center'>
                    <PrimaryButton href='editar-produto/' link={true} title='Editar este produto' >
                        <FontAwesomeIcon icon={faPencil} />
                    </PrimaryButton>
                    <PrimaryDangerButton href='#' link={true} title='Deletar este produto'>
                        <FontAwesomeIcon icon={faTrash} />
                    </PrimaryDangerButton>
                </div>
            )
        }
    ]

    const data = [
        { name: "Arthur Sepp", estoque: "arthur@email.com", qtdVendas: '10' },
        { name: "Maria Silva", email: "maria@email.com" },
        { name: "João Souza", email: "joao@email.com" },
    ];

    return (
        <div>
            <GenericContainer>
                <ReturnButton />
                <div className='flex items-center justify-between mt-3'>                   
                    <Header text='Seus produtos' icon={faPills} iconClassName={'text-2xl'}/>
                    <SecondaryButton link={true} className={'flex items-center gap-3'} url={'adicionar-produto/'} >
                        <span className='text-xl'>Adicionar novo produto</span>
                        <FontAwesomeIcon icon={faPlus} />
                    </SecondaryButton>
                </div>

                <GenericTable columns={cols} data={data} divClassName='mt-4' />
            </GenericContainer>
            <Footer type='loja' />
        </div>
    )
}

export default Estoque
