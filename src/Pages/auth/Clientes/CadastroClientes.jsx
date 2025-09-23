import InputField from "../../../Components/InputField"
import { PrimaryText } from "../../../Components/Titles"
import Form from "../../../Components/Form"
import { PrimaryButton } from '../../../Components/Buttons'
import { NavbarNotSigned } from "../../../Components/Navbar"

function CadastroClientes() {
  return (
    <div>
      <NavbarNotSigned linkType='login' />

      <PrimaryText text='Cadastro' className='text-center mt-8' />

      <div className='flex items-center justify-center mt-10'>
        <Form action="" className='cadastro-form'>
          <InputField type='text' label="Nome" placeholder="Arthur" />
          <InputField type='email' label="E-mail" placeholder="seuemail@dominio.com" />
          <InputField type='password' label="Senha" placeholder="MinhaSenha123" />
          <InputField type='password' label='Repita a senha' placeholder="MinhaSenha123" />
          <PrimaryButton text='Cadastrar' type='submit' />
        </Form>
      </div>
    </div>
  )
}

export default CadastroClientes
