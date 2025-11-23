import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

function TabelaEstoque({ dados, onEdit, onDelete }) {
    return (
        <div className="max-h-[400px] sm:max-h-[350px] md:max-h-[400px] xl:max-h-[400px] overflow-x-auto mt-3 rounded-xl border border-slate-400">
            <table className="min-w-full rounded-xl shadow-sm">
                {/* Cabeçalhos */}
                <thead className="bg-primaryblue text-white font-bold">
                    <tr>
                        <th className="px-6 py-3 text-left text-sm text-white font-bold ">
                            Nome
                        </th>
                        <th className="hidden xl:block md:block sm:hidden px-6 py-3 text-left text-sm text-white font-bold ">
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

                {/* Corpo */}
                <tbody className=''>
                    {dados.map((item) => (
                        <tr
                            key={item._id}
                            className="hover:bg-gray-50 even:bg-gray-50 odd:bg-white"
                        >
                            <td className="px-6 py-4 text-sm text-gray-800 ">
                                {item.nome}
                            </td>
                            <td className="hidden xl:block md:block sm:hidden px-6 py-4 text-sm text-gray-800 ">
                                R$ {item.preco}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 ">
                                {item.quantidade}
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
                                        className="text-red-600 hover:text-red-800 cursor-pointer"
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
