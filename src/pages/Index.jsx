

import React, { useState } from 'react'
import { Cliente } from '../components/Cliente';

const Index = () => {
    const [clients, setClients] = useState([
        {
            id: 1,
            nombre: 'Juan',
            telefono: 102013313,
            email: "juan@juan.com",
            empresa: 'Codigo Con Juan'
        },
        {
            id: 2,
            nombre: 'Karen',
            telefono: 138198313,
            email: "karen@juan.com",
            empresa: 'Codigo Con Juan'
        },
        {
            id: 3,
            nombre: 'Josue',
            telefono: 31983913,
            email: "josue@juan.com",
            empresa: 'Codigo Con Juan'
        },
        {
            id: 4,
            nombre: 'Miguel',
            telefono: 319381983,
            email: "miguel@juan.com",
            empresa: 'Codigo Con Juan'
        },
        {
            id: 5,
            nombre: 'Pedro',
            telefono: 1398198938,
            email: "pedro@juan.com",
            empresa: 'Codigo Con Juan'
        },
    ]);



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
