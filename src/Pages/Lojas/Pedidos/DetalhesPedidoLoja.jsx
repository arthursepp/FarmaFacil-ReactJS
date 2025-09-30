import React from 'react'
import { TerciaryText } from '../../../Components/Titles'
import { ReturnButton } from '../../../Components/Buttons'
import GenericContainer, { CardContainer } from '../../../Components/Containers'
import { Header } from '../../../Components/Titles'
import Footer from '../../../Components/Footer'

const ListItem = ({ nomeItem, isFirst, isLast }) => {
  return (
    <li
      className={`
        p-5 cursor-pointer hover:bg-gray-300
        ${isFirst ? "rounded-t-xl" : ""}
        ${isLast ? "rounded-b-xl border-b-0" : "border-b border-slate-400"}
      `}
    >
      {nomeItem}
    </li>
  )
}

const InfoParagraph = ({ mainText, text }) => {
  return (
    <div className='flex items-center gap-5'>
      <TerciaryText text={mainText} />
      <span className='text-xl'>{text}</span>
    </div>
  )
}

function DetalhesPedido() {

  // * Exemplo de produtos do pedido que podem vir da api:
  const produtos = [
    "Produto 1",
    "Produto 2",
    "Produto 3",
    "Produto 4"
  ]

  return (
    <div>
      <GenericContainer>
        <ReturnButton />
        <Header text={'Detalhes deste pedido:'} divClassName={'mt-5'} />
        <CardContainer className={'mt-4 gap-4'}>
          
          <InfoParagraph mainText='Id:' text={'aaaaaaaaa'} />
          <InfoParagraph mainText='Data:' text={'12/11/2004'} />
          
          <div>
            <TerciaryText text='Itens:' />
            <div className='border border-slate-500 rounded-xl mt-3'>
              <ul className='flex flex-col'>
                {produtos.map((produto, index) => (
                  <ListItem
                    key={index}
                    nomeItem={produto}
                    isFirst={index === 0}
                    isLast={index === produtos.length - 1}
                  />
                ))}
              </ul>
            </div>
            <div className='flex justify-end gap-5 mt-3'>
              <TerciaryText text='Total:' />
              <TerciaryText text='R$ 100,00' />
            </div>
          </div>
        </CardContainer>
      </GenericContainer>
      <Footer type={'loja'} />
    </div>
  )
}

export default DetalhesPedido
