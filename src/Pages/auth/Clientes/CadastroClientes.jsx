import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { PrimaryButton, ReturnButton } from "../../../Components/Buttons"
import GenericContainer from "../../../Components/Containers"
import AuthForm from "../../../Components/Forms"
import MaskedInput, { InputField } from "../../../Components/Inputs" 
import { GenericLink } from "../../../Components/Links"
import { SecondaryText } from "../../../Components/Titles"
import api from "../../../services/api"

// Imports para os ícones de validação (FontAwesome)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

// Componente visual para cada requisito da senha (Adaptado para Web)
const PasswordRequirement = ({ met, label }) => (
  <div className="flex items-center mb-1">
    <div className="w-6 flex items-center justify-center mr-2">
      <FontAwesomeIcon
        icon={met ? faCheckCircle : faTimesCircle}
        className={met ? "text-green-600" : "text-red-500"}
        size="sm"
      />
    </div>
    <span className={`text-sm ${met ? "text-green-600 font-bold" : "text-red-500"}`}>
      {label}
    </span>
  </div>
)

function CadastroClientes() {

    const navigate = useNavigate()

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmasenha, setConfirmaSenha] = useState('')

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    // --- LÓGICA DE VALIDAÇÃO DE SENHA ---
    const requirements = {
        length: senha.length >= 12,
        upper: /[A-Z]/.test(senha),
        lower: /[a-z]/.test(senha),
        number: /\d/.test(senha),
        special: /[\W_]/.test(senha)
    }

    // Verifica se todos os requisitos foram atendidos
    const isPasswordValid = Object.values(requirements).every(Boolean)

    const handleCadastro = async (e) => {
        e.preventDefault()
        setError('') 

        // 1. Validação de campos vazios
        if (!nome || !email || !telefone || !senha || !confirmasenha) {
            const msg = 'Todos os campos são obrigatórios!'
            setError(msg)
            return
        }

        // 2. Validação de E-mail
        if (!email.includes('@')) {
            setError('O e-mail inserido não é válido!')
            return
        }

        // 3. Validação de Telefone (Ex: (11) 99999-9999 tem 11 dígitos limpos)
        // Remove caracteres não numéricos para contar
        const cleanPhone = telefone.replace(/\D/g, '')
        if (cleanPhone.length < 10) {
            setError('Por favor, insira um telefone válido com DDD.')
            return
        }

        // 4. Validação de Força de Senha
        if (!isPasswordValid) {
            setError('Sua senha é muito fraca. Por favor, atenda a todos os requisitos listados.')
            return
        }

        // 5. Validação de confirmação de senha
        if (senha !== confirmasenha) {
            const msg = 'As senhas não conferem!'
            setError(msg)
            return
        }

        setLoading(true)

        try {
            // Envia os dados para a API
            // Nota: Enviamos 'telefone' como string. Se sua API precisar apenas de números,
            // envie cleanPhone no lugar de telefone.
            const response = await api.post('usuarios/auth/register', { 
                nome, 
                email, 
                telefone, 
                senha, 
                confirmasenha 
            })
            
            alert(response.data.msg || 'Usuário criado com sucesso!')
            navigate('/login/clientes') 

        } catch (error) {
            const msg = error.response?.data?.msg || 'Não foi possível fazer o cadastro. Tente novamente.'
            console.error(`Erro no cadastro: ${error}`)
            setError(msg)
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
                    
                    {/* Mensagem de Erro Geral */}
                    {error && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4 text-center animate-pulse">
                            {error}
                        </div>
                    )}

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

                    <MaskedInput 
                        labelText='Telefone (Celular)' 
                        mask={'(99) 99999-9999'} 
                        maxLength={15} 
                        required 
                        value={telefone}
                        // MaskedInput geralmente retorna o evento ou valores customizados. 
                        // Ajuste conforme seu componente Inputs.jsx:
                        onValueChange={(clean, masked) => setTelefone(masked)}
                        // Fallback caso seu componente use onChange padrão:
                        onChange={(e) => setTelefone(e.target.value)} 
                    />

                    <InputField 
                        labelText='Senha' 
                        type='password' 
                        required 
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />

                    {/* --- Visualização dos Requisitos de Senha --- */}
                    {senha.length > 0 && (
                        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 mt-2 mb-2 animate-fadeIn transition-all duration-300">
                            <p className="text-slate-700 font-bold mb-2 text-sm">Requisitos da senha:</p>
                            <PasswordRequirement met={requirements.length} label="Mínimo de 12 caracteres" />
                            <PasswordRequirement met={requirements.upper} label="Pelo menos uma letra maiúscula" />
                            <PasswordRequirement met={requirements.lower} label="Pelo menos uma letra minúscula" />
                            <PasswordRequirement met={requirements.number} label="Pelo menos um número" />
                            <PasswordRequirement met={requirements.special} label="Pelo menos um caractere especial" />
                        </div>
                    )}

                    <InputField 
                        labelText='Confirme sua Senha' 
                        type='password' 
                        required 
                        value={confirmasenha}
                        onChange={(e) => setConfirmaSenha(e.target.value)}
                    />

                    <div className='flex flex-col items-center justify-center mt-5 gap-5'>
                        <PrimaryButton className='w-full xl:w-[60%]' type='submit' disabled={loading}>
                            {loading ? (
                                <div className="flex items-center justify-center gap-2">
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    <span>Cadastrando...</span>
                                </div>
                            ) : (
                                <span>Cadastrar</span>
                            )}
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