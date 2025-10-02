import { useState } from 'react'
import GenericContainer, { CardContainer } from '../../Components/Containers'
import { SecondaryText } from '../../Components/Titles'
import { NewProdutoForm } from '../../Components/Form'
// import InputField, { TextareaField } from '../../Components/InputField'
import { PrimaryButton, ReturnButton } from '../../Components/Buttons'

function AdicionarProduto() {

    const [file, setFile] = useState(null)

    function handleChange(e) {
        console.log(e.target.files)
        setFile(URL.createObjectURL(e.target.files[0]))
    }

    return (
        <>
            <div className="p-5">
                <ReturnButton />
                <SecondaryText
                    text={'Adicionar produto'}
                    className={'mt-3'}
                />

                <CardContainer className='mt-3 border-blue-500 p-2'>
                    <div className='flex flex-col items-center p-3 border-b-2 border-slate-400'>
                        <input
                            id="fileInput"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleChange}
                        />
                        {/* Pré-visualização */}
                        {file && (
                            <div className="mt-4">
                                <img
                                    src={file}
                                    alt="Pré-visualizar imagem"
                                    className="
                                        xl:max-w-[300px] 
                                        md:max-w-[400px] 
                                        sm:max-w-[250px]

                                        xl:max-h-[400px] 
                                        md:max-h-[500px] 
                                        sm:max-h-[200px] 

                                        object-cover 
                                        rounded 
                                        border-2 
                                        border-blue-500 
                                        p-3
                                    "
                                />
                            </div>
                        )}
                        <label
                            htmlFor="fileInput"
                            className="
                                bg-blue-500 
                                text-white 
                                rounded 
                                cursor-pointer 
                                hover:bg-primaryBlue 
                                p-3 
                                mt-5
                                text-md
                            "
                        >
                            Escolher imagem do produto
                        </label>
                    </div>

                    <div className="flex flex-col gap-3 my-2">
                        {/* // * Nome do produto */}
                        <InputField labelText={'Nome do produto:'} type='text' />
                        <InputField labelText={'Nome Químico:'} type='text' />
                        {/* // ! IMPLEMENTAR MÁSCARA DE FORMATAÇÃO AO INPUT DE PREÇO */}
                        <InputField labelText={'Preço:'} type='text' />
                        {/* // ! IMPEDIR O USUÁRIO DE INSERIR Nº NEGATIVO */}
                        <InputField labelText={'Estoque:'} type='number' />
                        <InputField labelText={'Lote:'} type='text' />
                        <InputField labelText={'Validade:'} type='date' />
                        <div className='flex flex-col gap-2'>
                            <label htmlFor='' className='text-xl'>Descrição</label>
                            {/* // ? Adicionar limite de caracteres? */}
                            <textarea id="" className='border-2 border-blue-500 p-2 rounded-xl' name='' ></textarea>
                        </div>
                    </div>

                    <PrimaryButton type='submit' className='xl:w-[70%] md:w-full sm:w-full w-full mx-auto'>
                        <span className=''>
                            Adicionar produto
                        </span>
                    </PrimaryButton>
                </CardContainer>
            </div>
        </>
    )
}

const InputField = ({ labelText, name, ...props }) => {
    return (
        <div className='flex flex-col gap-2'>
            <label htmlFor={name} className='text-xl'>{labelText}</label>
            <input id="" className='border-2 border-blue-500 p-2 rounded-xl' name={name} {...props} />
        </div>
    )
}

export default AdicionarProduto
