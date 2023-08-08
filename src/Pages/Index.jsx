import { useLoaderData, Navigate, useNavigate, redirect } from 'react-router-dom';
import TablePersonas from '../Components/TablePersonas';
import { useEffect, useState } from 'react';
import Update from '../Images/update.svg';
import Delete from '../Images/delete.svg';
import Logo from '../Images/fila.svg';
import { Eliminarids, ObtenerPersonas } from '../api/personas';

export function loader() {
  const clientes = ObtenerPersonas();
  return clientes;
}



const Index = () => {

  const personas = useLoaderData();

  const [seleccionados, setseleccionados] = useState([])
  const [activo, setactivo] = useState(false)




  useEffect(() => {
    console.log('Desde el index', seleccionados)
    // const [nombre] = seleccionados;
    const ids = seleccionados.map(s => {
      return s.id
    })
    // console.log(ids);
    if (seleccionados.length > 0) {
      setactivo(true);
    } else {
      if (seleccionados.length == 0) {
        setactivo(false);
      }
    }
  }, [seleccionados])

  return (
    <div style={{ marginTop: '-15px' }}>
      <div className='flex m-6'>
        <div className='flex items-center'>
          <h1 className={'text-green-950 font-semibold text-6xl '}>Fila Virtual </h1>
          <img src={Logo} alt="" width='180px' className=''/>
        </div>
        <nav
          style={{
           
            padding: '10px',
            transform: `scale(${activo ? '1' : '0'})`,
            transformOrigin: 'top right',
            transition: 'transform 0.3s ease-in-out',
            width: '50%',
            height: '75px',
            justifyItems: 'center',
            alignItems: 'center',
            marginTop: '80px',
            position: 'relative'
          }}
        >
          <div className='flex justify-end w-full'>
            {/* <button type="button" className='h-12 m-2 p-1 bg-blue-400 hover:bg-blue-500 rounded-sm w-28'>
              <img src={Update} className='w-6 text-center m-auto' alt="" />
              <p className='text-xs font-semibold'> Modificar </p>
            </button> */}


            <button type="button"
              onClick={(e) => {
                // e.preventDefault();

                const proceso = async () => {
                  const ids = seleccionados.map(s => {
                    return s.id
                  })
                  await Eliminarids(ids)
                  window.location.reload(); // Recargar la página
                }
                proceso();

              }}

              className='h-12 m-2 p-1 bg-red-400 hover:bg-red-500 rounded-sm w-28'>
              <img src={Delete} className='w-6 img-centered m-auto' alt="" />
              <p className='text-xs font-semibold'> Liberar </p>
            </button>

          </div>
        </nav>
      </div>
      <table className='table border shadow table-auto w-full bg-white'>
        <thead className='bg-green-900'>
          <tr>
            <th className='p-2 text-sm text-white'></th>
            {/* <th className='p-2 text-sm text-white'>seleccionados.nombre</th> */}
            <th className='p-2 text-sm text-white'>Nombre</th>
            <th className='p-2 text-sm text-white'>Telefono</th>
            <th className='p-2 text-sm text-white'>Correo</th>
            <th className='p-2 text-sm text-white'>Modificar</th>

          </tr>
        </thead>
        <tbody className=''>
          {personas.map((p, i) => (
            <TablePersonas
              key={i}
              p={p}
              seleccionados={seleccionados}
              setseleccionados={setseleccionados}
              activo={activo}
              setactivo={setactivo}
            // almacenar={() => almacenar}
            />

          ))}
        </tbody>
      </table>

    </div >
  )
}

export default Index
