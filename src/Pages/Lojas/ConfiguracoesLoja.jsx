import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PrimaryButton, PrimaryDangerButton, SecondaryDangerButton } from '../../Components/Buttons'
import GenericContainer from '../../Components/Containers'
import Footer from '../../Components/Footer'
import { SecondaryText, TerciaryText } from '../../Components/Titles'
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
    <div>
      <GenericContainer className='h-screen'>
        <div className='flex items-center gap-3'>
          <SecondaryText text={'Configurações'} />
          <FontAwesomeIcon icon={faGear} className='text-2xl' />
        </div>

        <div
          className='
              border
              p-5
              border-gray-400
              flex
              flex-col              
              overflow-auto              
              gap-6
              h-[70%]
              rounded-xl
              mt-5
            '
        >
          <div className='flex flex-col gap-5'>
            <TerciaryText text={'Nome do usuário'} />
            <div className='flex flex-col gap-3 mt-2'>
              <span>E-mail: meuemailgenerico@dominio.com</span>
              <span>Telefone: 11 9 87654-3210</span>
              <span>Endereço: Av das farmácias Nº 19999</span>
              <span>Complemento: N/A</span>
            </div>

            <PrimaryButton
              link={true}
              url={'/editar/lojas'}
              className={'w-[50%] mx-auto mt-10 flex items-center justify-center gap-5'}
            >
              <span className="text-xl">Editar informações</span>
              <FontAwesomeIcon icon={faPencil} />
            </PrimaryButton>
          </div>

          <hr className='border-1 border-gray-400' />

          <div className='flex flex-col gap-3 w-[50%] mx-auto '>
            <SecondaryDangerButton className={'flex items-center justify-center gap-5'}>
              <span className='text-xl'>Sair</span>
              <FontAwesomeIcon icon={faSignOut} />
            </SecondaryDangerButton>

            {/* Botão que abre o modal */}
            <PrimaryDangerButton
              onClick={() => setShowModal(true)}
              className={'flex items-center justify-center gap-5'}
            >
              <span className="text-xl">Deletar conta</span>
              <FontAwesomeIcon icon={faTrash} />
            </PrimaryDangerButton>
          </div>
        </div>
      </GenericContainer>

      <Footer type={'loja'} />

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
  )
}

export default ConfiguracoesLoja
