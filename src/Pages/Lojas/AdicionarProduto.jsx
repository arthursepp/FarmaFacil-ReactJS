import { useState } from 'react'
import { CardContainer } from '../../Components/Containers'
import { SecondaryText } from '../../Components/Titles'
import { PrimaryButton, ReturnButton } from '../../Components/Buttons'
import MaskedInput, { InputField, TextareaField } from '../../Components/Inputs'
import api from '../../services/api'

function AdicionarProduto() {
    const [file, setFile] = useState(null)
    const [fileObj, setFileObj] = useState(null)

    const [nome, setNome] = useState('')
    const [nomeQuimico, setNomeQuimico] = useState('')
    const [preco, setPreco] = useState('')
    const [estoque, setEstoque] = useState('')
    const [lote, setLote] = useState('')
    const [validade, setValidade] = useState('')
    const [descricao, setDescricao] = useState('')
    const [label, setLabel] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    function handleChange(e) {
        if (e.target.files && e.target.files[0]) {
            setFile(URL.createObjectURL(e.target.files[0]))
            setFileObj(e.target.files[0])
        }
    }

    const handleCurrencyChange = (clean, formatted) => {
        let precoDecimal = ''
        if (clean.length > 0) {
            precoDecimal = (Number(clean) / 100).toFixed(2)
        }
        setPreco(precoDecimal)
    }

    function handleEstoqueChange(e) {
        let value = e.target.value.replace(/\D/g, '')
        setEstoque(value)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)
        setError('')
        setSuccess('')

        const id_farmacia = localStorage.getItem('id_farmacia')
        if (!id_farmacia) {
            setError('Farmácia não identificada.')
            setLoading(false)
            return
        }

        if (!fileObj) {
            setError('Selecione a imagem do produto!')
            setLoading(false)
            return
        }

        const formData = new FormData()
        formData.append('farmacia', id_farmacia)
        formData.append('nome', nome)
        formData.append('nome_quimico', nomeQuimico)
        formData.append('preco', preco)
        formData.append('quantidade', estoque)
        formData.append('validade', validade)
        formData.append('lote', lote)
        formData.append('label', label)
        formData.append('descricao', descricao)
        if (fileObj) {
            formData.append('imagem', fileObj)
        }

        try {
            await api.post('/produtos/auth/register', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            setSuccess('Produto cadastrado com sucesso!')
            // Limpar campos
            setNome('')
            setNomeQuimico('')
            setPreco('')
            setEstoque('')
            setLote('')
            setValidade('')
            setDescricao('')
            setLabel('')
            setFile(null)
            setFileObj(null)
        } catch (err) {
            setError(`Erro ao cadastrar produto ${err}`)
        } finally {
            setLoading(false)
        }
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
                    <form onSubmit={handleSubmit}>
                        {/* Pré visualização da imagem */}
                        <div className='flex flex-col items-center p-3 border-b-2 border-slate-400 mb-5'>
                            <input
                                id="fileInput"
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleChange}
                                name='imagem'
                            />
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
                                    hover:bg-blue-600 
                                    p-3 
                                    mt-5
                                    text-md
                                "
                            >
                                Escolher imagem do produto
                            </label>
                        </div>

                        <div className="flex flex-col gap-3 my-2">
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
                                value={nome}
                                onChange={e => setNome(e.target.value)}
                                required
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
                                value={nomeQuimico}
                                onChange={e => setNomeQuimico(e.target.value)}
                                required
                            />
                            <MaskedInput
                                labelText={'Preço'}
                                mask={'currency'}
                                value={preco}
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
                                required
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
                                value={estoque}
                                onChange={handleEstoqueChange}
                                onKeyDown={(e) => {
                                    if (e.key === '-' || e.key === 'e') {
                                        e.preventDefault();
                                    }
                                }}
                                required
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
                                value={lote}
                                onChange={e => setLote(e.target.value)}
                                required
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
                                value={validade}
                                onChange={e => setValidade(e.target.value)}
                                required
                            />
                            <InputField
                                labelText={'Rótulo:'}
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
                                value={label}
                                onChange={e => setLabel(e.target.value)}
                            />
                        </div>

                        {error && <div className="text-center text-red-500 mt-2">{error}</div>}
                        {success && <div className="text-center text-green-500 mt-2">{success}</div>}
                        <div className="flex justify-center items-center">
                            <PrimaryButton type='submit' className='xl:w-[60%] md:w-full sm:w-full w-full mx-auto mt-7' disabled={loading}>
                                <span>
                                    {loading ? 'Adicionando...' : 'Adicionar produto'}
                                </span>
                            </PrimaryButton>
                        </div>
                    </form>
                </CardContainer>
            </div>
        </>
    )
}

export default AdicionarProduto