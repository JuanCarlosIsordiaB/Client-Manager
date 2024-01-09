import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

export const Layout = () => {
  const location = useLocation();

  

  return (
    <div className='md:flex md:min-h-screen'>
      <aside className='md:w-1/4 bg-blue-900 px-5 py-10'>
        <h2 className='font-black text-white text-4xl text-center'>CRM - Clients</h2>
        <nav className='mt-10 '>
          <Link className={`${location.pathname === '/' ? 'bg-blue-300' : 'bg-blue-900'} text-xl block p-2 mt-2 rounded-md transition-all hover:bg-blue-300 text-white`  } to='/'>Clients</Link>
          <Link className={`${location.pathname === '/clientes/nuevo' ? 'bg-blue-300' : 'bg-blue-900'} text-xl block p-2 mt-2 rounded-md transition-all hover:bg-blue-300 text-white`  } to='/clientes/nuevo'>New Client</Link>
        </nav>
      </aside>
      <main className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
        <Outlet />
      </main>
    </div>
  )
}
