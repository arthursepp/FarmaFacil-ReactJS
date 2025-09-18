import './App.css'
import HomeClientes from './Pages/HomeClientes.jsx'
import CadastroClientes from './Pages/auth/Clientes/CadastroClientes.jsx'
import LoginClientes from './Pages/auth/Clientes/LoginClientes.jsx'

import CadastroLojas from './Pages/auth/Lojas/CadastroLojas.jsx'
import LoginLojas from './Pages/auth/Lojas/LoginLojas.jsx'
import HomeLojas from './Pages/Lojas/HomeLojas.jsx'

import AdicionarProduto from './Pages/Lojas/AdicionarProduto.jsx'

import { Routes, Route } from 'react-router-dom'
import Landing from './Pages/Landing.jsx'

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

        <Route path='/adicionar-produto' element={<AdicionarProduto />} />
      </Routes>
    </div>
  )
}

export default App
