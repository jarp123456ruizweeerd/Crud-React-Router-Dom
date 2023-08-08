import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const TablePersonas = ({ p, seleccionados, setseleccionados }) => {
    const navigate = useNavigate();
    return (
        <>
            <tr className='hover:bg-green-100'>

                <td className='p-2 text-center border'>
                    <input type="checkbox" name="" id="" onChange={((e) => {
                        if (e.target.checked) {
                            console.log('Se selecciono')
                            setseleccionados([...seleccionados, p])
                        } else {
                            if (!e.target.checked) {
                                const datos = seleccionados.filter((s) => s.id != p.id)
                                setseleccionados(datos);
                            }
                        }
                    })} />
                </td>
                <td className='p-2 text-center border'>{p.nombre}</td>
                <td className='p-2 text-center border'>{p.telefono}</td>
                <td className='p-2 text-center border'>{p.email}</td>
                <td className="py-2 text-center border">
                    <button type="button"
                        className='text-blue-600 hover:text-blue-700 uppercase font-bold text-xs'
                        onClick={() => navigate(`/filavirtual/${p.id}/editar`)}>
                        Editar
                    </button>

                </td>
            </tr>
        </>
    )
}

export default TablePersonas
