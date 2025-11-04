import './App.css'
import Landing from './Pages/Landing.jsx'
import HomeClientes from './Pages/HomeClientes.jsx'
import CadastroClientes from './Pages/auth/Clientes/CadastroClientes.jsx'
import LoginClientes from './Pages/auth/Clientes/LoginClientes.jsx'

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
import { ExclusiveRoute, OrderRoute, ProductRoute, ProtectedRoute, PublicRoute, SmartLanding } from './Components/RoutesComponent.jsx'

const App = () => {

  const validator = 'tokenLoja' // Este validador parece ser para Lojas, não Clientes

  return (
    <div>
      <Routes>
        <Route path='/' element={<SmartLanding><Landing /></SmartLanding>} />

        {/* Rotas Públicas - Clientes */}
        {/* Removida a rota duplicada. Esta agora usa seu PublicRoute corretamente. */}
        <Route
          path='/login/clientes'
          element={
            // Assumindo que 'validator' deveria ser 'tokenCliente' aqui
            // Se for para Lojas, a lógica de <PublicRoute> pode precisar de revisão
            <PublicRoute storageKey={'tokenCliente'} redirectTo='/home/clientes'>
              <LoginClientes />
            </PublicRoute>
          }
        />
        <Route path='/cadastro/clientes' element={<PublicRoute><CadastroClientes /></PublicRoute>} />


        {/* Home Clientes (Protegido) */}
        {/* Você deve proteger esta rota, assim como protege as rotas de Loja */}
        <Route path='/home/clientes' element={
          // Exemplo de como proteger a Home Clientes:
          // <ExclusiveRoute onlyKey='tokenCliente' redirectTo='/login/clientes'>
             <HomeClientes />
          // </ExclusiveRoute>
        } />

        {/* Rotas Produtos*/} 
        {/* ROTA ATUALIZADA: Agora aceita um ID dinâmico */}
        <Route path='/produtos/detalhes/:id' element={<PublicRoute><Detalhes /></PublicRoute>} />

        <Route path='/produtos/finalizarcompra' element={<PublicRoute><FinalizarCompra /></PublicRoute>} />
        <Route path='/produtos/mensagemfinal' element={<PublicRoute><MensagemFinal /></PublicRoute>} />
        <Route path='/produtos/pagamento' element={<PublicRoute><Pagamento /></PublicRoute>} />

        {/* Rotas Públicas - Lojas */}
        <Route path='/login/lojas' element={<PublicRoute><LoginLojas /></PublicRoute>} />
        <Route path='/cadastro/lojas' element={<PublicRoute><CadastroLojas /></PublicRoute>} />

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
