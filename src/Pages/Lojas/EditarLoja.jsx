
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { PrimaryButton, ReturnButton } from '../../Components/Buttons'
import GenericContainer from '../../Components/Containers'
import Footer from '../../Components/Footer'
import { SecondaryText } from '../../Components/Titles'
import InputField from '../../Components/InputField'

function EditarDadosLoja() {
  return (
    <div>
      <GenericContainer>
        <ReturnButton />
        <div className="flex gap-3 items-center mt-5">
          <SecondaryText text='Editar informações' />
          <FontAwesomeIcon icon={faPencil} className='text-2xl' />
        </div>

        <div
          className='
              border
              p-5
              border-gray-400
              flex
              flex-col
              overflow-auto              
              max-h-[550px]
              gap-4              
              rounded-xl
              mt-5
            '
        >
          <InputField
            label='CNPJ:'
            type='text'
            labelClassName='text-xl font-bold'
            inputClassName='
              border-2
              border-blue-500
              rounded-xl
              outline-none
              p-2
            '
          />
          <InputField
            label='Nome:'
            type='text'
            labelClassName='text-xl font-bold'
            inputClassName='
              border-2
              border-blue-500
              rounded-xl
              outline-none
              p-2
            '
          />
          <InputField
            label='Nome da rede:'
            type='text'
            labelClassName='text-xl font-bold'
            inputClassName='
              border-2
              border-blue-500
              rounded-xl
              outline-none
              p-2
            '
          />
          <InputField
            label='E-mail:'
            type='text'
            labelClassName='text-xl font-bold'
            inputClassName='
              border-2
              border-blue-500
              rounded-xl
              outline-none
              p-2
            '
          />
          <InputField
            label='Senha:'
            type='text'
            labelClassName='text-xl font-bold'
            inputClassName='
              border-2
              border-blue-500
              rounded-xl
              outline-none
              p-2
            '
          />
          <InputField
            label='CEP:'
            type='text'
            labelClassName='text-xl font-bold'
            inputClassName='
              border-2
              border-blue-500
              rounded-xl
              outline-none
              p-2
            '
          />
          <InputField
            label='Estado:'
            type='text'
            labelClassName='text-xl font-bold'
            inputClassName='
                border-2
                border-blue-500
                rounded-xl
                outline-none
                p-2
              '
          />
          <InputField
            label='Cidade:'
            type='text'
            labelClassName='text-xl font-bold'
            inputClassName='
                border-2
                border-blue-500
                rounded-xl
                outline-none
                p-2
              '
          />
          <InputField
            label='Bairro:'
            type='text'
            labelClassName='text-xl font-bold'
            inputClassName='
                border-2
                border-blue-500
                rounded-xl
                outline-none
                p-2
              '
          />
          <InputField
            label='Rua:'
            type='text'
            labelClassName='text-xl font-bold'
            inputClassName='
              border-2
              border-blue-500
              rounded-xl
              outline-none
              p-2
            '
          />
          <InputField
            label='Número:'
            type='text'
            labelClassName='text-xl font-bold'
            inputClassName='
              border-2
              border-blue-500
              rounded-xl
              outline-none
              p-2
            '
          />
          <InputField
            label='Complemento (Opcional):'
            type='text'
            labelClassName='text-xl font-bold'
            inputClassName='
              border-2
              border-blue-500
              rounded-xl
              outline-none
              p-2
            '
          />
          <div className='w-full flex'>
            <PrimaryButton className='w-[50%] my-auto mx-auto'>
              <span className="text-xl">Enviar</span>
            </PrimaryButton>
          </div>
        </div>
      </GenericContainer>
      <Footer type={'loja'} />
    </div>
  )
}

export default EditarDadosLoja
