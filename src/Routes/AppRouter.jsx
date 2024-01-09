import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { NuevoCliente } from '../pages/NuevoCliente';
import { Layout } from '../components/Layout';
import  Index from '../pages/Index';
import { EditarCliente } from '../pages/EditarCliente';


export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Index />}  />
        <Route path='clientes/nuevo' element={<NuevoCliente />} />
        
        

      </Route>
    </Routes>
  );
};
