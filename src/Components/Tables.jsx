import React from 'react'

function GenericTable({columns, data, divClassName}) {
  return (
    <div className={`overflow-x-auto rounded-2xl shadow-md ${divClassName}`}>
      <table className='min-w-full border-collapse bg-white text-center text-sm text-gray-600'>
        <thead className='bg-blue-500 text-xs uppercase text-white'>
            <tr>
                {columns.map((col, index) => (
                    <th key={index} className='px-6 py-3 font-medium'>
                        {col.header}
                    </th>
                ))}
            </tr>
        </thead>
        <tbody className='divide-y divide-gray-200'>
            {data.map((row, rowIndex) => (
                <tr key={rowIndex} className='hover:bg-gray-200'>
                    {columns.map((col, colIndex) => (
                        <td key={colIndex} className='px-6 py-4'>
                            {typeof col.accessor === 'function' ? col.accessor(row) : row[col.accessor]}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default GenericTable
