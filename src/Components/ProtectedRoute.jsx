import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children, redirectTo = '/', storageKey }) => {

    const isAuthenticated = localStorage.getItem(storageKey)

    if (!isAuthenticated) {
        return <Navigate to={redirectTo} replace />
    }

    return children
    
}

export default ProtectedRoute
