import React from 'react'
import GenericContainer, { ProductCard } from '../../Components/Containers'
import { ReturnButton } from '../../Components/Buttons'

const Detalhes = () => {
  return (
    <GenericContainer>
        <ReturnButton/>
        <h1 className='font-bold text-2xl'>Finalize a compra</h1>
        <ProductCard/>
    </GenericContainer>
  )
}

export default Detalhes