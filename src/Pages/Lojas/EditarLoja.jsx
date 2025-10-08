import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { PrimaryButton, ReturnButton } from '../../Components/Buttons'
import { CardContainer } from '../../Components/Containers'
import Footer from '../../Components/Footer'
import { Header } from '../../Components/Titles'
import MaskedInput, { InputField, TextareaField } from '../../Components/Inputs'
import { viacep } from '../../services/api'
import { useState } from 'react'
import AuthForm from '../../Components/Forms'

function EditarDadosLoja() {

  const [cnpj, setCnpj] = useState('')
  const [nome, setNome] = useState('')
  const [nomeRede, setNomeRede] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [cep, setCep] = useState('')
  const [endereco, setEndereco] = useState({
    cidade: '',
    estado: '',
    bairro: '',
    rua: '',
  })

  const handleCep = async (maskedCep) => {
    setCep(maskedCep)

    if (maskedCep.length === 8) {
      try {
        const response = await viacep.get(`${maskedCep}/json/`)
        const consulta = {
          cidade: response.data.localidade,
          estado: response.data.uf,
          bairro: response.data.bairro,
          rua: response.data.logradouro
        }
        setEndereco(consulta)                
      } catch (error) {
        console.error(`Não foi possível pesquisar o cep: ${error}`)
      }
    }
  }  

  return (
    <>
      <div className='p-5'>
        <ReturnButton />
        <Header text={'Editar informações'} icon={faPencil} iconClassName={'text-md'} divClassName={'mt-3'} />

        <AuthForm formClassName={'p-4 gap-4'}>
          <MaskedInput
            labelText='CNPJ:'
            type='text'
            name='cnpj'
            mask='cnpj'
            divClassName='              
              m-auto
              xl:m-auto
              md:m-auto
              w-full 
              xl:w-[60%] 
              md:w-[60%] 
              sm:w-full
            '
            maxLength={18}
            required
          />
          <InputField
            labelText='Nome:'
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
            required
          />
          <InputField
            labelText='Nome da rede:'
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
            required
          />
          <MaskedInput
            labelText='Telefone'
            mask='phone'
            divClassName='
              m-auto 
              xl:m-auto 
              md:m-auto 
              w-full 
              xl:w-[60%] 
              md:w-[60%] 
              sm:w-full
            '
            required
          />
          <InputField
            labelText='E-mail:'
            type='email'
            divClassName='
              m-auto 
              xl:m-auto 
              md:m-auto 
              w-full 
              xl:w-[60%] 
              md:w-[60%] 
              sm:w-full
            '
            required
          />
          <InputField
            labelText='Senha:'
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
            required
          />
          <MaskedInput
            labelText='CEP:'
            type='text'
            mask='cep'
            divClassName='
              m-auto 
              xl:m-auto 
              md:m-auto 
              w-full 
              xl:w-[60%] 
              md:w-[60%] 
              sm:w-full
            '
            onValueChange={handleCep}
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
            divClassName='
              m-auto 
              xl:m-auto 
              md:m-auto 
              w-full 
              xl:w-[60%] 
              md:w-[60%] 
              sm:w-full              
            '
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
          />
          <PrimaryButton link={false} className='w-full xl:mx-auto xl:w-[60%] md:w-[60%] md:mx-auto' type='submit'>
            <span className="text-xl">Enviar</span>
          </PrimaryButton>
        </AuthForm>
      </div>

    </>
  )
}

export default EditarDadosLoja
