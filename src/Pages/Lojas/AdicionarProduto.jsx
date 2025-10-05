import { useState } from 'react'
import { CardContainer } from '../../Components/Containers'
import { SecondaryText } from '../../Components/Titles'
import { PrimaryButton, ReturnButton } from '../../Components/Buttons'
import MaskedInput, { InputField, TextareaField } from '../../Components/Inputs'

function AdicionarProduto() {

    const [file, setFile] = useState(null)

    function handleChange(e) {
        console.log(e.target.files)
        setFile(URL.createObjectURL(e.target.files[0]))
    }

    const handleCurrencyChange = (clean, formatted) => {
        console.log('Valor limpo:', clean);
        console.log('Valor formatado:', formatted);
    };

    // Validação robusta para impedir negativos e valores não numéricos
    function handleEstoqueChange(e) {
        let value = e.target.value;
        // Remove caracteres não numéricos
        value = value.replace(/\D/g, '');
        // Garante que não seja negativo
        if (value === '' || Number(value) < 0) value = '0';
        setEstoque(value);
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
                    {/* Pré visualização da imagem */}
                    <div className='flex flex-col items-center p-3 border-b-2 border-slate-400 mb-5'>
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
                        <InputField
                            labelText={'Nome do produto:'}
                            type='text'
                            divClassName='
                                m-auto
                                xl:m-auto
                                md:m-auto
                                w-full 
                                xl:w-[60%] 
                                md:w-[60%] 
                                sm:w-full
                            '
                        />
                        <InputField
                            labelText={'Nome Químico:'}
                            type='text'
                            divClassName='
                                m-auto                                
                                xl:m-auto
                                md:m-auto                                
                                w-full 
                                xl:w-[60%] 
                                md:w-[60%] 
                                sm:w-full
                            '
                        />
                        <MaskedInput
                            labelText={'Preço'}
                            mask={'currency'}
                            onValueChange={handleCurrencyChange}
                            divClassName='
                                m-auto                                
                                xl:m-auto
                                md:m-auto                                
                                w-full 
                                xl:w-[60%] 
                                md:w-[60%] 
                                sm:w-full
                            '
                        />
                        <InputField
                            labelText={'Estoque:'}
                            type='number'
                            divClassName='
                                m-auto                                
                                xl:m-auto
                                md:m-auto                                
                                w-full 
                                xl:w-[60%] 
                                md:w-[60%] 
                                sm:w-full
                            '
                            min='0'
                            onKeyDown={(e) => {
                                if (e.key === '-' || e.key === 'e') {
                                    e.preventDefault();
                                }
                            }}
                        />
                        <InputField
                            labelText={'Lote:'}
                            type='text'
                            divClassName='
                                m-auto                                
                                xl:m-auto
                                md:m-auto                                
                                w-full 
                                xl:w-[60%] 
                                md:w-[60%] 
                                sm:w-full
                            '
                        />
                        <InputField
                            labelText={'Validade:'}
                            type='date'
                            divClassName='
                                m-auto                                
                                xl:m-auto
                                md:m-auto                                
                                w-full
                                xl:w-[60%]
                                md:w-[60%] 
                                sm:w-full
                            '
                        />
                        {/* // ? Adicionar limite de caracteres? */}
                        <TextareaField
                            divClassName='
                                m-auto                                
                                xl:m-auto
                                md:m-auto                                
                                w-full 
                                xl:w-[60%] 
                                md:w-[60%] 
                                sm:w-full
                            '
                            labelText={'Descrição:'}
                        />
                    </div>

                    <PrimaryButton type='submit' className='xl:w-[60%] md:w-full sm:w-full w-full mx-auto mt-7'>
                        <span className=''>
                            Adicionar produto
                        </span>
                    </PrimaryButton>
                </CardContainer>
            </div>
        </>
    )
}

export default AdicionarProduto
