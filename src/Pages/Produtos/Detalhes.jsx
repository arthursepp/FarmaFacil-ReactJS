import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import GenericContainer from '../../Components/Containers'
import { ReturnButton, PrimaryButton } from '../../Components/Buttons'
import api from '../../services/api' 

// Componente para exibir um item de detalhe
const DetailItem = ({ label, value }) => (
  <div className='mb-2'>
    <span className='font-semibold text-gray-600'>{label}: </span>
    <span className='text-gray-800'>{value}</span>
  </div>
)

// Componente de Loading Overlay (Usando Tailwind puro)
const LoadingOverlay = () => (
  <div className='fixed inset-0 bg-white/90 flex flex-col justify-center items-center z-50 backdrop-blur-sm'>
    {/* Tailwind Spinner */}
    <div className="w-12 h-12 border-4 border-gray-200 border-t-primaryblue rounded-full animate-spin"></div>
    <p className='text-gray-700 text-xl mt-4 font-poppins'>Processando seu pedido...</p>
  </div>
);

const Detalhes = () => {
  const { id } = useParams() 
  const navigate = useNavigate()
  
  const [produto, setProduto] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isRedirecting, setIsRedirecting] = useState(false) 

  const formatPrice = (price) => {
    return price ? parseFloat(price).toFixed(2).replace('.', ',') : '00,00'
  }

  useEffect(() => {
    const fetchProduto = async () => {
      try {
        setLoading(true)
        setError(null)
        // Certifique-se que sua API responde corretamente nessa rota
        const response = await api.get(`/produtos/${id}`)
        
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
  }, [id]) 

  const handleFinalizarCompra = () => {
    setIsRedirecting(true); 

    setTimeout(() => {
        // Envia o estado (produto) para a próxima página
        navigate('/produtos/pagamento', { state: { produto: produto } });
    }, 2000); 
  }

  if (loading) {
    return (
      <GenericContainer className="p-5">
        <ReturnButton />
        <div className="flex flex-col items-center justify-center mt-20">
            <div className="w-12 h-12 border-4 border-gray-200 border-t-primaryblue rounded-full animate-spin"></div>
            <p className='text-center text-xl mt-4'>Carregando...</p>
        </div>
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
  
  return (
    <GenericContainer className="p-5">
        {isRedirecting && <LoadingOverlay />}

        <ReturnButton />
        <h1 className='font-bold text-3xl text-center my-4 text-primaryblue'>Detalhes do Produto</h1>
        
        {produto && (
          <div className='max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100'>
            
            <div className='flex flex-col md:flex-row'>
                {/* Imagem (Esquerda ou Topo) */}
                <div className='w-full md:w-1/2 p-4 flex items-center justify-center bg-gray-50'>
                    <img 
                    src={produto.imagem_url || "https://via.placeholder.com/600x400"} 
                    alt={produto.nome}
                    className='max-w-full max-h-80 object-contain mix-blend-multiply'
                    />
                </div>
                
                {/* Conteúdo (Direita ou Baixo) */}
                <div className='w-full md:w-1/2 p-8 flex flex-col justify-between'>
                    <div>
                        <h2 className='text-3xl font-bold text-gray-800 mb-2'>{produto.nome}</h2>
                        <span className="inline-block bg-blue-100 text-primaryblue text-sm font-semibold px-3 py-1 rounded-full mb-4">
                            {produto.farmacia?.nome || 'Farmácia Parceira'}
                        </span>
                        
                        <p className='text-5xl font-bold text-green-600 mb-6'>
                            R$ {formatPrice(produto.preco)}
                        </p>

                        <div className='space-y-2 bg-gray-50 p-4 rounded-xl'>
                            <DetailItem label="Nome Químico" value={produto.nome_quimico} />
                            <DetailItem label="Em Estoque" value={produto.quantidade} />
                            <DetailItem label="Validade" value={new Date(produto.validade).toLocaleDateString('pt-BR')} />
                            <DetailItem label="Lote" value={produto.lote} />
                            <DetailItem label="Rótulo" value={produto.label} />
                        </div>
                    </div>

                    <PrimaryButton 
                        className='w-full text-center mt-8 py-4 text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all'
                        onClick={handleFinalizarCompra} 
                        disabled={isRedirecting}
                    >
                        {isRedirecting ? 'Processando...' : 'Comprar Agora'}
                    </PrimaryButton>
                </div>
            </div>
          </div>
        )}
    </GenericContainer>
  )
}

export default Detalhes