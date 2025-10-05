import { PrimaryButton, PrimaryDangerButton, ReturnButton, SecondaryButton } from '../../Components/Buttons'
import GenericContainer from '../../Components/Containers'
import { Header } from '../../Components/Titles'
import { faPills, faPlus, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import TabelaEstoque from '../../Components/Tables'
import Footer from '../../Components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Estoque() {

    const medicamentos = [
        {
            _id: { $oid: "68ddb99b39a3a5b9a0156a48" },
            nome: "Dipirona",
            nome_quimico: "Metamizol sódico",
            preco: { $numberDouble: "12.99" },
            quantidade: { $numberInt: "50" },
            validade: "2026-08-30",
            lote: "DIP1234",
            label: "Analgésico e Antipirético",
            imagem_url:
                "https://drive.google.com/uc?id=18ZOfpDM2g4R9d7v28wr2XK2K3N9ttbjL",
        },
        {
            _id: { $oid: "68ddb99b39a3a5b9a0156a48" },
            nome: "Dipirona",
            nome_quimico: "Metamizol sódico",
            preco: { $numberDouble: "12.99" },
            quantidade: { $numberInt: "50" },
            validade: "2026-08-30",
            lote: "DIP1234",
            label: "Analgésico e Antipirético",
            imagem_url:
                "https://drive.google.com/uc?id=18ZOfpDM2g4R9d7v28wr2XK2K3N9ttbjL",
        },
        {
            _id: { $oid: "68ddb99b39a3a5b9a0156a48" },
            nome: "Dipirona",
            nome_quimico: "Metamizol sódico",
            preco: { $numberDouble: "12.99" },
            quantidade: { $numberInt: "50" },
            validade: "2026-08-30",
            lote: "DIP1234",
            label: "Analgésico e Antipirético",
            imagem_url:
                "https://drive.google.com/uc?id=18ZOfpDM2g4R9d7v28wr2XK2K3N9ttbjL",
        },
        {
            _id: { $oid: "68ddb99b39a3a5b9a0156a48" },
            nome: "Dipirona",
            nome_quimico: "Metamizol sódico",
            preco: { $numberDouble: "12.99" },
            quantidade: { $numberInt: "50" },
            validade: "2026-08-30",
            lote: "DIP1234",
            label: "Analgésico e Antipirético",
            imagem_url:
                "https://drive.google.com/uc?id=18ZOfpDM2g4R9d7v28wr2XK2K3N9ttbjL",
        },
        {
            _id: { $oid: "68ddb99b39a3a5b9a0156a48" },
            nome: "Dipirona",
            nome_quimico: "Metamizol sódico",
            preco: { $numberDouble: "12.99" },
            quantidade: { $numberInt: "50" },
            validade: "2026-08-30",
            lote: "DIP1234",
            label: "Analgésico e Antipirético",
            imagem_url:
                "https://drive.google.com/uc?id=18ZOfpDM2g4R9d7v28wr2XK2K3N9ttbjL",
        },
        {
            _id: { $oid: "68ddb99b39a3a5b9a0156a48" },
            nome: "Dipirona",
            nome_quimico: "Metamizol sódico",
            preco: { $numberDouble: "12.99" },
            quantidade: { $numberInt: "50" },
            validade: "2026-08-30",
            lote: "DIP1234",
            label: "Analgésico e Antipirético",
            imagem_url:
                "https://drive.google.com/uc?id=18ZOfpDM2g4R9d7v28wr2XK2K3N9ttbjL",
        },
        {
            _id: { $oid: "68ddb99b39a3a5b9a0156a48" },
            nome: "Dipirona",
            nome_quimico: "Metamizol sódico",
            preco: { $numberDouble: "12.99" },
            quantidade: { $numberInt: "50" },
            validade: "2026-08-30",
            lote: "DIP1234",
            label: "Analgésico e Antipirético",
            imagem_url:
                "https://drive.google.com/uc?id=18ZOfpDM2g4R9d7v28wr2XK2K3N9ttbjL",
        },
        {
            _id: { $oid: "68ddb99b39a3a5b9a0156a48" },
            nome: "Dipirona",
            nome_quimico: "Metamizol sódico",
            preco: { $numberDouble: "12.99" },
            quantidade: { $numberInt: "50" },
            validade: "2026-08-30",
            lote: "DIP1234",
            label: "Analgésico e Antipirético",
            imagem_url:
                "https://drive.google.com/uc?id=18ZOfpDM2g4R9d7v28wr2XK2K3N9ttbjL",
        },
        {
            _id: { $oid: "68ddb99b39a3a5b9a0156a48" },
            nome: "Dipirona",
            nome_quimico: "Metamizol sódico",
            preco: { $numberDouble: "12.99" },
            quantidade: { $numberInt: "50" },
            validade: "2026-08-30",
            lote: "DIP1234",
            label: "Analgésico e Antipirético",
            imagem_url:
                "https://drive.google.com/uc?id=18ZOfpDM2g4R9d7v28wr2XK2K3N9ttbjL",
        },
        {
            _id: { $oid: "68ddb99b39a3a5b9a0156a48" },
            nome: "Dipirona",
            nome_quimico: "Metamizol sódico",
            preco: { $numberDouble: "12.99" },
            quantidade: { $numberInt: "50" },
            validade: "2026-08-30",
            lote: "DIP1234",
            label: "Analgésico e Antipirético",
            imagem_url:
                "https://drive.google.com/uc?id=18ZOfpDM2g4R9d7v28wr2XK2K3N9ttbjL",
        },
        {
            _id: { $oid: "68ddb99b39a3a5b9a0156a48" },
            nome: "Dipirona",
            nome_quimico: "Metamizol sódico",
            preco: { $numberDouble: "12.99" },
            quantidade: { $numberInt: "50" },
            validade: "2026-08-30",
            lote: "DIP1234",
            label: "Analgésico e Antipirético",
            imagem_url:
                "https://drive.google.com/uc?id=18ZOfpDM2g4R9d7v28wr2XK2K3N9ttbjL",
        },
        {
            _id: { $oid: "68ddb99b39a3a5b9a0156a48" },
            nome: "Dipirona",
            nome_quimico: "Metamizol sódico",
            preco: { $numberDouble: "12.99" },
            quantidade: { $numberInt: "50" },
            validade: "2026-08-30",
            lote: "DIP1234",
            label: "Analgésico e Antipirético",
            imagem_url:
                "https://drive.google.com/uc?id=18ZOfpDM2g4R9d7v28wr2XK2K3N9ttbjL",
        },
        {
            _id: { $oid: "68ddb99b39a3a5b9a0156a48" },
            nome: "Dipirona",
            nome_quimico: "Metamizol sódico",
            preco: { $numberDouble: "12.99" },
            quantidade: { $numberInt: "50" },
            validade: "2026-08-30",
            lote: "DIP1234",
            label: "Analgésico e Antipirético",
            imagem_url:
                "https://drive.google.com/uc?id=18ZOfpDM2g4R9d7v28wr2XK2K3N9ttbjL",
        },
        {
            _id: { $oid: "68ddb99b39a3a5b9a0156a48" },
            nome: "Dipirona",
            nome_quimico: "Metamizol sódico",
            preco: { $numberDouble: "12.99" },
            quantidade: { $numberInt: "50" },
            validade: "2026-08-30",
            lote: "DIP1234",
            label: "Analgésico e Antipirético",
            imagem_url:
                "https://drive.google.com/uc?id=18ZOfpDM2g4R9d7v28wr2XK2K3N9ttbjL",
        },
        {
            _id: { $oid: "68ddb99b39a3a5b9a0156a48" },
            nome: "Dipirona",
            nome_quimico: "Metamizol sódico",
            preco: { $numberDouble: "12.99" },
            quantidade: { $numberInt: "50" },
            validade: "2026-08-30",
            lote: "DIP1234",
            label: "Analgésico e Antipirético",
            imagem_url:
                "https://drive.google.com/uc?id=18ZOfpDM2g4R9d7v28wr2XK2K3N9ttbjL",
        },
        {
            _id: { $oid: "68ddb99b39a3a5b9a0156a48" },
            nome: "Dipirona",
            nome_quimico: "Metamizol sódico",
            preco: { $numberDouble: "12.99" },
            quantidade: { $numberInt: "50" },
            validade: "2026-08-30",
            lote: "DIP1234",
            label: "Analgésico e Antipirético",
            imagem_url:
                "https://drive.google.com/uc?id=18ZOfpDM2g4R9d7v28wr2XK2K3N9ttbjL",
        },
        {
            _id: { $oid: "68ddb99b39a3a5b9a0156a48" },
            nome: "Dipirona",
            nome_quimico: "Metamizol sódico",
            preco: { $numberDouble: "12.99" },
            quantidade: { $numberInt: "50" },
            validade: "2026-08-30",
            lote: "DIP1234",
            label: "Analgésico e Antipirético",
            imagem_url:
                "https://drive.google.com/uc?id=18ZOfpDM2g4R9d7v28wr2XK2K3N9ttbjL",
        },
        {
            _id: { $oid: "68ddb99b39a3a5b9a0156a48" },
            nome: "Dipirona",
            nome_quimico: "Metamizol sódico",
            preco: { $numberDouble: "12.99" },
            quantidade: { $numberInt: "50" },
            validade: "2026-08-30",
            lote: "DIP1234",
            label: "Analgésico e Antipirético",
            imagem_url:
                "https://drive.google.com/uc?id=18ZOfpDM2g4R9d7v28wr2XK2K3N9ttbjL",
        },
        {
            _id: { $oid: "68ddb99b39a3a5b9a0156a48" },
            nome: "Dipirona",
            nome_quimico: "Metamizol sódico",
            preco: { $numberDouble: "12.99" },
            quantidade: { $numberInt: "50" },
            validade: "2026-08-30",
            lote: "DIP1234",
            label: "Analgésico e Antipirético",
            imagem_url:
                "https://drive.google.com/uc?id=18ZOfpDM2g4R9d7v28wr2XK2K3N9ttbjL",
        },
        {
            _id: { $oid: "68ddb99b39a3a5b9a0156a48" },
            nome: "Dipirona",
            nome_quimico: "Metamizol sódico",
            preco: { $numberDouble: "12.99" },
            quantidade: { $numberInt: "50" },
            validade: "2026-08-30",
            lote: "DIP1234",
            label: "Analgésico e Antipirético",
            imagem_url:
                "https://drive.google.com/uc?id=18ZOfpDM2g4R9d7v28wr2XK2K3N9ttbjL",
        },
        {
            _id: { $oid: "68ddb99b39a3a5b9a0156a48" },
            nome: "Dipirona",
            nome_quimico: "Metamizol sódico",
            preco: { $numberDouble: "12.99" },
            quantidade: { $numberInt: "50" },
            validade: "2026-08-30",
            lote: "DIP1234",
            label: "Analgésico e Antipirético",
            imagem_url:
                "https://drive.google.com/uc?id=18ZOfpDM2g4R9d7v28wr2XK2K3N9ttbjL",
        },
        {
            _id: { $oid: "68ddb99b39a3a5b9a0156a48" },
            nome: "Dipirona",
            nome_quimico: "Metamizol sódico",
            preco: { $numberDouble: "12.99" },
            quantidade: { $numberInt: "50" },
            validade: "2026-08-30",
            lote: "DIP1234",
            label: "Analgésico e Antipirético",
            imagem_url:
                "https://drive.google.com/uc?id=18ZOfpDM2g4R9d7v28wr2XK2K3N9ttbjL",
        },
        {
            _id: { $oid: "68ddb99b39a3a5b9a0156a48" },
            nome: "Dipirona",
            nome_quimico: "Metamizol sódico",
            preco: { $numberDouble: "12.99" },
            quantidade: { $numberInt: "50" },
            validade: "2026-08-30",
            lote: "DIP1234",
            label: "Analgésico e Antipirético",
            imagem_url:
                "https://drive.google.com/uc?id=18ZOfpDM2g4R9d7v28wr2XK2K3N9ttbjL",
        },
        {
            _id: { $oid: "68ddb99b39a3a5b9a0156a48" },
            nome: "Dipirona",
            nome_quimico: "Metamizol sódico",
            preco: { $numberDouble: "12.99" },
            quantidade: { $numberInt: "50" },
            validade: "2026-08-30",
            lote: "DIP1234",
            label: "Analgésico e Antipirético",
            imagem_url:
                "https://drive.google.com/uc?id=18ZOfpDM2g4R9d7v28wr2XK2K3N9ttbjL",
        },
        {
            _id: { $oid: "68ddb99b39a3a5b9a0156a48" },
            nome: "Dipirona",
            nome_quimico: "Metamizol sódico",
            preco: { $numberDouble: "12.99" },
            quantidade: { $numberInt: "50" },
            validade: "2026-08-30",
            lote: "DIP1234",
            label: "Analgésico e Antipirético",
            imagem_url:
                "https://drive.google.com/uc?id=18ZOfpDM2g4R9d7v28wr2XK2K3N9ttbjL",
        },
        {
            _id: { $oid: "68ddb99b39a3a5b9a0156a48" },
            nome: "Dipirona",
            nome_quimico: "Metamizol sódico",
            preco: { $numberDouble: "12.99" },
            quantidade: { $numberInt: "50" },
            validade: "2026-08-30",
            lote: "DIP1234",
            label: "Analgésico e Antipirético",
            imagem_url:
                "https://drive.google.com/uc?id=18ZOfpDM2g4R9d7v28wr2XK2K3N9ttbjL",
        },
        {
            _id: { $oid: "68ddb99b39a3a5b9a0156a48" },
            nome: "Dipirona",
            nome_quimico: "Metamizol sódico",
            preco: { $numberDouble: "12.99" },
            quantidade: { $numberInt: "50" },
            validade: "2026-08-30",
            lote: "DIP1234",
            label: "Analgésico e Antipirético",
            imagem_url:
                "https://drive.google.com/uc?id=18ZOfpDM2g4R9d7v28wr2XK2K3N9ttbjL",
        },
        {
            _id: { $oid: "68ddb99b39a3a5b9a0156a48" },
            nome: "Dipirona",
            nome_quimico: "Metamizol sódico",
            preco: { $numberDouble: "12.99" },
            quantidade: { $numberInt: "50" },
            validade: "2026-08-30",
            lote: "DIP1234",
            label: "Analgésico e Antipirético",
            imagem_url:
                "https://drive.google.com/uc?id=18ZOfpDM2g4R9d7v28wr2XK2K3N9ttbjL",
        },
    ];

    const handleEdit = (item) => {
        console.log("Editar:", item);
        // aqui você pode abrir um modal para editar
    };

    const handleDelete = (item) => {
        console.log("Excluir:", item);
        // aqui você pode chamar sua API de delete
    };

    return (
        <>
            <div className='p-5'>
                <ReturnButton />
                <div className='flex items-center justify-between'>
                    <Header text={'Estoque'} divClassName={'mt-2'} icon={faPills} iconClassName={'text-2xl'} />
                    <SecondaryButton link={true} className='flex items-center gap-3' url='/adicionar-produto'>
                        <span className='hidden sm:hidden md:block xl:block'>Adicionar produto</span>
                        <FontAwesomeIcon icon={faPlus} />
                    </SecondaryButton>
                </div>

                <TabelaEstoque
                    dados={medicamentos}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />

            </div>
            <Footer type='loja' className='fixed' />
        </>
    )
}

export default Estoque
