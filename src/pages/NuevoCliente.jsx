import { useNavigate } from "react-router-dom";
import Formulario from "../components/Form";
import { useState } from "react";
import { añadirCliente, obtenerClientes } from "../api/clientes";


export const NuevoCliente = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    notas: '',
  });
  const [error, setError] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formValues = Object.values(formData);

    if (formValues.some((value) => value === "")) {
      setError(true);
      return;
    }

    setError(false);

    // Add new client
    await añadirCliente(formData);

    // Fetch updated list of clients
    await obtenerClientes();

    // Navigate back to the home page
    navigate("/");
  };

  const handleChange = (event) => {

    setError(false);
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

 

  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>New Client:</h1>
      <p className='mt-3'>Start registering a new client</p>

      <div className='flex justify-end'>
        <button
          className='bg-blue-800 text-white px-3 py-1 font-bold uppercase'
          onClick={() => navigate('/')}
        >
          Go Back
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10">
        {
          error && (
            
            <p className="text-center bg-red-400 rounded-md py-2 text-white font-semibold my-3"> <span className="font-bold">ERROR</span> - All fields are required</p>
            
          )
        }
        <form 
          onSubmit={handleFormSubmit}
        >

          <Formulario 

            onChange={handleChange} 
          />

          <input 
            type="submit"
            className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg rounded-sm cursor-pointer hover:bg-blue-900 transition-all"
            value='Register Client'
          />
        </form>
      </div>
    </>
  );
};
