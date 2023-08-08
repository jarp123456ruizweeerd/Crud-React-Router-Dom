export async function ObtenerPersonas() {

    const respuesta = await fetch(import.meta.env.VITE_API_URL);
    const resultado = await respuesta.json();

    return resultado
}
export async function ObtenerPersona(id) {

    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
    const resultado = await respuesta.json();

    return resultado
}


export async function AgregarCliente(cliente) {
    try {
        const respuesta = await fetch(import.meta.env.VITE_API_URL, {
            method: 'post',
            body: JSON.stringify(cliente),
            headers: {
                "Content-Type": "application/json"
            }

        })
        await respuesta.json();
    } catch (error) {
        console.log(error);
    }
}

export async function ActualizarPersona(id, datos) {
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: 'put',
            body: JSON.stringify(datos),
            headers: {
                "Content-Type": "application/json"
            }

        })
        await respuesta.json();
    } catch (error) {
        console.log(error);
    }

}

export async function Eliminarids(ids) {
    try {
        let respuesta;
        for (let index = 0; index < ids.length; index++) {
            respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${ids[index]}`, {
                method: 'DELETE',
               
            })
            await respuesta.json();
        }
    } catch (error) {
        console.log(error);
    }
} 