import { useState, useEffect } from 'react'
import { CardContainer } from '../../Components/Containers'
import { SecondaryText } from '../../Components/Titles'
import { PrimaryButton, ReturnButton } from '../../Components/Buttons'
import MaskedInput, { InputField, TextareaField } from '../../Components/Inputs'
import api from '../../services/api'
import { useNavigate } from 'react-router-dom'

function EditarProduto() {

    const navigate = useNavigate()

    const id_farmacia = localStorage.getItem('id_farmacia')
    const id_produto = localStorage.getItem('id_produto')

    const [urlImagem, setUrlImagem] = useState('')
    const [nome, setNome] = useState('')
    const [nomeQuimico, setNomeQuimico] = useState('')
    const [label, setLabel] = useState('')
    const [lote, setLote] = useState('')
    const [preco, setPreco] = useState('')
    const [estoque, setEstoque] = useState('')
    const [validade, setValidade] = useState('')

    // * Verificando, em tempo real, se o id do produto está no localStorage
    useEffect(() => {
        const checkIdProduto = () => {
            const id_produto = localStorage.getItem('id_produto')
            if (!id_produto) {
                navigate('/estoque')
            }
        }

        // Checa ao montar
        checkIdProduto()

        // Checa em tempo real (em outras abas/janelas)
        window.addEventListener('storage', checkIdProduto)

        // Checa periodicamente na mesma aba (caso removido via código)
        const interval = setInterval(checkIdProduto, 500)

        return () => {
            window.removeEventListener('storage', checkIdProduto)
            clearInterval(interval)
        }
    }, [navigate])

    // * Consulta inicial da api
    const carregarDados = async () => {
        try {
            const response = await api.get(`/produtos/${id_produto}`)
            const data = response.data.produto

            console.log(data)
            setUrlImagem(data.imagem_url)
            setNome(data.nome)
            setNomeQuimico(data.nome_quimico)
            setLabel(data.label)
            let precoAPI = data.preco
            if (precoAPI % 1 === 0) {
                precoAPI = precoAPI * 100
            } else {
                precoAPI = Math.round(precoAPI * 100)
            }
            setPreco(precoAPI.toString())            
            setEstoque(data.quantidade)
            setLote(data.lote)
            setValidade(data.validade)            

        } catch (error) {
            alert(`Não foi possível carregar os dados desse produto: ${error}`)
        }
    }

    // * Pré-visualização da imagem selecionada
    const [file, setFile] = useState(urlImagem)
    function handleChangeImage(e) {        
        setFile(URL.createObjectURL(e.target.files[0]))
    }

    // * Impedindo números negativos e valores não numéricos no campo 'Estoque'
    function handleEstoqueChange(e) {
        let value = e.target.value;
        // * Remove caracteres não numéricos
        value = value.replace(/\D/g, '');
        // * Garante que não seja negativo
        if (value === '' || Number(value) < 0) value = '0';
        setEstoque(value);
    }

    const handleUpdate = async (e) => {
        e.preventDefault()

        try {
            const formData = new FormData()
            formData.append('nome', nome)
            formData.append('nome_quimico', nomeQuimico)
            formData.append('preco', (Number(preco) / 100).toString())
            formData.append('quantidade', estoque)
            formData.append('validade', validade)
            formData.append('lote', lote)
            formData.append('label', label)
            // Se uma nova imagem foi selecionada, envie
            const input = document.getElementById('fileInput')
            if (input && input.files[0]) {
                formData.append('imagem', input.files[0])
            }

            await api.patch(`/produtos/${id_produto}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })

            

            localStorage.removeItem('id_produto')
            navigate('/estoque')
        } catch (error) {
            alert(`Erro ao atualizar o produto: ${error}`)
        }
    }

    const handleCurrencyChange = (clean, formatted) => {
        let precoDecimal = ''
        if (clean.length > 0) {
            precoDecimal = (Number(clean) / 100).toFixed(2)
        }
        setPreco(precoDecimal)
    }

    useEffect(() => {
        carregarDados()
        setFile(urlImagem)
    }, [urlImagem])

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
                            onChange={handleChangeImage}
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
                                hover:bg-blue-600 
                                p-3 
                                mt-5
                                text-md
                            "
                        >
                            Escolher imagem do produto
                        </label>
                    </div>

                    {/* // * Nome do produto */}
                    <InputField
                        labelText={'Nome do produto:'}
                        type='text'
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                    />
                    <InputField
                        labelText={'Nome Químico:'}
                        type='text'
                        value={nomeQuimico}
                        onChange={e => setNomeQuimico(e.target.value)}
                    />
                    <MaskedInput
                        labelText={'Preço'}
                        mask={'currency'}
                        value={preco}
                        onValueChange={handleCurrencyChange}
                    />
                    <InputField
                        labelText={'Estoque:'}
                        type='number'
                        value={estoque}
                        onChange={handleEstoqueChange}
                    />
                    <InputField
                        labelText={'Lote:'}
                        type='text'
                        value={lote}
                        onChange={e => setLote(e.target.value)}
                    />
                    <InputField
                        labelText={'Validade:'}
                        type='date'
                        value={validade}
                        onChange={e => setValidade(e.target.value)}
                    />

                    <PrimaryButton type='submit' className='xl:w-[60%] md:w-full sm:w-full w-full mx-auto mt-8' onClick={handleUpdate}>
                        <span className=''>
                            Editar produto
                        </span>
                    </PrimaryButton>
                </CardContainer>
            </div>
        </>
    )
}

export default EditarProduto
