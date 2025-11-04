import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import GenericContainer from '../../Components/Containers'
import { ReturnButton, PrimaryButton } from '../../Components/Buttons'
import api from '../../services/api' // Importe sua instância do API

// Componente para exibir um item de detalhe (ajuda a organizar)
const DetailItem = ({ label, value }) => (
  <div className='mb-2'>
    <span className='font-semibold text-gray-600'>{label}: </span>
    <span className='text-gray-800'>{value}</span>
  </div>
)

// Componente de Loading Overlay (Estilo "Smooth and Clean" atualizado)
const LoadingOverlay = () => (
  <>
    {/* CSS para o novo spinner */}
    <style>
      {`
        .loader {
          border: 5px solid #f0f0f0; /* Cinza claro */
          border-top: 5px solid #3b82f6; /* Azul (Tailwind blue-500) */
          border-radius: 50%;
          width: 50px;
          height: 50px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}
    </style>
    {/* Fundo branco semitransparente com blur */}
    <div className='fixed inset-0 bg-white bg-opacity-90 flex flex-col justify-center items-center z-50 backdrop-blur-sm'>
      <div className="loader"></div> {/* O novo spinner */}
      <p className='text-gray-700 text-xl mt-4'>Processando seu pedido...</p>
    </div>
  </>
);


const Detalhes = () => {
  const { id } = useParams() // Pega o :id da URL
  const navigate = useNavigate()
  
  const [produto, setProduto] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isRedirecting, setIsRedirecting] = useState(false) // Estado para o loading

  // Formata o preço
  const formatPrice = (price) => {
    return price ? parseFloat(price).toFixed(2).replace('.', ',') : '00,00'
  }

  // Busca os dados do produto na API assim que o componente carregar
  useEffect(() => {
    const fetchProduto = async () => {
      try {
        setLoading(true)
        setError(null)
        const response = await api.get(`/produtos/${id}`)
        
        // A API retorna um objeto { produto: {...} }
        if (response.data && response.data.produto) {
          setProduto(response.data.produto)
        } else {
          setError('Produto não encontrado.')
        }
      } catch (err) {
        console.error("Erro ao buscar detalhes do produto:", err)
        setError('Erro ao carregar o produto. Tente novamente.')
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchProduto()
    }
  }, [id]) // Executa sempre que o 'id' da URL mudar

  // Nova função para lidar com o clique
  const handleFinalizarCompra = () => {
    setIsRedirecting(true); // Ativa o loading

    // Simula um tempo de processamento
    setTimeout(() => {
      // Navega para a página de pagamento, passando os dados do produto
      navigate('/produtos/pagamento', { state: { produto: produto } });
      // Não é necessário desativar o loading, pois a página irá mudar
    }, 2000); // 2 segundos de loading
  }

  // Renderização de Loading e Erro
  if (loading) {
    return (
      <GenericContainer className="p-5">
        <ReturnButton />
        <p className='text-center text-xl mt-10'>Carregando...</p>
      </GenericContainer>
    )
  }

  if (error) {
    return (
      <GenericContainer className="p-5">
        <ReturnButton />
        <p className='text-center text-xl text-red-600 mt-10'>{error}</p>
      </GenericContainer>
    )
  }
  
  // Renderização principal quando o produto é carregado
  return (
    <GenericContainer className="p-5">
        {/* Mostra o overlay de loading se estiver redirecionando */}
        {isRedirecting && <LoadingOverlay />}

        <ReturnButton />
        <h1 className='font-bold text-3xl text-center my-4'>Detalhes do Produto</h1>
        
        {produto && (
          <div className='max-w-2xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden'>
            
            {/* Imagem do Produto */}
            <img 
              src={produto.imagem_url || "https://via.placeholder.com/600x400"} 
              alt={produto.nome}
              className='w-full h-64 object-contain bg-gray-100'
            />
            
            <div className='p-6'>
              {/* Nome e Preço */}
              <h2 className='text-3xl font-bold text-blue-600 mb-2'>{produto.nome}</h2>
              <p className='text-4xl font-light text-green-600 mb-6'>
                R$ {formatPrice(produto.preco)}
              </p>

              {/* Informações Detalhadas */}
              <div className='border-t pt-4'>
                <DetailItem label="Vendido por" value={produto.farmacia?.nome || 'Não informado'} />
                <DetailItem label="Nome Químico" value={produto.nome_quimico} />
                <DetailItem label="Em Estoque" value={produto.quantidade} />
                <DetailItem label="Validade" value={new Date(produto.validade).toLocaleDateString('pt-BR')} />
                <DetailItem label="Lote" value={produto.lote} />
                <DetailItem label="Rótulo (Label)" value={produto.label} />
              </div>

              {/* Botão de Finalizar Compra */}
              <PrimaryButton 
                className='w-full text-center mt-6 py-4 text-xl'
                // Atualiza o onClick para a nova função
                onClick={handleFinalizarCompra} 
                disabled={isRedirecting} // Desabilita o botão durante o loading
              >
                {isRedirecting ? 'Processando...' : 'Finalizar Compra'}
              </PrimaryButton>
            </div>
          </div>
        )}
    </GenericContainer>
  )
}

export default Detalhes

