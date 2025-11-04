import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import GenericContainer from '../../Components/Containers'
import { ReturnButton } from '../../Components/Buttons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMotorcycle, faBox, faClipboardCheck, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'

// Componente de Status
const StatusTracker = ({ statusList, currentStatusIndex }) => (
  <div className='w-full my-8'>
    <ul className='flex flex-col gap-4'>
      {statusList.map((status, index) => (
        <li 
          key={index} 
          className={`flex items-center transition-all duration-500 ${index === currentStatusIndex ? 'text-blue-600 font-bold scale-105' : 'text-gray-500'} ${index < currentStatusIndex ? 'text-green-600 opacity-70' : ''}`}
        >
          <FontAwesomeIcon 
            icon={status.icon} 
            className={`mr-3 w-5 ${index === currentStatusIndex ? 'animate-pulse' : ''}`} 
          />
          <span>{status.text}</span>
        </li>
      ))}
    </ul>
  </div>
);

// Componente de Animação
const DeliveryAnimation = () => (
  <>
    <style>
      {`
        @keyframes ride {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(110vw); }
        }
        .delivery-moto {
          animation: ride 7s linear infinite;
        }
        .road {
          border-bottom: 4px dashed #cbd5e1; /* gray-300 */
          width: 100vw;
          position: absolute;
          left: 0;
          bottom: 0;
        }
      `}
    </style>
    <div className='relative w-full h-16 overflow-x-hidden'>
      <div className='delivery-moto absolute bottom-2'>
        <FontAwesomeIcon icon={faMotorcycle} size='2x' className='text-gray-700' />
      </div>
      <div className='road'></div>
    </div>
  </>
);


const FinalizarCompra = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { produto } = location.state || {};
  
  const [arrivalTime, setArrivalTime] = useState('');
  
  const statusList = [
    { text: 'Pedido confirmado', icon: faClipboardCheck },
    { text: 'Em preparação', icon: faBox },
    { text: 'Saiu para entrega', icon: faMotorcycle },
    { text: 'Chegando!', icon: faMapMarkedAlt }
  ];
  
  const [currentStatusIndex, setCurrentStatusIndex] = useState(0);

  useEffect(() => {
    // Redireciona se não houver dados do produto
    if (!produto) {
      console.error("Nenhum dado de produto encontrado, redirecionando...");
      navigate('/home/clientes');
      return;
    }

    // Calcula o tempo de chegada (Horário atual + 30-45 min)
    const randomMinutes = Math.floor(Math.random() * (45 - 30 + 1)) + 30;
    const arrivalTime = new Date(Date.now() + randomMinutes * 60000);
    const formattedTime = arrivalTime.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit'
    });
    setArrivalTime(formattedTime);

    // Simula a progressão do status
    const interval = setInterval(() => {
      setCurrentStatusIndex(prevIndex => {
        if (prevIndex < statusList.length - 1) {
          return prevIndex + 1;
        }
        clearInterval(interval);
        return prevIndex;
      });
    }, 4000); // Muda de status a cada 4 segundos

    return () => clearInterval(interval);
  }, [produto, navigate, statusList.length]); // Dependência ajustada

  // Formata o preço
  const formatPrice = (price) => {
    return price ? parseFloat(price).toFixed(2).replace('.', ',') : '00,00';
  };

  if (!produto) {
    return <GenericContainer className="p-5"><p>Carregando...</p></GenericContainer>;
  }

  return (
    <GenericContainer className="p-5 min-h-screen flex flex-col">
      <div className='flex-shrink-0'>
        <ReturnButton />
        <h1 className='font-bold text-3xl text-center my-4'>Acompanhe seu Pedido</h1>
      </div>

      {/* Estimativa de Chegada */}
      <div className='text-center my-4'>
        <p className='text-lg text-gray-600'>Seu pedido chegará por volta das:</p>
        <p className='text-5xl font-bold text-blue-600'>
          {arrivalTime || 'Calculando...'}
        </p>
      </div>
      
      {/* Tracker de Status */}
      <StatusTracker statusList={statusList} currentStatusIndex={currentStatusIndex} />

      {/* Animação de Entrega */}
      <div className='flex-grow flex items-end'>
        <DeliveryAnimation />
      </div>
      
      {/* Detalhes do Pedido Fixo na Base */}
      <div className='flex-shrink-0 border-t-2 border-gray-200 pt-4 mt-8 bg-white'>
        <p className='font-bold text-lg mb-3'>O que está sendo entregue:</p>
        <div className='flex items-center bg-gray-50 p-3 rounded-lg shadow-sm'>
          <img 
            src={produto.imagem_url || "https://via.placeholder.com/150"} 
            alt={produto.nome}
            className='w-16 h-16 object-contain rounded-lg border mr-4'
          />
          <div className='flex-grow'>
            <h3 className='font-bold text-lg text-gray-800'>{produto.nome}</h3>
            <p className='text-sm text-gray-600'>{produto.farmacia?.nome || 'Farmácia'}</p>
          </div>
          <span className='text-lg font-bold text-green-600'>
            R$ {formatPrice(produto.preco)}
          </span>
        </div>
      </div>
    </GenericContainer>
  )
}

export default FinalizarCompra
  