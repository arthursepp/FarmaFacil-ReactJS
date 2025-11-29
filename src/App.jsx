import './App.css'
import Landing from './Pages/Landing.jsx'
import HomeClientes from './Pages/HomeClientes.jsx'
import CadastroClientes from './Pages/auth/Clientes/CadastroClientes.jsx'
import LoginClientes from './Pages/auth/Clientes/LoginClientes.jsx'
import ConfiguracoesCliente from './Pages/Clientes/ConfiguracoesCliente.jsx'

import Detalhes from './Pages/Produtos/Detalhes.jsx'
import FinalizarCompra from './Pages/Produtos/FinalizarCompra.jsx'
import MensagemFinal from './Pages/Produtos/MensagemFinal.jsx'
import Pagamento from './Pages/Produtos/Pagamento.jsx'

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
import { ExclusiveRoute, OrderRoute, ProductRoute, PublicRoute, SmartLanding } from './Components/RoutesComponent.jsx'

const App = () => {

  return (
    <div>
      <Routes>
        <Route path='/' element={<SmartLanding><Landing /></SmartLanding>} />

        {/* --- ROTAS CLIENTES --- */}
        
        {/* Login/Cadastro são PublicRoutes (Só entra quem NÃO está logado) */}
        <Route
          path='/login/clientes'
          element={            
            <PublicRoute storageKey={'tokenCliente'} redirectTo='/home/clientes'>
              <LoginClientes />
            </PublicRoute>
          }
        />
        <Route 
            path='/cadastro/clientes' 
            element={
                <PublicRoute storageKey={'tokenCliente'} redirectTo='/home/clientes'>
                    <CadastroClientes />
                </PublicRoute>
            } 
        />
        
        <Route path='/home/clientes' element={          
             <ExclusiveRoute onlyKey='tokenCliente' redirectTo='/login/clientes'>
                 <HomeClientes />
             </ExclusiveRoute>
        } />

        <Route path='/configuracoes/clientes' element={
            <ExclusiveRoute onlyKey='tokenCliente' redirectTo='/login/clientes'>
                <ConfiguracoesCliente />
            </ExclusiveRoute>
        } />   

        {/* --- ROTAS PRODUTOS (CORREÇÃO AQUI) --- */} 
        {/* Estas rotas agora são EXCLUSIVAS para quem tem tokenCliente. */}
        {/* Se você quiser que qualquer um veja, remova o ExclusiveRoute e deixe sem wrapper. */}

        <Route path='/produtos/detalhes/:id' element={
            <ExclusiveRoute onlyKey='tokenCliente' redirectTo='/login/clientes'>
                <Detalhes />
            </ExclusiveRoute>
        } />

        <Route path='/produtos/finalizarcompra' element={
            <ExclusiveRoute onlyKey='tokenCliente' redirectTo='/login/clientes'>
                <FinalizarCompra />
            </ExclusiveRoute>
        } />

        <Route path='/produtos/mensagemfinal' element={
            <ExclusiveRoute onlyKey='tokenCliente' redirectTo='/login/clientes'>
                <MensagemFinal />
            </ExclusiveRoute>
        } />

        <Route path='/produtos/pagamento' element={
            <ExclusiveRoute onlyKey='tokenCliente' redirectTo='/login/clientes'>
                <Pagamento />
            </ExclusiveRoute>
        } />


        {/* --- ROTAS LOJAS --- */}
        <Route path='/login/lojas' element={<PublicRoute storageKey={'tokenLoja'} redirectTo='/home/lojas'><LoginLojas /></PublicRoute>} />
        <Route path='/cadastro/lojas' element={<PublicRoute storageKey={'tokenLoja'} redirectTo='/home/lojas'><CadastroLojas /></PublicRoute>} />

        {/* Home Lojas (Protegido) */}
        <Route path='/home/lojas' element={
          <ExclusiveRoute onlyKey='tokenLoja' redirectTo='/login/lojas'>
            <HomeLojas />
          </ExclusiveRoute>
        } />
        <Route path='/estoque' element={
          <ExclusiveRoute onlyKey='tokenLoja' redirectTo='/login/lojas'>
            <Estoque />
          </ExclusiveRoute>
        } />
        <Route path='/configuracoes/lojas' element={
          <ExclusiveRoute onlyKey='tokenLoja' redirectTo='/login/lojas'>
            <ConfiguracoesLoja />
          </ExclusiveRoute>
        } />
        <Route path='/editar/lojas' element={
          <ExclusiveRoute onlyKey='tokenLoja' redirectTo='/login/lojas'>
            <EditarLoja />
          </ExclusiveRoute>
        } />
        <Route path='/adicionar-produto' element={
          <ExclusiveRoute onlyKey='tokenLoja' redirectTo='/login/lojas'>
            <AdicionarProduto />
          </ExclusiveRoute>
        } />
        <Route path='/editar-produto' element={
          <ProductRoute onlyKey='tokenLoja' redirectTo='/estoque'>
            <EditarProduto />
          </ProductRoute>
        } />
        <Route path='/pedidos/lojas' element={
          <ExclusiveRoute onlyKey='tokenLoja' redirectTo='/login/lojas'>
            <PedidosLoja />
          </ExclusiveRoute>
        } />
        <Route path='/pedidos/lojas/detalhes' element={
          <OrderRoute onlyKey='id_pedido' redirectTo='/pedidos/lojas'>
            <DetalhesPedidoLoja />
          </OrderRoute>
        } />

      </Routes>
    </div>
  )
}

export default App