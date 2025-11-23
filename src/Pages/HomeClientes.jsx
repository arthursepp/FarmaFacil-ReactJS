import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// Imports dos seus componentes
import { InputField } from '../Components/Inputs'
import GenericContainer from '../Components/Containers'
import { SecondaryDangerButton } from '../Components/Buttons' 

// Imports do FontAwesome
import { faSignOut, faCog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Import da sua instância do Axios
import api from '../services/api'

//
// Componente ProductContainer (Mantido igual)
//
const ProductContainer = ({ produto, className, onComprarClick }) => { 
  
  const formatPrice = (price) => {
    return price ? parseFloat(price).toFixed(2).replace('.', ',') : '00,00'
  }

  const handleClick = (e) => {
    e.preventDefault(); 
    e.stopPropagation(); 
    if (onComprarClick) onComprarClick();
  }

  return (
    <div className={`flex items-center justify-between p-3 border-2 border-primaryblue rounded-xl shadow-lg w-full ${className}`}>
      
      <div className="flex-shrink-0 w-16 h-auto mr-3">
        <img 
          src={produto.imagem_url || "https://via.placeholder.com/150"} 
          alt={produto.nome || 'Imagem do Produto'} 
          className="w-full h-auto object-contain rounded" 
        />
      </div>

      <div className='flex-grow flex flex-col justify-center min-w-0'>
        <span className="text-xl font-bold truncate text-gray-800">
          {produto.nome || 'Nome do Produto'}
        </span>
        
        <span className="text-lg font-semibold text-green-600">
          R$ {formatPrice(produto.preco)}
        </span>
      </div>

      <div className="flex-shrink-0 ml-4">
        <button 
          type="button" 
          className="py-3 px-6 flex items-center justify-center space-x-2 text-white bg-primaryblue hover:bg-blue-600 rounded-lg font-bold transition duration-150"
          onClick={handleClick} 
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
// Componente HomeClientes Principal
//
function HomeClientes() {
  
  const navigate = useNavigate()
  const [logoutLoading, setLogoutLoading] = useState(false)

  // 1. Estados atualizados para suportar a busca local
  const [produtos, setProdutos] = useState([]) // Lista completa (Backup dos dados originais)
  const [filteredProdutos, setFilteredProdutos] = useState([]) // Lista que será exibida na tela
  const [busca, setBusca] = useState('') 
  const [loading, setLoading] = useState(true) 
  const [error, setError] = useState(null) 

  const handleLogout = () => {
    setLogoutLoading(true)
    localStorage.removeItem('tokenCliente')
    localStorage.removeItem('id_cliente')
    setLogoutLoading(false)
    navigate('/login/clientes')
  }

  useEffect(() => {
    const carregarProdutos = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const response = await api.get('/produtos') 
        const data = response.data || []

        setProdutos(data)
        setFilteredProdutos(data) // 2. Inicializa a lista filtrada com todos os dados
      } catch (err) {
        console.error("Erro ao buscar produtos:", err)
        setError("Não foi possível carregar os produtos. Tente novamente mais tarde.")
      } finally {
        setLoading(false)
      }
    }

    carregarProdutos()
  }, []) 

  // 3. Função de busca adaptada (filtragem no frontend)
  const handleSearch = (e) => {
    const text = e.target.value;
    setBusca(text);

    if (text) {
      const newData = produtos.filter(item => {
        const itemData = item.nome ? item.nome.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredProdutos(newData);
    } else {
      // Se o campo estiver vazio, restaura a lista completa usando o backup
      setFilteredProdutos(produtos);
    }
  };

  const renderProdutos = () => {
    if (loading) {
      return (
        <div className="flex flex-col items-center justify-center mt-10">
            <div className="w-10 h-10 border-4 border-gray-200 border-t-primaryblue rounded-full animate-spin"></div>
            <p className='text-center text-gray-500 mt-3'>Carregando produtos...</p>
        </div>
      )
    }

    if (error) {
      return <p className='text-center text-lg text-red-600 mt-5'>{error}</p>
    }

    if (filteredProdutos.length === 0) {
      return <p className='text-center text-lg mt-5 text-gray-500'>Nenhum produto encontrado.</p>
    }

    return (
      <div className='flex flex-col gap-4 mt-4 pb-20'>
        {/* Renderiza a lista filtrada */}
        {filteredProdutos.map(produto => (
          <ProductContainer 
            key={produto._id} 
            produto={produto}
            onComprarClick={() => navigate(`/produtos/detalhes/${produto._id}`)}
          /> 
        ))}
      </div>
    )
  }


  return (
    <GenericContainer className='p-5 min-h-screen'> 
        
        {/* Header da Home */}
        <div className='flex items-center justify-between w-full mb-6'>
            <div>
                <h1 className='font-bold text-2xl text-primaryblue'>Olá, Cliente!</h1>
                <p className="text-xs text-gray-400">Bem-vindo de volta</p>
            </div>
            
            {/* Div com items-center para alinhar os botões verticalmente */}
            <div className="flex gap-2 items-center">
                {/* Botão de Configurações */}
                <button 
                    onClick={() => navigate('/configuracoes/clientes')}
                    className="w-10 h-10 rounded-xl border border-blue-200 text-primaryblue bg-white flex items-center justify-center hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 shadow-sm"
                    title="Configurações"
                >
                    <FontAwesomeIcon icon={faCog} />
                </button>

                {/* CORREÇÃO CRÍTICA: Usando !mt-0 para forçar a remoção da margem padrão */}
                <SecondaryDangerButton
                    className='w-10 h-10 flex items-center justify-center p-0 !mt-0'
                    onClick={handleLogout}
                    disabled={logoutLoading}
                    title="Sair"
                >
                    <FontAwesomeIcon icon={faSignOut} />
                </SecondaryDangerButton>
            </div>
        </div>
        
        {/* Barra de Busca com ação de filtragem */}
        <div className="mb-6 relative">
            <InputField 
                labelText='O que você precisa hoje?' 
                type='text'
                value={busca}
                onChange={handleSearch} // Conecta a função de busca
                placeholder="Digite o nome do remédio..."
            />
        </div>
        
        {/* Lista de Produtos */}
        <h2 className="font-bold text-lg text-gray-700 mb-2">Produtos Disponíveis</h2>
        {renderProdutos()}

    </GenericContainer>
  )
}

export default HomeClientes