import { useState, useEffect } from 'react'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { PrimaryButton, ReturnButton } from '../../Components/Buttons'
import { Header } from '../../Components/Titles'
import MaskedInput, { InputField, TextareaField } from '../../Components/Inputs'
import api, { viacep } from '../../services/api'
import AuthForm from '../../Components/Forms'
import { useNavigate } from 'react-router-dom'
import { MaskCNPJ } from '../../utils/masks'

function EditarDadosLoja() {
  const navigate = useNavigate()

  const id = localStorage.getItem('id_farmacia')
  const token = localStorage.getItem('tokenLoja')

  const [nome, setNome] = useState('')
  const [nomeRede, setNomeRede] = useState('')
  const [email, setEmail] = useState('')
  const [cep, setCep] = useState('')
  const [endereco, setEndereco] = useState({
    cidade: '',
    estado: '',
    bairro: '',
    rua: ''
  })
  const [numero, setNumero] = useState('')
  const [complemento, setComplemento] = useState('')

  const [loading, setLoading] = useState(false)

  const carregarDados = async () => {
    try {

      const response = await api.get(`/farma/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const dados = response.data?.farma
      if (dados) {
        // console.log(dados) // * ==> Debug dos dados vindos da api        
        setNome(dados.nome)
        setNomeRede(dados.rede)
        setEmail(dados.email)

        const clear = dados.cep.replace(/\D/g, '')
        setCep(clear)

        setNumero(dados.numero)
        setComplemento(dados.complemento || 'Nenhum')

      }
    } catch (error) {
      alert(`Não foi possível buscar as informações: ${error}`)
    }
  }

  useEffect(() => {
    carregarDados()
  }, [])

  const handleCep = async (numero) => {
    try {
      const response = await viacep.get(`${numero}/json`)
      const data = response.data

      if (data.erro) {
        alert('O cep inserido não foi encontrado!')
        return
      }

      setEndereco({
        cidade: data.localidade,
        estado: data.uf,
        bairro: data.bairro,
        rua: data.logradouro
      })
    } catch (error) {
      console.error(`Não foi possível buscar o CEP: ${error}`)
    }

  }

  useEffect(() => {
    if (cep.length === 8) {
      handleCep(cep)
    }
  }, [cep])

  const handleEdicao = async () => {
    setLoading(true)
    try {
      console.log('Dados sendo enviados:', {
        nome,
        rede: nomeRede,
        email,
        rua: endereco.rua,
        bairro: endereco.bairro,
        numero: numero, // ← Verifique se tem valor aqui
        cep,
        uf: endereco.estado,
        cidade: endereco.cidade
      })
      await api.patch(`/farma/${id}`,
        {
          nome,
          rede: nomeRede,
          email,
          rua: endereco.rua,
          bairro: endereco.bairro,
          numero: numero,
          cep,
          uf: endereco.estado,
          cidade: endereco.cidade
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
    } catch (error) {
      console.log(`Não foi possível realizar a edição dos dados: ${error}`)
    }
    setLoading(false)
    navigate('/configuracoes/lojas')
  }

  return (
    <>
      <div className='p-5'>
        <ReturnButton />
        <Header text={'Editar informações'} icon={faPencil} iconClassName={'text-md'} divClassName={'mt-3'} />

        <AuthForm divClassName={'mt-5'} formClassName={'p-4 gap-4'}>
          <InputField
            labelText='Nome:'
            type='text'
            value={nome}
            divClassName='
              m-auto 
              xl:m-auto 
              md:m-auto 
              w-full 
              xl:w-[60%] 
              md:w-[60%] 
              sm:w-full
            '
            onChange={(e) => setNome(e.target.value)}
            required
          />
          <InputField
            labelText='Nome da rede:'
            type='text'
            value={nomeRede}
            divClassName='
              m-auto 
              xl:m-auto 
              md:m-auto 
              w-full 
              xl:w-[60%] 
              md:w-[60%] 
              sm:w-full
            '
            onChange={(e) => setNomeRede(e.target.value)}
            required
          />
          <InputField
            labelText='E-mail:'
            type='email'
            value={email}
            divClassName='
              m-auto 
              xl:m-auto 
              md:m-auto 
              w-full 
              xl:w-[60%] 
              md:w-[60%] 
              sm:w-full
            '
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <MaskedInput
            labelText='CEP:'
            type='text'
            mask='cep'
            value={cep}
            divClassName='
              m-auto 
              xl:m-auto 
              md:m-auto 
              w-full 
              xl:w-[60%] 
              md:w-[60%] 
              sm:w-full
            '
            onValueChange={(clean, masked) => { setCep(clean) }}
            maxLength={9}
            required
          />
          <InputField
            labelText='Cidade:'
            type='text'
            divClassName='
              m-auto 
              xl:m-auto 
              md:m-auto 
              w-full 
              xl:w-[60%] 
              md:w-[60%] 
              sm:w-full              
            '
            inputClassName={'bg-slate-200'}
            value={endereco.cidade}
            disabled
            required
          />
          <InputField
            labelText='Estado:'
            type='text'
            divClassName='
              m-auto 
              xl:m-auto 
              md:m-auto 
              w-full 
              xl:w-[60%] 
              md:w-[60%] 
              sm:w-full              
            '
            value={endereco.estado}
            inputClassName={'bg-slate-200'}
            disabled
            required
          />
          <InputField
            labelText='Bairro:'
            type='text'
            divClassName='
              m-auto 
              xl:m-auto 
              md:m-auto 
              w-full 
              xl:w-[60%] 
              md:w-[60%] 
              sm:w-full              
            '
            value={endereco.bairro}
            inputClassName={'bg-slate-200'}
            disabled
            required
          />
          <InputField
            labelText='Rua:'
            type='text'
            divClassName='
              m-auto 
              xl:m-auto 
              md:m-auto 
              w-full 
              xl:w-[60%] 
              md:w-[60%] 
              sm:w-full              
            '
            value={endereco.rua}
            inputClassName={'bg-slate-200'}
            disabled
            required
          />
          <InputField
            labelText='Número:'
            type='text'
            value={numero}
            divClassName='
              m-auto 
              xl:m-auto 
              md:m-auto 
              w-full 
              xl:w-[60%] 
              md:w-[60%] 
              sm:w-full              
            '
            onChange={(e) => setNumero(e.target.value)}
            required
          />
          <TextareaField
            labelText='Complemento (Opcional):'
            type='text'
            divClassName='
              m-auto 
              xl:m-auto 
              md:m-auto 
              w-full 
              xl:w-[60%] 
              md:w-[60%] 
              sm:w-full              
            '
            onChange={(e) => setComplemento(e.target.value)}
            placeholder='Bloco 10, Ap 220'
            value={complemento === 'Nenhum' ? '' : complemento}
          />
          <PrimaryButton link={false} className='w-full xl:mx-auto xl:w-[60%] md:w-[60%] md:mx-auto' type='submit' onClick={handleEdicao} disabled={loading}>
            <span className="text-xl">{loading ? 'Carregando...' : 'Editar'}</span>
          </PrimaryButton>
        </AuthForm>
      </div>

    </>
  )
}

export default EditarDadosLoja
