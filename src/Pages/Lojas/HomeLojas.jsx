import Footer from "../../Components/Footer"
import GenericContainer, { CardContainer } from "../../Components/Containers"
import { SecondaryText, TerciaryText } from "../../Components/Titles"
import { PrimaryButton, SecondaryButton } from "../../Components/Buttons"
import { useEffect, useState } from "react"
import api from "../../services/api"

const SmallInfoContainer = ({ texto1, texto2, className }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span>{texto1}</span>
      <span>{texto2}</span>
    </div>
  )
}

function HomeLojas() {

  const id_farmacia = localStorage.getItem('id_farmacia')

  const [estoque, setEstoque] = useState([])

  const carregarDados = async () => {
    try {
      const response = await api.get(`/produtos/farmacia/${id_farmacia}`)
      setEstoque(response.data)
    } catch (error) {
      console.log(`Não foi possível buscar as informações: ${error}`)
    }
  }

  useEffect(() => {
    carregarDados()
  }, [])

  const produtoMenorQtd = estoque.length > 0 ? estoque.reduce(
    (min, item) => item.quantidade < min.quantidade ?
      item : min, estoque[0]
  ) : null;

  return (
    <>
      <div className='p-5'>
        <SecondaryText text='Olá usuário' />
        <div className="flex flex-col gap-3">

          <div className='flex items-center justify-center mt-2 md:w-[40%] md:m-auto'>
            <SecondaryButton link={true} url='/adicionar-produto' className='w-full text-center'>
              <span>Adicionar novo produto</span>
            </SecondaryButton>
          </div>

          <div className="flex flex-col gap-3 md:m-auto md:w-[40%]">

            <div className="flex flex-col border-2 border-blue-500 p-2 rounded-xl gap-2 xl:gap-3">
              <div className="m-auto">
                <span className='text-xl'>Gerenciar produtos</span>
              </div>
              <SmallInfoContainer texto1={'Produtos em estoque:'} texto2={estoque.length} />
              <SmallInfoContainer
                texto1={`Produto em menor quantidade:`}
                texto2={produtoMenorQtd ? produtoMenorQtd.nome : 'Nenhum produto'}
              />
              <PrimaryButton link={true} url='/estoque'>
                <span>Ver estoque</span>
              </PrimaryButton>
            </div>

            <div className="flex flex-col border-2 border-blue-500 p-2 rounded-xl gap-2 xl:gap-3">
              <div className="m-auto">
                <span className='text-xl'>Gerenciar pedidos</span>
              </div>
              <SmallInfoContainer texto1={'Pedidos concluídos'} texto2='xx' />
              <SmallInfoContainer texto1={'Pedidos pendentes:'} texto2='xx' />
              <PrimaryButton link={true} url='/pedidos/lojas'>
                <span>Ver pedidos</span>
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
      <Footer type='loja' className='fixed' />
    </>
  )
}

export default HomeLojas
