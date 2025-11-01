import React from 'react'
import GenericContainer from '../../Components/Containers'
import { ReturnButton } from '../../Components/Buttons'

const Pagamento = () => {
  return (
    <GenericContainer>
        <ReturnButton/>
        <h1 className='font-bold text-2xl'>Formas de pagamento:</h1>

        <div className='p-5 border-solid border-blue-500 border-4 rounded-xl'>
            <img src="../../assets/images/pix.png" alt="" srcset="" />
            <h2 className='font-semibold text-2xl text-'>Pix</h2>
        </div>
    </GenericContainer>
  )
}

export default Pagamento