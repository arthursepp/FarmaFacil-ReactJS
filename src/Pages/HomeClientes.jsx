// Imports do React e React Router
import React, { useState, useEffect } from 'react' // Importado useEffect
import { useNavigate } from 'react-router-dom'

// Imports dos seus componentes
import { InputField } from '../Components/Inputs'
import GenericContainer from '../Components/Containers'
import { PrimaryButton, SecondaryDangerButton } from '../Components/Buttons' 

// Imports do FontAwesome
import { faSignOut } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Import da sua instância do Axios
import api from '../services/api'
//
// Componente ProductContainer (Atualizado para receber 'produto' e formatar preço)
//
const ProductContainer = ({ produto, className }) => {
  
  // Formata o preço (ex: 100 -> 100,00)
  const formatPrice = (price) => {
    return price ? parseFloat(price).toFixed(2).replace('.', ',') : '00,00'
  }

  return (
    <div className={`flex items-center justify-between p-3 border-2 border-blue-500 rounded-xl shadow-lg w-full ${className}`}>
      
      <div className="flex-shrink-0 w-16 h-auto mr-3">
        <img 
          // Usando a imagem_url da API, com um placeholder
          src={produto.imagem_url || "https://via.placeholder.com/150"} 
          alt={produto.nome || 'Imagem do Produto'} 
          className="w-full h-auto object-contain rounded" 
        />
      </div>

      <div className='flex-grow flex flex-col justify-center min-w-0'>
        <span className="text-xl font-bold truncate text-gray-800">
          {/* Usando o nome do produto da API */}
          {produto.nome || 'Nome do Produto'}
        </span>
        
        <span className="text-lg font-semibold text-green-600">
          {/* Usando o preço da API e formatando */}
          R$ {formatPrice(produto.preco)}
        </span>
      </div>

      <div className="flex-shrink-0 ml-4">
        <button 
          className="py-3 px-6 flex items-center justify-center space-x-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg font-bold transition duration-150"
        >
          <span>Comprar</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
        </button>
      </div>
    </div>
  )
}

//
// Componente HomeClientes (com busca de dados da API)
//
function HomeClientes() {
  
  const navigate = useNavigate()
  const [logoutLoading, setLogoutLoading] = useState(false)

  // --- Novos Estados ---
  const [produtos, setProdutos] = useState([]) // Para armazenar os produtos da API
  const [busca, setBusca] = useState('') // Para controlar o campo de busca
  const [loading, setLoading] = useState(true) // Estado de carregamento
  const [error, setError] = useState(null) // Estado de erro

  // --- Função de Logout ---
  const handleLogout = () => {
    setLogoutLoading(true)
    localStorage.removeItem('tokenCliente')
    localStorage.removeItem('id_cliente')
    setLogoutLoading(false)
    navigate('/login/clientes')
  }

  // --- Busca os dados da API ---
  useEffect(() => {
    const carregarProdutos = async () => {
      try {
        setLoading(true)
        setError(null)
        
        // A API de produtos (GET /) não parece exigir token
        // Se exigir, você precisa adicionar o header de autorização
        const response = await api.get('/produtos') 
        
        setProdutos(response.data || [])
      } catch (err) {
        console.error("Erro ao buscar produtos:", err)
        setError("Não foi possível carregar os produtos. Tente novamente mais tarde.")
      } finally {
        setLoading(false)
      }
    }

    carregarProdutos()
  }, []) // Array vazio, executa apenas uma vez quando o componente monta

  
  // --- Filtra os produtos com base na busca ---
  const filteredProdutos = produtos.filter(produto => 
    produto.nome.toLowerCase().includes(busca.toLowerCase())
  )

  // --- Função para renderizar a lista de produtos ---
  const renderProdutos = () => {
    if (loading) {
      return <p className='text-center text-lg mt-5'>Carregando produtos...</p>
    }

    if (error) {
      return <p className='text-center text-lg text-red-600 mt-5'>{error}</p>
    }

    if (filteredProdutos.length === 0) {
      return <p className='text-center text-lg mt-5'>Nenhum produto encontrado.</p>
    }

    return (
      <div className='flex flex-col gap-4 mt-4'>
        {filteredProdutos.map(produto => (
          // Usando o _id do produto como key
          <ProductContainer key={produto._id} produto={produto} /> 
        ))}
      </div>
    )
  }


  return (
    <GenericContainer className='p-5 min-h-screen'> 
        
        {/* --- Header Flexível --- */}
        <div className='flex items-center justify-between w-full mb-6'>
            <h1 className='font-bold text-2xl'>Olá!</h1>
            <SecondaryDangerButton
                className='flex items-center gap-2'
                onClick={handleLogout}
                disabled={logoutLoading}
            >
                <span>{logoutLoading ? 'Saindo...' : 'Sair'}</span>
                <FontAwesomeIcon icon={faSignOut} />
            </SecondaryDangerButton>
        </div>
        
        {/* --- Busca (agora conectada ao estado) --- */}
        <InputField 
          labelText='O que busca?' 
          type='text'
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
        <PrimaryButton className='font-bold mb-2'>Buscar Produto</PrimaryButton>
        
        {/* --- Renderização dinâmica dos produtos --- */}
        {renderProdutos()}

    </GenericContainer>
  )
}

export default HomeClientes