import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

function TabelaEstoque({ dados, onEdit, onDelete }) {
    return (
        <div className="max-h-[300px] overflow-x-auto mt-2.5 rounded-xl border border-slate-400">
            <table className="min-w-full rounded-xl shadow-sm">
                <thead className="bg-blue-500 text-white font-bold">
                    <tr>
                        <th className="px-6 py-3 text-left text-sm text-white font-bold ">
                            Nome
                        </th>
                        <th className="px-6 py-3 text-left text-sm text-white font-bold ">
                            Preço
                        </th>
                        <th className="px-6 py-3 text-left text-sm text-white font-bold ">
                            Quantidade
                        </th>
                        <th className="px-6 py-3 text-center text-sm text-white font-bold ">
                            Ações
                        </th>
                    </tr>
                </thead>
                <tbody className=''>
                    {dados.map((item) => (
                        <tr
                            key={item._id.$oid}
                            className="hover:bg-gray-50 even:bg-gray-50 odd:bg-white"
                        >
                            <td className="px-6 py-4 text-sm text-gray-800 ">
                                {item.nome}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 ">
                                R$ {parseFloat(item.preco.$numberDouble).toFixed(2)}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 ">
                                {item.quantidade.$numberInt}
                            </td>
                            <td className="px-6 py-4 text-sm text-center ">
                                <div className="flex justify-center gap-4">
                                    <a
                                        href='/editar-produto'
                                        onClick={() => onEdit(item)}
                                        className="text-blue-600 hover:text-blue-800"
                                    >
                                        <FontAwesomeIcon icon={faEdit} />
                                    </a>
                                    <a
                                        onClick={() => onDelete(item)}
                                        className="text-red-600 hover:text-red-800"
                                    >
                                        <FontAwesomeIcon icon={faTrash} />
                                    </a>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TabelaEstoque
