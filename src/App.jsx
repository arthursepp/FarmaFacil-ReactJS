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

const App = () => {
  return (
    <div>      
      <Routes>
        <Route path='/' element={<Landing />} />
        
        <Route path='/login/clientes' element={<LoginClientes />} />
        <Route path='/cadastro/clientes' element={<CadastroClientes />} />
        
        <Route path='/home/clientes' element={<HomeClientes />} />
        
        <Route path='/login/lojas' element={<LoginLojas />} />
        <Route path='/cadastro/lojas' element={<CadastroLojas />} />

        <Route path='/home/lojas' element={<HomeLojas />} />
        <Route path='/estoque' element={<Estoque />} />
        
        <Route path='/configuracoes/lojas' element={<ConfiguracoesLoja />} />
        <Route path='/editar/lojas' element={<EditarLoja />} />
        
        <Route path='/adicionar-produto' element={<AdicionarProduto />} />
        <Route path='/editar-produto' element={<EditarProduto />} />
        
        <Route path='/pedidos/lojas' element={<PedidosLoja />} />
        <Route path='/pedidos/lojas/detalhes' element={<DetalhesPedidoLoja />} />

      </Routes>
    </div>
  )
}

export default App
