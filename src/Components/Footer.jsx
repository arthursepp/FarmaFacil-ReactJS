import { faHome, faClipboardCheck, faGear } from "@fortawesome/free-solid-svg-icons"
import { IconTabLink } from "./Links";
import { useLocation } from "react-router-dom"

function Footer({ type, className, children, ...props }) {
    const location = useLocation();
    const currentRoute = location.pathname;

    if (type?.toLowerCase() === 'loja') {
        return (
            <footer
                {...props}
                className={`
                    ${className}
                    flex 
                    w-full
                    border-t
                    border-gray-400
                    bg-white
                    left-0
                    bottom-0
                    text-slate-500
                    justify-around
                    py-3
                `}
            >
                <IconTabLink
                    icon={faHome}
                    text={'Home'}
                    url={'/home/lojas'}
                    iconclassName={`text-2xl ${currentRoute === '/home/lojas' ? 'text-blue-500' : ''}`}
                    className={currentRoute === '/home/lojas' ? 'text-blue-500' : ''}
                />
                <IconTabLink
                    icon={faClipboardCheck}
                    text={'Pedidos'}
                    url={'/pedidos/lojas'}
                    iconclassName={`text-2xl ${currentRoute === '/pedidos/lojas' ? 'text-blue-500' : ''}`}
                    className={currentRoute === '/pedidos/lojas' ? 'text-blue-500' : ''}
                />
                <IconTabLink
                    icon={faGear}
                    text={'Configurações'}
                    url={'/configuracoes/lojas'}
                    iconclassName={`text-2xl ${currentRoute === '/configuracoes/lojas' ? 'text-blue-500' : ''}`}
                    className={currentRoute === '/configuracoes/lojas' ? 'text-blue-500' : ''}
                />
            </footer>
        )
    } else {
        return (
            <footer {...props} className={`${className} flex flex-1 w-full bg-white`}>
                {children}
            </footer>
        )
    }
}

export default Footer;