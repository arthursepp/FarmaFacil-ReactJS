
import { NavbarNotSigned } from "../../../Components/Navbar"
import { PrimaryText } from "../../../Components/Titles"
import InputField from "../../../Components/InputField"
import { PrimaryButton } from "../../../Components/Buttons"
import Form from "../../../Components/Form"

function LoginClientes() {
  return (
    <div>
      <NavbarNotSigned linkType={'cadastro'} />
      
      <PrimaryText text='Login' classes='text-center mt-8' />

      <div className='flex items-center justify-center mt-10'>
        <Form action="">          
          <InputField type='email' label="E-mail" placeholder="seuemail@dominio.com" />
          <InputField type='password' label='Senha' placeholder="MinhaSenha123" />
          <PrimaryButton text='Logar' type='submit' />
        </Form>
      </div>
    </div>
  )
}

export default LoginClientes
