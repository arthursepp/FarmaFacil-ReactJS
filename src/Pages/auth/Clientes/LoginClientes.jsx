import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { PrimaryButton, ReturnButton } from "../../../Components/Buttons"
import GenericContainer from "../../../Components/Containers"
import AuthForm from "../../../Components/Forms"
import { InputField } from "../../../Components/Inputs"
import { GenericLink } from "../../../Components/Links"
import { SecondaryText } from "../../../Components/Titles"
import api from "../../../services/api"

function LoginClientes() {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleLogin = async (e) => {
        e.preventDefault()

        if (!email || !senha) {
            const msg = 'Email e senha são obrigatórios!'
            setError(msg)
            alert(msg) // Mantendo o padrão de alerta do LoginLojas
            return
        }

        setLoading(true)

        try {
            // Consumindo o endpoint de login de usuário da sua API
            const response = await api.post('usuarios/auth/login', { email, senha })

            // Armazenando o token e o ID do cliente (usuário)
            localStorage.setItem('tokenCliente', response.data.token)
            localStorage.setItem('id_cliente', response.data.userId) // A API retorna 'userId'

            if (response.data?.token) {
                // Redireciona para a home do cliente
                navigate('/home/clientes') // Usando navigate para ser análogo ao /home/lojas
            } else {
                const msg = response.data?.msg || 'Erro ao fazer login'
                setError(msg)
                alert(msg) // Mantendo o padrão de alerta
            }
        } catch (error) {
            const msg = 'Não foi possível fazer login. Verifique seus dados ou tente mais tarde.'
            console.log(`Não foi possível fazer login: ${error}`)
            setError(msg)
            alert(msg) // Mantendo o padrão de alerta
        } finally {
            setLoading(false)
        }
    }

    return (
        <GenericContainer className='p-5'>
            <ReturnButton />
            <GenericContainer className='justify-center items-center'>
                <AuthForm
                    divClassName='
                        p-5 
                        w-full 
                        xl:w-[50%] 
                        md:w-[50%] 
                        sm:w-full
                    '
                    formClassName={'gap-3'}
                    onSubmit={handleLogin} // Adicionado o handler de submit
                >
                    <SecondaryText text='Login' className='text-center' />
                    <InputField
                        labelText='E-mail'
                        type='email'
                        required
                        value={email} // Conectado ao estado
                        onChange={(e) => setEmail(e.target.value)} // Conectado ao estado
                    />
                    <InputField
                        labelText='Senha'
                        type='password'
                        required
                        value={senha} // Conectado ao estado
                        onChange={(e) => setSenha(e.target.value)} // Conectado ao estado
                    />
                    <div className='flex flex-col items-center justify-center mt-5 gap-5'>
                        <PrimaryButton className='w-full xl:w-[60%]' type='submit' disabled={loading}>
                            {/* Adicionado estado de loading ao botão */}
                            <span>{loading ? 'Carregando...' : 'Login'}</span>
                        </PrimaryButton>
                        <GenericLink url='/cadastro/clientes'>
                            <span className='text-xl'>Não tenho cadastro</span>
                        </GenericLink>
                    </div>
                </AuthForm>
            </GenericContainer>
        </GenericContainer>
    )
}

export default LoginClientes