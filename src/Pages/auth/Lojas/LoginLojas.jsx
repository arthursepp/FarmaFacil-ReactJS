import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { PrimaryButton, ReturnButton } from "../../../Components/Buttons"
import GenericContainer from "../../../Components/Containers"
import AuthForm from "../../../Components/Forms"
import MaskedInput, { InputField } from "../../../Components/Inputs"
import { GenericLink } from "../../../Components/Links"
import { SecondaryText } from "../../../Components/Titles"
import api from "../../../services/api"

function LoginLojas() {

    const navigate = useNavigate()

    const [cnpj, setCnpj] = useState('')
    const [senha, setSenha] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleLogin = async (e) => {
        e.preventDefault()

        if (!cnpj || !senha) {
            setError('Todos os campos são obrigatórios!')
            return
        }

        setLoading(true)
        setError('')

        try {
            const response = await api.post('farma/auth/login', { cnpj, senha })
            
            if (response.data?.token) {
                localStorage.setItem('tokenLoja', response.data.token)
                localStorage.setItem('id_farmacia', response.data.farma_id)
                window.location.href = '/home/lojas'
            } else {
                setError(response.data?.msg || 'Erro ao fazer login')
            }
        } catch (error) {
            console.error('Erro no login:', error)
            setError(error.response?.data?.msg || 'CNPJ ou senha incorretos. Tente novamente.')
        } finally {
            setLoading(false)
        }
    }    

    return (
        <GenericContainer className='p-5'>
            <ReturnButton />
            <GenericContainer className='justify-center items-center'>
                <AuthForm
                    divClassName='p-5 w-full xl:w-[50%] md:w-[50%] sm:w-full'
                    formClassName={'gap-3'}
                    onSubmit={handleLogin}
                >
                    <SecondaryText text='Login' className='text-center' />
                    
                    <MaskedInput 
                        labelText='CNPJ' 
                        mask={'cnpj'} 
                        maxLength={18} 
                        required 
                        value={cnpj}
                        onValueChange={(cleanValue) => setCnpj(cleanValue)} 
                    />
                    
                    <InputField 
                        labelText='Senha' 
                        type='password' 
                        required 
                        value={senha} 
                        onChange={(e) => setSenha(e.target.value)} 
                    />
                    
                    {error && (
                        <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-center'>
                            {error}
                        </div>
                    )}
                    
                    <div className='flex flex-col items-center justify-center mt-5 gap-5'>
                        <PrimaryButton className='w-full xl:w-[60%]' type='submit' disabled={loading}>
                            <span>{loading ? 'Carregando...' : 'Login'}</span>
                        </PrimaryButton>
                        <GenericLink url='/cadastro/lojas'>
                            <span className='text-xl'>Não tenho cadastro</span>
                        </GenericLink>
                    </div>
                </AuthForm>
            </GenericContainer>
        </GenericContainer>
    )
}

export default LoginLojas