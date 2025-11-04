import React, { useEffect } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import GenericContainer from '../../Components/Containers'
import { ReturnButton } from '../../Components/Buttons'

// Componente para a animação "interessante"
// ... (código existente, sem alterações)
const AnimatedMessage = ({ produtoNome }) => {
  return (
    <div className='flex flex-col items-center justify-center text-center fade-in' style={{ animation: 'fadeIn 1s ease-out' }}>
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      
      <h1 className='text-4xl font-bold text-gray-800 mb-4'>
        Pedido finalizado!
      </h1>
      <p className='text-xl text-gray-600 mb-8'>
        Já estamos separando {produtoNome || 'seu produto'} para você!
      </p>
      <Link 
        // 1. Rota de acompanhamento atualizada
        to="/produtos/finalizarcompra" 
        // 2. Passando o estado do produto para a próxima rota
        state={{ produto: { nome: produtoNome } }} 
        className='text-xl text-primaryblue hover:text-blue-700 underline font-semibold'
      >
        Acompanhe aqui
      </Link>
    </div>
  );
}

const MensagemFinal = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { produto } = location.state || {};
  const produtoNome = produto?.nome || 'seu pedido';

  // Redirecionamento automático
  useEffect(() => {
    // Redireciona para a página de acompanhamento após 5 segundos
    const timer = setTimeout(() => {
      // 3. Rota de redirecionamento atualizada e passando o estado
      navigate('/produtos/finalizarcompra', { state: { produto } }); 
    }, 5000); // 5 segundos

    // Limpa o timer se o componente for desmontado
    return () => clearTimeout(timer);
    // 4. Adicionando 'produto' e 'navigate' às dependências
  }, [navigate, produto]); 

  return (
    <GenericContainer className="p-5 flex flex-col items-center justify-center min-h-screen">
      {/* O ReturnButton aqui pode ser opcional, já que é uma tela final */}
      <div className='absolute top-5 left-5'>
        <ReturnButton />
      </div>
      
      <AnimatedMessage produtoNome={produtoNome} />
    </GenericContainer>
  )
}

export default MensagemFinal

