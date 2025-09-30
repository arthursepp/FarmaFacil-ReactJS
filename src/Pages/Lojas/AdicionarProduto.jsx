import { useState } from 'react'
import GenericContainer from '../../Components/Containers'
import { SecondaryText } from '../../Components/Titles'
import { NewProdutoForm } from '../../Components/Form'
import InputField, { TextareaField } from '../../Components/InputField'
import { PrimaryButton, ReturnButton } from '../../Components/Buttons'

function AdicionarProduto() {

    const [file, setFile] = useState(null)

    function handleChange(e) {
        console.log(e.target.files)
        setFile(URL.createObjectURL(e.target.files[0]))
    }

    return (
        <GenericContainer>
            <ReturnButton />
            <SecondaryText text={'Adicionar produto'} className={'mt-5'} />
            
            <NewProdutoForm className='mt-5 gap-5 w-full mx-auto'>
                <div className='flex flex-col items-center'>                    
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
                                className="max-w-[400px] max-h-[400px] object-cover rounded border-2 border-blue-500 p-3"
                            />
                        </div>
                    )}

                    <label
                        htmlFor="fileInput"
                        className="bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600 p-3 mt-5"
                    >
                        Escolher imagem do produto
                    </label>
                </div>

                <hr className='border-1 w-full border-slate-400' />
                
                {/* // * Nome do produto */}
                <InputField 
                    label={'Nome do produto'}
                    type='text'
                    containerClassName='w-[50%]'
                    labelClassName='text-xl font-bold'
                    inputClassName='border-2 p-2 rounded-xl border-blue-500'
                    placeholder='Dipirona monoidratada'
                    inputName=''
                />

                {/* // * Nome químico */}
                <InputField 
                    label={'Nome químico'}
                    type={'text'}
                    containerClassName='w-[50%]'
                    labelClassName='text-xl font-bold'
                    inputClassName='border-2 p-2 rounded-xl border-blue-500'
                    placeholder={'AAAAAAAAAAAAAAAAAAAAAAAA'}
                    inputName=''
                />

                {/* // * Preço e estoque */}
                <div className='flex items-center justify-center gap-5 w-[50%]'>
                    {/* // ! IMPLEMENTAR MÁSCARA DE FORMATAÇÃO AO INPUT DE PREÇO */}
                    <InputField 
                        label={'Preço'}
                        type={'text'}                        
                        containerClassName='w-full'
                        labelClassName='text-xl font-bold'
                        inputClassName='border-2 p-2 rounded-xl border-blue-500'
                        placeholder={''}
                        inputName=''
                    />
                    {/* // ! IMPEDIR O USUÁRIO DE INSERIR Nº NEGATIVO */}
                    <InputField 
                        label={'Estoque'}
                        type={'number'}
                        containerClassName='w-full'
                        labelClassName='text-xl font-bold'
                        inputClassName='border-2 p-2 rounded-xl border-blue-500'
                        placeholder={''}
                        name=''
                    />

                </div>

                {/* // * Lote */}
                <InputField 
                    label={'Lote'}
                    type={'text'}
                    containerClassName='w-[50%]'
                    labelClassName='text-xl font-bold'
                    inputClassName='border-2 p-2 rounded-xl border-blue-500'
                    placeholder={''}
                    name=''
                />

                {/* // * Descrição */}
                {/* // ? Adicionar limite de caracteres? */}
                <TextareaField
                    label={'Descricao'}
                    labelclassName={'w-[50%]'}
                    inputclassName={'w-[50%]'}
                    placeholder={''}
                    name=''
                />

                {/* // * Validade */}
                <InputField 
                    label={'Validade'}
                    type={'date'}
                    containerClassName='w-[50%]'
                    labelClassName='text-xl font-bold'
                    inputClassName='border-2 p-2 rounded-xl border-blue-500'
                    placeholder={''}
                    name=''
                />

                <PrimaryButton type='submit' className='w-[50%]'>
                    <span className='text-xl'>
                        Adicionar produto
                    </span>
                </PrimaryButton>
            </NewProdutoForm>
        </GenericContainer>
    )
}

export default AdicionarProduto
