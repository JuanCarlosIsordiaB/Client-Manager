

import React from 'react'
import { Form, useNavigate, redirect } from 'react-router-dom';
import { eliminarCliente } from '../api/clientes';

export const Cliente = ({client}) => {

  const navigate = useNavigate();

  const {nombre, empresa, email, telefono, id} = client;

  

  return (
    <tr className='border-b'>
      <td className='p-6 space-y-2'>
        <p className='text-2xl text-gray-800'>{nombre}</p>
        <p>{empresa}</p>
      </td>
      <td className='p-6'>
        <p className='text-gray-600'><span className='text-gray-800 uppercase font-bold'>Email: </span>{email}</p>
        <p className='text-gray-600'><span className='text-gray-800 uppercase font-bold'>Tel: </span>{telefono}</p>
      </td>
      <td className='p-6 md:flex gap-2'>
        
        
          <button
            type='submit'
            className='text-red-600 hover:text-red-700 uppercase font-bold text-xs'
            
          >
            Delete
          </button>
       
        

      </td>
    </tr>
  )
}
