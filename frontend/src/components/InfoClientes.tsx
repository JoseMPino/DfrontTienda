import { useEffect, useState } from 'react';
import axios from 'axios';
import { MdDelete } from "react-icons/md";
import '../styles/infoClientes.css'

interface ICliente {
  _id: string;
  correo: string;
  nombres: string;
  apellidos: string;
  telefono: string;
  moto: string;
}

const InfoClientes = () => {
  const [clientes, setClientes] = useState<ICliente[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

 
  const obtenerClientes = async () => {
    try {
      const response = await axios.get('https://dbacktienda.onrender.com/api/cliente');
      setClientes(response.data.data); 
    } catch (error) {
      console.error('Error al obtener los clientes', error);
    } finally {
      setLoading(false);
    }
  };

 
  const eliminarCliente = async (id: string) => {
    try {
        console.log(id)
      const response = await axios.delete(`https://dbacktienda.onrender.com/api/cliente/${id}`);
      alert(response.data.message); 
      setClientes(clientes.filter(cliente => cliente._id !== id)); 
    } catch (error) {
      console.error('Error al eliminar el cliente', error);
    }
  };

  useEffect(() => {
    obtenerClientes();
  }, []);

  if (loading) {
    return <div>Cargando clientes...</div>;
  }

  return (
    <div className="clientes-container">
      {clientes.map(cliente => (
        <div key={cliente._id} className="cliente-card">
          <div className="cliente-info">
            <p><strong>Nombre:</strong> {cliente.nombres} {cliente.apellidos}</p>
            <p><strong>Correo:</strong> {cliente.correo}</p>
            <p><strong>Teléfono:</strong> {cliente.telefono}</p>
            <p><strong>Moto:</strong> {cliente.moto}</p>
          </div>
          <button onClick={() => eliminarCliente(cliente._id)} className="btn-eliminar"><MdDelete/> Eliminar</button>
        </div>
      ))}
    </div>
  );
};

export default InfoClientes;
