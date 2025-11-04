import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import GenericContainer from '../../Components/Containers'
import { ReturnButton, PrimaryButton } from '../../Components/Buttons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

// --- Componente de Overlay de "Aguardando Pagamento" ---
const WaitingPaymentOverlay = () => (
  <>
    <style>
      {`
        .dots-loader div {
          animation: dots-loader 0.8s infinite;
          background: #3b82f6;
          border-radius: 50%;
          width: 10px;
          height: 10px;
          margin: 0 5px;
        }
        .dots-loader div:nth-child(2) { animation-delay: 0.2s; }
        .dots-loader div:nth-child(3) { animation-delay: 0.4s; }
        @keyframes dots-loader {
          0%, 100% { transform: scale(0.5); opacity: 0.5; }
          50% { transform: scale(1); opacity: 1; }
        }
      `}
    </style>
    <div className='absolute inset-0 bg-white bg-opacity-90 flex flex-col justify-center items-center z-10 backdrop-blur-sm rounded-lg'>
      <div className="dots-loader flex">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p className='text-gray-700 text-lg mt-4'>Aguardando pagamento...</p>
    </div>
  </>
);

// --- Componente de Overlay de "Pagamento Aprovado" ---
const SuccessPaymentOverlay = () => (
  <>
    <style>
    {`
      .success-checkmark {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        display: block;
        stroke-width: 3;
        stroke: #4ade80; /* green-400 */
        stroke-miterlimit: 10;
        box-shadow: inset 0px 0px 0px #4ade80;
        animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both;
      }
      .success-checkmark__circle {
        stroke-dasharray: 166;
        stroke-dashoffset: 166;
        stroke-width: 3;
        stroke-miterlimit: 10;
        stroke: #4ade80;
        fill: none;
        animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
      }
      .success-checkmark__check {
        transform-origin: 50% 50%;
        stroke-dasharray: 48;
        stroke-dashoffset: 48;
        animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
      }
      @keyframes stroke {
        100% { stroke-dashoffset: 0; }
      }
      @keyframes scale {
        0%, 100% { transform: none; }
        50% { transform: scale3d(1.1, 1.1, 1); }
      }
      @keyframes fill {
        100% { box-shadow: inset 0px 0px 0px 40px #4ade80; }
      }
    `}
    </style>
    <div className='fixed inset-0 bg-white bg-opacity-95 flex flex-col justify-center items-center z-50'>
      <svg className="success-checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
        <circle className="success-checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
        <path className="success-checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
      </svg>
      <p className='text-green-500 text-2xl font-bold mt-4'>Pagamento Aprovado!</p>
    </div>
  </>
);


// --- Componente do Timer ---
const CountdownTimer = () => {
// ... (código existente, sem alterações)
  const initialTime = 30 * 60; // 30 minutos em segundos
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <span className='font-bold text-lg text-red-600'>
      {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
    </span>
  );
};

// --- Componente de Copiar PIX ---
const PixCopyButton = ({ pixCode, onCopy, disabled }) => {
  return (
    <div 
      className={`flex items-center justify-between border-2 border-dashed border-gray-400 rounded-lg p-3 ${disabled ? 'bg-gray-200 cursor-not-allowed' : 'bg-gray-50 cursor-pointer hover:bg-gray-100'}`}
      onClick={!disabled ? onCopy : undefined}
    >
      <span className={`text-sm font-mono truncate mr-2 ${disabled ? 'text-gray-500' : 'text-gray-700'}`}>
        {pixCode}
      </span>
      <FontAwesomeIcon icon={faCopy} className={disabled ? 'text-gray-400' : 'text-primaryblue'} />
    </div>
  );
};


// --- Componente Principal da Página ---
const Pagamento = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { produto } = location.state || {}; 

  const [pixCode, setPixCode] = useState('00020101021129370016BR.GOV.BCB.PIX01145... (simulado)');
  const [copySuccess, setCopySuccess] = useState('');
  
  // --- Novos Estados para Simulação de Pagamento ---
  const [isPaying, setIsPaying] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Redireciona se não houver dados do produto
  useEffect(() => {
    if (!produto) {
      console.error("Nenhum dado de produto encontrado, redirecionando...");
      navigate('/home/clientes');
    }
  }, [produto, navigate]);

  // Formata o preço
  const formatPrice = (price) => {
    return price ? parseFloat(price).toFixed(2).replace('.', ',') : '00,00';
  };

  // --- Função para copiar o código PIX e INICIAR SIMULAÇÃO ---
  const handleCopyPix = () => {
    if (isPaying || paymentSuccess) return; // Não faz nada se já estiver pagando

    navigator.clipboard.writeText(pixCode).then(() => {
      setCopySuccess('Código PIX copiado!');
      setTimeout(() => setCopySuccess(''), 2000); 

      // Inicia a simulação de pagamento
      setIsPaying(true);

      // 1. Atraso de 10 segundos (simulando pagamento)
      setTimeout(() => {
        setIsPaying(false);
        setPaymentSuccess(true); // Pagamento aprovado!

        // 2. Atraso de 2 segundos (para exibir a animação de sucesso)
        setTimeout(() => {
          // 3. Redireciona para a página final
          navigate('/produtos/mensagemfinal', { state: { produto: produto } });
        }, 2000); 

      }, 10000); // 10 segundos de simulação

    }, (err) => {
      setCopySuccess('Falha ao copiar.');
      console.error('Erro ao copiar PIX: ', err);
    });
  };
  
  if (!produto) {
    return (
      <GenericContainer className="p-5">
        <p className='text-center text-xl mt-10'>Carregando...</p>
      </GenericContainer>
    )
  }

  return (
    <GenericContainer className="p-5 max-w-lg mx-auto relative">
        {/* Mostra overlay de "Aguardando" */}
        {isPaying && <WaitingPaymentOverlay />}
        
        {/* Mostra overlay de "Sucesso" (tela inteira) */}
        {paymentSuccess && <SuccessPaymentOverlay />}

        {/* Impede o usuário de voltar durante o pagamento */}
        {!isPaying && !paymentSuccess && <ReturnButton />}
        
        <h1 className='font-bold text-3xl text-center my-4'>Pagamento</h1>
        
        <div className='flex justify-center my-4'>
            <img 
              src="/pix.png" 
              alt="Logo PIX"
              className='w-32 h-auto'
            />
        </div>

        <h2 className='text-xl font-semibold text-center text-gray-800'>
          Pedido aguardando pagamento
        </h2>
        
        <p className='text-center text-gray-600 mt-2 mb-4'>
          Pague em até <CountdownTimer />
        </p>

        {/* Botão de Copiar (desabilitado durante o pagamento) */}
        <PixCopyButton 
          pixCode={pixCode} 
          onCopy={handleCopyPix} 
          disabled={isPaying || paymentSuccess}
        />
        {copySuccess && <p className='text-center text-green-600 text-sm mt-2'>{copySuccess}</p>}

        {/* Detalhes do Pedido */}
        <div className='border-2 border-primaryblue rounded-lg p-4 my-6 shadow-md'>
            <div className='flex items-center mb-4'>
                <img 
                  src={produto.imagem_url || "https://via.placeholder.com/150"} 
                  alt={produto.nome}
                  className='w-16 h-16 object-contain rounded-lg border mr-4'
                />
                <div>
                  <h3 className='font-bold text-lg text-gray-800'>{produto.farmacia?.nome || 'Farmácia'}</h3>
                  <p className='text-sm text-gray-600'>Produto: {produto.nome}</p>
                </div>
            </div>
            
            <div className='border-t pt-3 flex justify-between items-center'>
                <span className='text-lg font-semibold text-gray-700'>TOTAL:</span>
                <span className='text-2xl font-bold text-green-600'>
                  R$ {formatPrice(produto.preco)}
                </span>
            </div>
        </div>

        {/* Botão de Copiar Inferior (desabilitado durante o pagamento) */}
        <PrimaryButton 
          className='w-full text-center py-3 text-lg'
          onClick={handleCopyPix}
          disabled={isPaying || paymentSuccess}
        >
          <FontAwesomeIcon icon={faCopy} className='mr-2' />
          {isPaying ? 'Processando Pagamento...' : 'Copiar Código PIX'}
        </PrimaryButton>

    </GenericContainer>
  )
}

export default Pagamento

