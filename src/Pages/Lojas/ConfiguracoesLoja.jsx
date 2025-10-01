import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PrimaryButton, PrimaryDangerButton, SecondaryDangerButton } from '../../Components/Buttons'
import GenericContainer, { CardContainer } from '../../Components/Containers'
import Footer from '../../Components/Footer'
import { Header, SecondaryText, TerciaryText } from '../../Components/Titles'
import { faPencil, faSignOut, faTrash, faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import GenericModal from '../../Components/Modals'

function ConfiguracoesLoja() {
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)

  function handleConfirmDelete() {
    setShowModal(false)
    navigate('/') // redireciona para a rota /
  }

  return (
    <>
      <div className='p-5'>
        <Header text={'Configurações'} icon={faGear} iconClassName='text-2xl' />

        <CardContainer
          className='
            border-blue-500 
            p-3 
            mt-3 
            xl:max-h-[450px]
            md:max-h-[450px]
            max-h-[450px]
            overflow-y-auto
            gap-5
          '
        >
          <ul className='flex flex-col gap-3'>
            <li><span>Nome: {'{Nome do usuário}'}</span></li>
            <li><span>E-mail: {'{E-mail do usuário}'}</span></li>
            <li><span>Telefone: {'{Telefone do usuário}'}</span></li>
            <li><span>Endereço: {'{Endereço do usuário}'}</span></li>
            <li><span>Complemento: {'{Complemento do endereço}'}</span></li>
          </ul>
          <hr className='border-slate-400' />
          <div className='flex flex-col w-full xl:w-[75%] md:w-[70%] m-auto'>

            <PrimaryButton className='flex items-center gap-3 justify-center'>
              <span>Editar informações</span>
              <FontAwesomeIcon icon={faPencil} />
            </PrimaryButton>

            <SecondaryDangerButton className='flex items-center gap-3 justify-center'>
              <span>Sair</span>
              <FontAwesomeIcon icon={faSignOut} />
            </SecondaryDangerButton>

            <PrimaryDangerButton
              onClick={() => setShowModal(true)}
              className='flex items-center gap-3 justify-center'
            >
              <span>Excluir conta</span>
              <FontAwesomeIcon icon={faTrash} />
            </PrimaryDangerButton>

          </div>
        </CardContainer>


        <GenericModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onConfirm={handleConfirmDelete}
          title="Tem certeza que deseja deletar sua conta?"
          rightBtnClassName="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          leftBtnClassName="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
          loading={loading}
          confirmText="Sim, deletar"
          cancelText="Não, voltar"
        >
          <p className="text-gray-600">
            Esta ação não poderá ser desfeita.
          </p>
        </GenericModal>
      </div>
      <Footer type={'loja'} className='fixed' />
    </>
  )
}

export default ConfiguracoesLoja
