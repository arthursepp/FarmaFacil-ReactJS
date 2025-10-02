import LogoFarmaFacil from '../assets/images/LogoFarmaFacil.png'
import { PrimaryText, TerciaryText } from '../Components/Titles'

function Landing() {
    return (
        <div className='flex flex-col items-center justify-center h-screen m-0 gap-4'>
            <img src={LogoFarmaFacil} alt="Logo farma fácil" className='w-25' />
            <PrimaryText text='Olá, seja bem-vindo(a)!' />
            <TerciaryText text='Você já possui cadastro em nosso app?' />

            <div className='flex flex-col text-center gap-4 mt-5'>
                <a href="/login/clientes" className='bg-primaryBlue p-3 text-white rounded-xl'>
                    <TerciaryText text='Sim, sou cadastrado' />
                </a>
                <TerciaryText text='OU' />
                <a href="/cadastro/clientes" className='border-2 border-primaryBlue p-3 text-primaryBlue rounded-xl'>
                    <TerciaryText text='Não, quero me cadastrar' />
                </a>
            </div>

            <a href="/cadastro/lojas"
                className='
                    mt-10 
                    text-xl 
                    text-primaryBlue 
                    underline
                    font-poppins
                    font-semibold
                '
            >
                Sou proprietário(a) de uma farmácia
            </a>
        </div>
    )
}

export default Landing
