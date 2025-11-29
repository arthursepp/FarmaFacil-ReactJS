import React from 'react'
import { TerciaryText } from '../../../Components/Titles'
import { ReturnButton } from '../../../Components/Buttons'
import GenericContainer, { CardContainer } from '../../../Components/Containers'
import { Header } from '../../../Components/Titles'
import Footer from '../../../Components/Footer'
import { useState, useEffect } from 'react'
import api from '../../../services/api'

const ListItem = ({ nomeItem, isFirst, isLast }) => {
  return (
    <li
      className={`
        p-3 hover:bg-gray-200
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
  const id_pedido = localStorage.getItem('id_pedido')

  const [nomeCliente, setNomeCliente] = useState('')
  const [precoTotal, setPrecoTotal] = useState('')
  const [itensPedido, setItensPedido] = useState([])

  const carregarDados = async () => {
    try {
      const response = await api.get(`/pedidos/${id_pedido}`)
      const data = response.data.pedido
      console.log(data)
      setNomeCliente(data.usuario.nome)
      setPrecoTotal(data.precoTotal)
      setItensPedido(data.itensPedido)
    } catch (error) {
      console.log(`Não foi possível carregar os dados: ${error}`)
    }
  }

  useEffect(() => {
    carregarDados()
  }, [])

  useEffect(() => {
    console.log(itensPedido)
  }, [itensPedido])

  return (
    <>
      <GenericContainer>
        <ReturnButton />
        <Header text={'Detalhes do pedido:'} divClassName='mt-3' />

        <CardContainer className='
            border-primaryblue 
            p-2 
            mt-3 
            xl:h-[490px]
            md:h-[400px]
            sm:h-[420px]
            h-[405px]
            gap-2
          '
        >

          <div className="flex items-center gap-2">
            <span>Id:</span>
            <input type="text" value={id_pedido} disabled className='p-1 w-full' />
          </div>

          <div className="flex items-center gap-2">
            <span>Cliente:</span>
            <input type="text" value={nomeCliente} disabled className='p-1 w-full' />
          </div>

          <TerciaryText text='Produtos:' />
          <ul className='flex flex-col overflow-y-auto h-[250px] max-h-[250px] border-2 rounded-xl border-blue-400'>
            {itensPedido.map((item, index) => (
              <ListItem
                key={item._id}
                nomeItem={
                  <>
                    <span className="font-bold">
                      {item.product ? item.product.nome : 'Produto indisponível'}
                    </span>
                    <span> - Quantidade: {item.quantidade}</span>
                    <span>
                      {item.product ? ` - Preço: R$ ${item.product.preco}` : ''}
                    </span>
                  </>
                }
                isFirst={index === 0}
                isLast={index === itensPedido.length - 1}
              />
            ))}
          </ul>

          <div className="flex justify-center items-center gap-2">
            <span className='text-xl' >Total:</span>
            <span className='text-xl font-bold'>R$ {parseFloat(precoTotal).toFixed(2)}</span>
          </div>
        </CardContainer>
      </GenericContainer>
      <Footer type={'loja'} className='fixed' />
    </>
  )
}

export default DetalhesPedido
