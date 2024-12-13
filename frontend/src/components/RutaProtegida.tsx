import React from 'react';
import { Navigate } from 'react-router-dom';

interface RutaProtegidaProps {
  component: React.ComponentType;
}

const RutaProtegida: React.FC<RutaProtegidaProps> = ({ component: Component }) => {
  const token = localStorage.getItem('adminToken');

  return token ? <Component /> : <Navigate to="/autenticacion" />;
};

export default RutaProtegida;