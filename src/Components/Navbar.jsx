import { ReturnButton } from './Buttons'
import LogoFarmaFacil from '../assets/images/LogoFarmaFacil.png'
import { TerciaryText } from './Titles'

export const NavbarNotSigned = ({ linkType }) => {
    if (linkType == 'login') {
        return (
            <div className="
                flex
                justify-between
                items-center
                p-3
                shadow-md
            ">
                <ReturnButton />
                <a href="/">
                    <img src={LogoFarmaFacil} alt="Logo farma fácil" className='w-15' />
                </a>
                <a href="/login/clientes" className='text-blue-500 underline'>
                    <TerciaryText text={'Login'} />
                </a>
            </div>
        )
    } else {
        return (
            <div className="
                flex
                justify-between
                items-center
                p-3
                shadow-md
            ">
                <ReturnButton />
                <a href="/">
                    <img src={LogoFarmaFacil} alt="Logo farma fácil" className='w-15' />
                </a>
                <a href="/cadastro/clientes" className='text-blue-500 underline'>
                    <TerciaryText text={'Cadastro'} />
                </a>
            </div>
        )
    }

}

export const NavbarNotSignedLojas = ({ linkType }) => {
    if (linkType == 'login') {
        return (
            <div className="
                flex
                justify-between
                items-center
                p-3
                shadow-md
            ">
                <ReturnButton />
                <a href="/">
                    <img src={LogoFarmaFacil} alt="Logo farma fácil" className='w-15' />
                </a>
                <a href="/login/lojas" className='text-blue-500 underline'>
                    <TerciaryText text={'Login'} />
                </a>
            </div>
        )
    } else {
        return (
            <div className="
                flex
                justify-between
                items-center
                p-3
                shadow-md
            ">
                <ReturnButton />
                <a href="/">
                    <img src={LogoFarmaFacil} alt="Logo farma fácil" className='w-15' />
                </a>
                <a href="/cadastro/lojas" className='text-blue-500 underline'>
                    <TerciaryText text={'Cadastro'} />
                </a>
            </div>
        )
    }
}

export const Navbar = () => {
    return (
        <div>
            <img src="" alt="" />
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Configurações</a></li>
                <li><a href="">Meus pedidos</a></li>
            </ul>
        </div>
    )
}
