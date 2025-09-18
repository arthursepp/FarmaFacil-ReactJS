import Footer from "../../Components/Footer"
import GenericContainer from "../../Components/Containers"
import { PrimaryText } from "../../Components/Titles"
import { SecondaryButton } from "../../Components/Buttons"

function HomeLojas() {

  return (
    <>
      <GenericContainer>
        <PrimaryText classes={'text-black'} text={'Olá usuário X'} />
        <div className="flex flex-col items-center justify-center mt-3">
          <SecondaryButton link={true} url='#' text={'Adicionar novo produto'} classes='w-[50%] text-center duration-300 ease-in-out' />
        </div>
      </GenericContainer>
      <Footer type={'loja'} text='' />
    </>
  )
}

export default HomeLojas
