import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/', // ! MUDAR PARA URL DO RENDER/AZURE
})

export const viacep = axios.create({
    baseURL: 'https://viacep.com.br/ws/'
})

export const validarCNPJ = axios.create({
    baseURL: 'https://publica.cnpj.ws/cnpj/'
})

export default api
