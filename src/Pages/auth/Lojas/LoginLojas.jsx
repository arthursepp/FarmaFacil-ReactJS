import { PrimaryButton, ReturnButton } from "../../../Components/Buttons"
import AuthForm from "../../../Components/Forms"
import MaskedInput, { InputField } from "../../../Components/Inputs"
import { GenericLink } from "../../../Components/Links"
import { SecondaryText } from "../../../Components/Titles"

function LoginLojas() {
    return (
        <div className='p-5'>
            <ReturnButton />
            <div className='flex flex-col items-center justify-center mt-4'>
                <AuthForm divClassName='p-5 w-full xl:w-[50%] md:w-[50%] sm:w-full' formClassName={'gap-3'}>
                    <SecondaryText text='Login' className='text-center' />
                    <InputField labelText='E-mail' type='email' required />
                    <MaskedInput labelText='CNPJ' mask={'cnpj'} maxLength={18} required />
                    <InputField labelText='Senha' type='password' required />
                    <div className='flex flex-col items-center justify-center mt-5 gap-5'>
                        <PrimaryButton className='w-full xl:w-[60%]' type='submit'>
                            <span>Login</span>
                        </PrimaryButton>
                        <GenericLink url='/cadastro/lojas'>
                            <span className='text-xl'>Não tenho cadastro</span>
                        </GenericLink>
                    </div>
                </AuthForm>
            </div>
        </div>
    )
}

export default LoginLojas
