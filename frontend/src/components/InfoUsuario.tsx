import React, { useEffect, useState } from "react";
import axios from "axios";
import '../styles/infoUsuario.css'

// Definición de la interfaz del usuario
interface Usuario {
  _id: string;
  nombres: string;
  apellidos: string;
  telefono: string;
  correo: string;
  password: string;
  creadoAct: string;
}

const InfoUsuario: React.FC = () => {
  // Hooks en el nivel superior
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Función para obtener los usuarios desde el backend
  const obtenerUsuarios = async () => {
    try {
      const response = await axios.get<Usuario[]>("https://dbacktienda.onrender.com/api/usuario");
      setUsuarios(response.data);
    } catch (error) {
      console.error("Error al obtener los usuarios", error);
    } finally {
      setLoading(false);
    }
  };

  // Llamada al backend al montar el componente
  useEffect(() => {
    obtenerUsuarios();
  }, []); // Solo una vez

  if (loading) {
    return <div>Cargando usuarios...</div>;
  }

  return (
    <div className="usuarios-container">
      {usuarios.map((usuario) => (
        <div key={usuario._id} className="usuario-card">
          <div className="usuario-info">
            <p><strong>Nombre:</strong> {usuario.nombres} {usuario.apellidos}</p>
            <p><strong>Correo:</strong> {usuario.correo}</p>
            <p><strong>Teléfono:</strong> {usuario.telefono}</p>
            <p><strong>Fecha de Creación:</strong> {new Date(usuario.creadoAct).toLocaleDateString()}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoUsuario;
