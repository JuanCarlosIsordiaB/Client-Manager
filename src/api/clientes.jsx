


export const obtenerClientes = async() => {
    const req = await fetch(import.meta.env.VITE_API_URL);
    const res = await req.json();
    //console.log(res);
    return res;

}



export const añadirCliente = async(datos) => {
    try {
        const req = await fetch(import.meta.env.VITE_API_URL , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(datos),
        })  
    } catch (error) {
        console.log(error);
    }
}



