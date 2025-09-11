import './App.css'
import Home from './Pages/Home.jsx'
import CadastroClientes from './Pages/auth/Clientes/CadastroClientes.jsx'
import LoginClientes from './Pages/auth/Clientes/LoginClientes.jsx'
import CadastroLojas from './Pages/auth/Lojas/CadastroLojas.jsx'
import LoginLojas from './Pages/auth/Lojas/LoginLojas.jsx'
import { Routes, Route } from 'react-router-dom'
import Landing from './Pages/Landing.jsx'

const App = () => {
  return (
    <div>      
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login/clientes' element={<LoginClientes />} />
        <Route path='/cadastro/clientes' element={<CadastroClientes />} />
        <Route path='/login/lojas' element={<CadastroLojas />} />
        <Route path='/cadastro/lojas' element={<CadastroLojas />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
