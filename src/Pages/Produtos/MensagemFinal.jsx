import React from 'react'
import GenericContainer from '../../Components/Containers'
import { PrimaryButton } from '../../Components/Buttons'

const MensagemFinal = () => {
  return (
    <GenericContainer>
        <h1 className='font-bold text-2xl'>Sucesso</h1>
        <h1 className='font-semibold text-xl'>Já estamos separando [item da pessoa] para voce</h1>
        <PrimaryButton>Acompanhar</PrimaryButton>
    </GenericContainer>
  )
}

export default MensagemFinal