import { ActualizarPersona, ObtenerPersona } from "../api/personas";
import Formulario from "../Pages/Formulario";
import { Form, useNavigate, useLoaderData, useActionData, redirect } from "react-router-dom";
import Error from "./Error";
export async function loader({ params }) {
    const persona = await ObtenerPersona(params.personaid)
    if (Object.values(persona).length == 0) {
        throw new Response('', {
            status: 404,
            statusText: 'No hay resultados'
        })
    }
    return persona;

}

export async function action({ request, params }) {
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

    await ActualizarPersona(params.personaid, datos);
    return redirect('/');
}


export const EditarPersona = () => {
    const persona = useLoaderData();
    const navigator = useNavigate();
    const errores = useActionData();
    // console.log(persona);
    return (
        <>
            <p className="mt-3">Editar Registro</p>

            <div className="flex justify-end">
                <button
                    onClick={() => navigator('/')}
                    className="bg-blue-800 text-white px-3 py-1 font-bold uppercase">
                    Volver
                </button>
            </div>
            <div className="bg-gray-200 shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-10">

                {errores?.length && errores.map((error, i)=> (<Error key={i}>{error}</Error>)) }

                <Form method='put'>
                    <Formulario
                        persona={persona} />
                    <input type="submit"
                        className="cursor-pointer mt-5 w-full bg-green-800 p-3 uppercase font-bold text-white text-lg"
                        value='Formar' />
                </Form>
            </div>
        </>
    )
}
