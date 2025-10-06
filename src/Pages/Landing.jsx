import LogoFarmaFacil from '../assets/images/LogoFarmaFacil.png'
import { PrimaryButton, SecondaryButton } from '../Components/Buttons'
import { GenericLink } from '../Components/Links'

function Landing() {
    return (
        <div className='p-5 flex flex-col flex-1 justify-around border h-screen'>

            <div className='flex flex-col items-center justify-center '>
                <img src={LogoFarmaFacil} alt="Logo farma fácil" className='w-25 xl:w-30 md:w-30 sm:w-25' />
            </div>
            <div className='flex flex-col text-center gap-5'>
                <span className='text-2xl'>Olá usuário(a)!</span>
                <span className='text-2xl'>Você já possui cadastro em nosso app?</span>
            </div>

            <div className='flex flex-col items-center justify-center'>
                <PrimaryButton link={true} className='w-full xl:w-[35%] md:w-[50%] sm:w-full'>
                    <span>Sim, já tenho conta</span>
                </PrimaryButton>
                <SecondaryButton link={true} className='w-full xl:w-[35%] md:w-[50%] sm:w-full'>
                    <span>Não, não tenho conta</span>
                </SecondaryButton>
            </div>

            <GenericLink className='text-center' url='/login/lojas'>
                <span>Sou um fornecedor</span>
            </GenericLink>

        </div>
    )
}

export default Landing
