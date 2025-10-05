import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { PrimaryButton, ReturnButton } from '../../Components/Buttons'
import { CardContainer } from '../../Components/Containers'
import Footer from '../../Components/Footer'
import { Header } from '../../Components/Titles'
import MaskedInput, { InputField, TextareaField } from '../../Components/Inputs'

function EditarDadosLoja() {
  return (
    <>
      <div className='p-5'>
        <ReturnButton />
        <Header text={'Editar informações'} icon={faPencil} iconClassName={'text-md'} divClassName={'mt-3'} />

        <CardContainer className='mt-3 border-blue-500 p-2 gap-3'>
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
            disabled
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
            inputClassName={'bg-slate-200'}
            disabled
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
            inputClassName={'bg-slate-200'}
            disabled
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
            inputClassName={'bg-slate-200'}
            disabled
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
          <PrimaryButton className='w-full xl:mx-auto xl:w-[60%] md:w-[60%] md:mx-auto'>
            <span className="text-xl">Enviar</span>
          </PrimaryButton>
        </CardContainer>
      </div>
      
    </>
  )
}

export default EditarDadosLoja
