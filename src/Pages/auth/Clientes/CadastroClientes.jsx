import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { PrimaryButton, ReturnButton } from "../../../Components/Buttons"
import GenericContainer from "../../../Components/Containers"
import AuthForm from "../../../Components/Forms"
// Importando o MaskedInput, que foi usado em LoginLojas
import MaskedInput, { InputField } from "../../../Components/Inputs" 
import { GenericLink } from "../../../Components/Links"
import { SecondaryText } from "../../../Components/Titles"
import api from "../../../services/api"

function CadastroClientes() {

    const navigate = useNavigate()

    // Estados para todos os campos do formulário de registro da API
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmasenha, setConfirmaSenha] = useState('')

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleCadastro = async (e) => {
        e.preventDefault()

        // Validações baseadas na API
        if (!nome || !email || !telefone || !senha || !confirmasenha) {
            const msg = 'Todos os campos são obrigatórios!'
            setError(msg)
            alert(msg)
            return
        }

        if (senha !== confirmasenha) {
            const msg = 'As senhas não conferem!'
            setError(msg)
            alert(msg)
            return
        }

        setLoading(true)

        try {
            // Consumindo o endpoint de registro de usuário
            const response = await api.post('usuarios/auth/register', { 
                nome, 
                email, 
                telefone, // Enviando o valor limpo (sem máscara)
                senha, 
                confirmasenha 
            })
            
            // Se chegou aqui, o registro foi bem-sucedido (status 201)
            alert(response.data.msg || 'Usuário criado com sucesso!')
            
            // Redireciona para a página de login do cliente
            navigate('/login/clientes') 

        } catch (error) {
            // Captura erros de validação da API (ex: email já existe)
            const msg = error.response?.data?.msg || 'Não foi possível fazer o cadastro. Tente novamente.'
            console.log(`Não foi possível fazer o cadastro: ${error}`)
            setError(msg)
            alert(msg)
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
                    onSubmit={handleCadastro}
                >
                    <SecondaryText text='Cadastro' className='text-center' />
                    
                    <InputField 
                        labelText='Nome Completo' 
                        type='text' 
                        required 
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                    
                    <InputField 
                        labelText='E-mail' 
                        type='email' 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    {/* Usando MaskedInput para o telefone, similar ao CNPJ */}
                    <MaskedInput 
                        labelText='Telefone (Celular)' 
                        mask={'(99) 99999-9999'} // Máscara de celular
                        maxLength={15} // (99) 99999-9999
                        required 
                        value={telefone}
                        // Usamos onValueChange para pegar o valor limpo (só números)
                        onValueChange={(cleanValue, maskedValue) => setTelefone(cleanValue)} 
                    />

                    <InputField 
                        labelText='Senha' 
                        type='password' 
                        required 
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />

                    <InputField 
                        labelText='Confirme sua Senha' 
                        type='password' 
                        required 
                        value={confirmasenha}
                        onChange={(e) => setConfirmaSenha(e.target.value)}
                    />

                    <div className='flex flex-col items-center justify-center mt-5 gap-5'>
                        <PrimaryButton className='w-full xl:w-[60%]' type='submit' disabled={loading}>
                            <span>{loading ? 'Cadastrando...' : 'Cadastrar'}</span>
                        </PrimaryButton>
                        <GenericLink url='/login/clientes'>
                            <span className='text-xl'>Já tenho cadastro</span>
                        </GenericLink>
                    </div>
                </AuthForm>
            </GenericContainer>
        </GenericContainer>
    )
}

export default CadastroClientes