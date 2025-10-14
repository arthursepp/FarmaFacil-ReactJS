// RoutesComponent.jsx (Refatorado)
import { Navigate } from 'react-router-dom'


export const ProtectedRoute = ({ children, storageKey, redirectTo }) => {
    const isAuthenticated = localStorage.getItem(storageKey)
    if (!isAuthenticated) return <Navigate to={redirectTo} replace />
    return children
}


export const PublicRoute = ({ children, redirectTo }) => {
    const tokenCliente = localStorage.getItem('tokenCliente')
    const tokenLoja = localStorage.getItem('tokenLoja')
    if (tokenCliente) return <Navigate to='/home/clientes' replace />
    if (tokenLoja) return <Navigate to='/home/lojas' replace />
    return children
}


export const ExclusiveRoute = ({ children, onlyKey, redirectTo }) => {
    const token = localStorage.getItem(onlyKey)
    if (!token) return <Navigate to={redirectTo} replace />
    return children
}

export const ProductRoute = ({ children, redirectTo }) => {
    const tokenLoja = localStorage.getItem('tokenLoja')
    const idProduto = localStorage.getItem('id_produto')

    if (!tokenLoja) return <Navigate to='/login/lojas' replace />

    if (!idProduto) return <Navigate to={redirectTo} replace />

    return children
}

export const SmartLanding = ({ children }) => {
    const tokenCliente = localStorage.getItem('tokenCliente')
    const tokenLoja = localStorage.getItem('tokenLoja')
    if (tokenCliente) return <Navigate to='/home/clientes' replace />
    if (tokenLoja) return <Navigate to='/home/lojas' replace />
    return children
}