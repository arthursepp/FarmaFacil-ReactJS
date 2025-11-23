import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { PrimaryButton, PrimaryDangerButton, SecondaryDangerButton } from '../../Components/Buttons'
import { CardContainer } from '../../Components/Containers'
import Footer from '../../Components/Footer'
import { Header, SecondaryText, TerciaryText } from '../../Components/Titles'
import { faPencil, faSignOut, faTrash, faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import GenericModal from '../../Components/Modals'
import { InputField } from '../../Components/Inputs'
import api from '../../services/api'
import { MaskCNPJ } from '../../utils/masks'

function ConfiguracoesLoja() {
  const navigate = useNavigate()
  const id = localStorage.getItem('id_farmacia')
  const token = localStorage.getItem('tokenLoja')
  const [cnpj, setCnpj] = useState('')
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [endereco, setEndereco] = useState('')
  const [complemento, setComplemento] = useState('')

  const [showModal, setShowModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const [deleteLoading, setDeleteLoading] = useState(false)

  const handleConfirmDelete = async () => {
    setShowModal(false)
    try {
      const id = await localStorage.getItem('id_farmacia')
      api.delete(`farma/${id}`)
      alert('Sua conta foi excluída com sucesso.')
      localStorage.removeItem('id_farmacia')
      localStorage.removeItem('tokenLoja')
      navigate('/')
    } catch (error) {
      alert(`Não foi possível deletar sua conta: ${error}`)
    } finally {
      setLoading(false)
    }
  }

  function handleLogout() {
    setDeleteLoading(true)
    localStorage.removeItem('tokenLoja')
    localStorage.removeItem('id_farmacia')
    setDeleteLoading(false)
    navigate('/')
  }

  const carregarDados = async () => {
    try {

      const response = await api.get(`/farma/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const dados = response.data?.farma
      if (dados) {
        setCnpj(dados.cnpj)
        setNome(dados.nome)
        setEmail(dados.email)
        setEndereco(`${dados.rua}, ${dados.numero} - ${dados.bairro}, ${dados.cidade}`)
        if (dados.complemento) {
          setComplemento(dados.complemento)
        } else {
          setComplemento('Nenhum')
        }
      }
    } catch (error) {
      alert(`Não foi possível buscar as informações: ${error}`)
    }
  }

  useEffect(() => {
    carregarDados()
  }, [])

  return (
    <>
      <div className='p-5'>
        <Header text={'Configurações'} icon={faGear} iconClassName='text-2xl' />

        <CardContainer
          className='
            border-primaryblue 
            p-3 
            mt-3 
            xl:max-h-[450px]
            md:max-h-[450px]
            max-h-[460px]
            overflow-y-auto
            gap-5
          '
        >
          <ul className='flex flex-col gap-3'>
            <li><span>Cnpj: {cnpj ? MaskCNPJ(cnpj) : 'Carregando'}</span></li>
            <li><span>Nome: {nome ? nome : 'Carregando'}</span></li>
            <li><span>E-mail: {email ? email : 'Carregando'}</span></li>
            <li className='flex flex-col'>
              <span>Endereço:</span>
              <span>{endereco ? endereco : 'Carregando'}</span>
            </li>
            <li><span>Complemento: {complemento}</span></li>
          </ul>
          <hr className='border-slate-400' />
          <div className='flex flex-col w-full xl:w-[75%] md:w-[70%] m-auto'>

            <PrimaryButton className='flex items-center gap-3 justify-center' link={true} url='/editar/lojas'>
              <span>Editar informações</span>
              <FontAwesomeIcon icon={faPencil} />
            </PrimaryButton>

            <SecondaryDangerButton className='flex items-center gap-3 justify-center' onClick={handleLogout}>
              <span>{loading ? 'Carregando...' : 'Sair'}</span>
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
          rightBtnClassName="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 cursor-pointer"
          leftBtnClassName="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 cursor-pointer"
          loading={deleteLoading}
          confirmText={deleteLoading ? 'Carregando...' : 'Sim, deletar'}
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
