import './App.css'
import Landing from './Pages/Landing.jsx'
import HomeClientes from './Pages/HomeClientes.jsx'
import CadastroClientes from './Pages/auth/Clientes/CadastroClientes.jsx'
import LoginClientes from './Pages/auth/Clientes/LoginClientes.jsx'

import CadastroLojas from './Pages/auth/Lojas/CadastroLojas.jsx'
import LoginLojas from './Pages/auth/Lojas/LoginLojas.jsx'
import HomeLojas from './Pages/Lojas/HomeLojas.jsx'
import Estoque from './Pages/Lojas/Estoque.jsx'
import PedidosLoja from './Pages/Lojas/Pedidos/PedidosLoja'
import AdicionarProduto from './Pages/Lojas/AdicionarProduto.jsx'
import EditarProduto from './Pages/Lojas/EditarProduto.jsx'

import ConfiguracoesLoja from './Pages/Lojas/ConfiguracoesLoja.jsx'
import EditarLoja from './Pages/Lojas/EditarLoja.jsx'
import DetalhesPedidoLoja from './Pages/Lojas/Pedidos/DetalhesPedidoLoja.jsx'

import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from './Components/ProtectedRoute.jsx'

const App = () => {

  const validator = 'token'

  return (
    <div>
      <Routes>
        <Route path='/' element={<Landing />} />

        <Route path='/login/clientes' element={<LoginClientes />} />
        <Route path='/cadastro/clientes' element={<CadastroClientes />} />

        <Route path='/home/clientes' element={<HomeClientes />} />

        <Route path='/login/lojas' element={<LoginLojas />} />
        <Route path='/cadastro/lojas' element={<CadastroLojas />} />

        <Route
          path='/home/lojas'
          element={
            <ProtectedRoute storageKey={validator} redirectTo='/login/lojas'>
              <HomeLojas />
            </ProtectedRoute>
          }
        />
        <Route
          path='/estoque'
          element={
            <ProtectedRoute storageKey={validator} redirectTo='/login/lojas'>
              <Estoque />
            </ProtectedRoute>
          }
        />

        <Route
          path='/configuracoes/lojas'
          element={
            <ProtectedRoute storageKey={validator} redirectTo='/login/lojas'>
              <ConfiguracoesLoja />
            </ProtectedRoute>
          }
        />
        <Route
          path='/editar/lojas'
          element={
            <ProtectedRoute storageKey={validator} redirectTo='/login/lojas'>
              <EditarLoja />
            </ProtectedRoute>
          }
        />

        <Route
          path='/adicionar-produto'
          element={
            <ProtectedRoute storageKey={validator} redirectTo='/login/lojas'>
              <AdicionarProduto />
            </ProtectedRoute>
          }
        />
        <Route
          path='/editar-produto'
          element={
            <ProtectedRoute storageKey={validator} redirectTo='/login/lojas'>
              <EditarProduto />
            </ProtectedRoute>
          }
        />

        <Route 
          path='/pedidos/lojas' 
          element={
            <ProtectedRoute storageKey={validator} redirectTo='/login/lojas'>
              <PedidosLoja />
            </ProtectedRoute>
          } 
        />
        <Route 
          path='/pedidos/lojas/detalhes' 
          element={
            <ProtectedRoute storageKey={validator} redirectTo='/login/lojas'>
              <DetalhesPedidoLoja />
            </ProtectedRoute>
          }
        />

      </Routes>
    </div>
  )
}

export default App
