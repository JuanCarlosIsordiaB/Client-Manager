

import React, { useEffect, useState } from 'react'
import { Cliente } from '../components/Cliente';
import { obtenerClientes } from '../api/clientes';

const Index = () => {
    const [clients, setClients] = useState([])
    

    useEffect(() => {
        const fetchClients = async () => {
          try {

            const data = await obtenerClientes();
            setClients(data);

          } catch (error) {
            console.error('Error fetching clients:', error);
            
          }
        };
    
        fetchClients();
      }, []);
    


  return (
    <div>
        <h1 className='font-black text-4xl text-blue-900'>Clients:</h1>
        <p className='mt-3'>Start tracking your clients</p>
        {
            clients.length ? (
                <table className='w-full bg-white shadow mt-5 table-auto '>
                    <thead className='bg-blue-800 text-white'>
                        <tr>
                            <th className='p-2'>Cliente</th>
                            <th className='p-2'>Contact</th>
                            <th className='p-2'>Actions</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {
                            clients.map( (client,index) => 
                                <Cliente client={client} key={index} />
                            )
                        }
                    </tbody>
                </table>
            ) : (
                <p className='text-center mt-10'>There is no clients.</p>
            )
        }
    </div>
  )
}

export default Index;
