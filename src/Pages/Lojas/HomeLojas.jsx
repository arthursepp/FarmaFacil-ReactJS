import Footer from "../../Components/Footer"
import GenericContainer from "../../Components/Containers"
import { PrimaryText, SecondaryText } from "../../Components/Titles"
import { SecondaryButton } from "../../Components/Buttons"

function HomeLojas() {

  return (
    <div>
      <GenericContainer>
        <SecondaryText classes={'text-black'} text={'Olá usuário X'} />
        <div className="flex flex-col items-center justify-center mt-3">
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
      </GenericContainer>
      <Footer type={'loja'} text='' />
    </div>
  )
}

export default HomeLojas
