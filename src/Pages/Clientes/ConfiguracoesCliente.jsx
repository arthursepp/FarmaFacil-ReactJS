import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import GenericContainer from '../../Components/Containers'
import { ReturnButton } from '../../Components/Buttons'
import MaskedInput, { InputField } from '../../Components/Inputs'
import api from '../../services/api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faPen, 
  faSave, 
  faTimes, 
  faUser, 
  faEnvelope, 
  faPhone, 
  faLock 
} from '@fortawesome/free-solid-svg-icons'

// Sub-componente para cada linha de informação
const InfoRow = ({ label, icon, value, name, type = 'text', mask, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [currentValue, setCurrentValue] = useState(type === 'password' ? '' : value)
  const [loading, setLoading] = useState(false)

  // Atualiza o estado local quando o valor vindo da API muda
  useEffect(() => {
    if (type !== 'password') {
      setCurrentValue(value)
    }
  }, [value, type])

  const handleSave = async () => {
    // Validação simples para não enviar senha vazia na edição
    if (type === 'password' && !currentValue) {
      setIsEditing(false)
      return 
    }

    setLoading(true)
    const success = await onUpdate(name, currentValue)
    setLoading(false)
    
    if (success) {
      setIsEditing(false)
      if (type === 'password') setCurrentValue('') 
    }
  }

  const handleCancel = () => {
    setIsEditing(false)
    setCurrentValue(type === 'password' ? '' : value)
  }

  return (
    <div className='bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-4 transition-all duration-200 hover:shadow-md'>
      <div className='flex items-center gap-4'>
        
        {/* Ícone da Categoria */}
        <div className='w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primaryblue'>
          <FontAwesomeIcon icon={icon} />
        </div>

        {/* Área de Conteúdo */}
        <div className='flex-grow min-w-0'>
          <p className='text-xs font-bold text-gray-400 uppercase tracking-wider mb-1'>{label}</p>
          
          {isEditing ? (
            <div className='animate-fadeIn'>
               {mask ? (
                 <MaskedInput 
                   mask={mask}
                   value={currentValue}
                   onChange={(e) => setCurrentValue(e.target.value)}
                   // Garante compatibilidade se o componente usar onValueChange
                   onValueChange={(clean, masked) => setCurrentValue(masked)}
                   inputClassName="w-full text-sm py-1 border-b-2 border-primaryblue text-gray-800"
                 />
               ) : (
                 <InputField 
                   type={type}
                   value={currentValue}
                   onChange={(e) => setCurrentValue(e.target.value)}
                   inputClassName="w-full text-sm py-1 border-b-2 border-primaryblue text-gray-800"
                   placeholder={type === 'password' ? 'Digite a nova senha' : ''}
                 />
               )}
            </div>
          ) : (
            <p className='text-gray-800 font-medium text-lg truncate'>
              {type === 'password' ? '••••••••' : (value || 'Não informado')}
            </p>
          )}
        </div>

        {/* Botões de Ação */}
        <div className='flex gap-2 ml-2'>
            {isEditing ? (
              <>
                <button 
                  onClick={handleCancel}
                  disabled={loading}
                  className='w-8 h-8 rounded-full bg-red-50 text-red-500 hover:bg-red-100 flex items-center justify-center transition-colors disabled:opacity-50'
                  title="Cancelar"
                >
                  <FontAwesomeIcon icon={faTimes} size="sm" />
                </button>
                <button 
                  onClick={handleSave}
                  disabled={loading}
                  className='w-8 h-8 rounded-full bg-green-50 text-green-600 hover:bg-green-100 flex items-center justify-center transition-colors disabled:opacity-50'
                  title="Salvar"
                >
                  {loading ? (
                    <div className="w-3 h-3 border-2 border-green-600 border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <FontAwesomeIcon icon={faSave} size="sm" />
                  )}
                </button>
              </>
            ) : (
              <button 
                onClick={() => setIsEditing(true)}
                className='w-8 h-8 rounded-full bg-gray-50 text-gray-400 hover:bg-primaryblue hover:text-white flex items-center justify-center transition-all'
                title="Editar"
              >
                <FontAwesomeIcon icon={faPen} size="sm" />
              </button>
            )}
        </div>
      </div>
    </div>
  )
}

const ConfiguracoesCliente = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [successMsg, setSuccessMsg] = useState('')

  // Efeito para carregar usuário
  useEffect(() => {
    const fetchUser = async () => {
      const id = localStorage.getItem('id_cliente')
      const token = localStorage.getItem('tokenCliente') 

      if (!id || !token) {
        navigate('/login/clientes')
        return
      }

      try {
        setLoading(true)
        // Rota corrigida para PLURAL (/usuarios)
        const response = await api.get(`/usuarios/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        
        if (response.data && response.data.user) {
          setUser(response.data.user)
        } else {
          setError("Dados do usuário não encontrados.")
        }
      } catch (err) {
        console.error("Erro ao buscar usuário:", err)
        setError("Erro ao carregar seus dados.")
        
        if (err.response && err.response.status === 401) {
            navigate('/login/clientes')
        }
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [navigate])

  // Função para atualizar dados
  const handleUpdateUser = async (field, newValue) => {
    setSuccessMsg('')
    setError('')
    const id = localStorage.getItem('id_cliente')
    const token = localStorage.getItem('tokenCliente')

    try {
      const payload = { [field]: newValue }
      
      // Rota corrigida para PLURAL (/usuarios)
      await api.patch(`/usuarios/${id}`, payload, {
          headers: {
              Authorization: `Bearer ${token}`
          }
      })

      // Atualiza estado local
      setUser(prev => ({ ...prev, [field]: newValue }))
      
      setSuccessMsg('Atualizado com sucesso!')
      
      setTimeout(() => setSuccessMsg(''), 3000)
      return true
    } catch (err) {
      console.error("Erro ao atualizar:", err)
      const msg = err.response?.data?.msg || "Erro ao atualizar. Tente novamente."
      alert(msg) 
      return false
    }
  }

  if (loading) {
    return (
      <GenericContainer className="p-5 flex flex-col items-center justify-center min-h-screen">
         <div className="w-10 h-10 border-4 border-gray-200 border-t-primaryblue rounded-full animate-spin"></div>
         <p className="mt-4 text-gray-500 font-sans">Carregando configurações...</p>
      </GenericContainer>
    )
  }

  return (
    <GenericContainer className="p-5 min-h-screen bg-gray-50 font-sans">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <ReturnButton />
          <h1 className="text-2xl font-bold text-gray-800">Minhas Configurações</h1>
          <div className="w-10"></div> 
        </div>

        {/* Feedback Messages */}
        {error && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-center">{error}</div>}
        {successMsg && <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-center font-medium animate-pulse">{successMsg}</div>}

        {/* Dados do Usuário */}
        {user && (
          <div className="space-y-2 mt-8">
              
              <h2 className="text-lg font-bold text-gray-700 mb-4 px-1">Dados Pessoais</h2>
              
              <InfoRow 
                label="Nome Completo" 
                icon={faUser} 
                value={user.nome} 
                name="nome"
                onUpdate={handleUpdateUser}
              />
              
              <InfoRow 
                label="E-mail" 
                icon={faEnvelope} 
                value={user.email} 
                name="email"
                onUpdate={handleUpdateUser}
              />
              
              <InfoRow 
                label="Telefone / Celular" 
                icon={faPhone} 
                value={user.telefone} 
                name="telefone"
                mask="phone"
                onUpdate={handleUpdateUser}
              />

              <div className="mt-8 pt-4 border-t border-gray-200">
                <h2 className="text-lg font-bold text-gray-700 mb-4 px-1">Segurança</h2>
                <InfoRow 
                  label="Senha" 
                  icon={faLock} 
                  value={user.senha} 
                  name="senha"
                  type="password"
                  onUpdate={handleUpdateUser}
                />
              </div>

          </div>
        )}

      </div>
    </GenericContainer>
  )
}

export default ConfiguracoesCliente