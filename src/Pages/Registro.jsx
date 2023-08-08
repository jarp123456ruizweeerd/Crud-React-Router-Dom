
import Formulario from './Formulario';
import { useNavigate, Form, useActionData, redirect } from 'react-router-dom';
import Error from '../Components/Error';
import { AgregarCliente } from '../api/personas';


export async function action({ request }) {

  const formData = await request.formData();
  const datos = Object.fromEntries(formData);

  console.log(datos.nombre);
  const errores = [];
  if (Object.values(datos).includes('')) {
    errores.push('Hay campos vacios')
  }

  if (Object.keys(errores).length > 0) {
    return errores
  }

  await AgregarCliente(datos);
  return redirect('/');

}



const Registro = () => {

  const errores = useActionData();
  const navigator = useNavigate();


  return (
    <>
      <p className="mt-3">Registro</p>

      <div className="flex justify-end">
        <button
          onClick={() => navigator('/')}
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase">
          Volver
        </button>
      </div>
      <div className="bg-gray-200 shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-10">

        {errores?.length && errores.map((error, i)=> (<Error key={i}>{error}</Error>)) }

        <Form method='post'>
          <Formulario />
          <input type="submit"
            className="cursor-pointer mt-5 w-full bg-green-800 p-3 uppercase font-bold text-white text-lg"
            value='Formar' />
        </Form>
      </div>
    </>
  );
};

export default Registro;
