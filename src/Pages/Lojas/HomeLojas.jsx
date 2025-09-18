import Footer from "../../Components/Footer"
import GenericContainer, { CardContainer } from "../../Components/Containers"
import { SecondaryText, TerciaryText } from "../../Components/Titles"
import { PrimaryButton, SecondaryButton } from "../../Components/Buttons"

function HomeLojas() {
  return (
    <div>
      <GenericContainer>
        <SecondaryText classes={'text-black'} text={'Olá usuário X'} />
        <div className="flex flex-col items-center justify-center">
          <SecondaryButton
            link={true}
            url='/adicionar-produto'
            text={'Adicionar novo produto'}
            classes='
              w-[50%] 
              text-center 
              duration-300 
              ease-in-out
            '
          />
        </div>

        <div className="flex flex-col items-center justify-center mt-5 gap-5 overflow-auto">
          <CardContainer classes={'w-[40%] gap-5'}>
            <TerciaryText text={'Gerencie seu estoque:'} classes='text-center' />
            <div className="flex gap-2 items-center">
              <span>Produtos em estoque:</span>
              <span>10</span>
            </div>
            <div className="flex gap-2 items-center">
              <span>Produto com menos unidades:</span>
              <span>10</span>
            </div>
            <PrimaryButton link={true} url='#' text={'Gerencie seu estoque'} />
          </CardContainer>

          <CardContainer classes={'gap-5 w-[40%]'}>
            <TerciaryText text={'Gerencie seus pedidos:'} classes={'text-center'} />
            <div className="flex items-center gap-2">
              <span>Pedidos concluídos:</span>
              <span>10</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Pedidos pendentes:</span>
              <span>10</span>
            </div>
            <PrimaryButton link={true} url='#' text={'Gerenciar pedidos'} />
          </CardContainer>

        </div>
      </GenericContainer>
      <Footer type={'loja'} text='' />
    </div>
  )
}

export default HomeLojas
