import  { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../styles/portafolio.css';
import { FaSearch } from "react-icons/fa";
import { HiInformationCircle } from "react-icons/hi";
export default function Portafolio() {

  interface IMoto {
    nombre: string;
    marca: string;
    modelo: string;
    descripcion: string;
    año: string;
    cilindraje: string;
    precio: number;
    imagen: string;
  }

  interface IUsuario {
    nombres: string;
    apellidos: string;
    telefono: string;
    correo: string;
    password: string;
    creadoAct?: Date; // `creadoAct` es opcional ya que podría no estar presente al inicializar
  }

  const [motos, setMotos] = useState<IMoto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [dataUser, setDataUser] = useState<IUsuario>({
    nombres: "",
    apellidos: "",
    telefono: "",
    correo: "",
    password: "",
    creadoAct: undefined,
  });
  const [busqueda, setBusqueda] = useState<string>("");
  const navigate = useNavigate();

  const fetchUser = async () => {
    const email = localStorage.getItem('userEmail');
    try {
      const responseUser = await axios.get(`https://dbacktienda.onrender.com/api/usuario/${email}`);
      console.log(responseUser.data.message);
      setDataUser(responseUser.data);
    } catch (error) {
      console.error("Error al obtener la info User", error);
    }
  }

  const handleRecibirInfo = async (nombreMoto: string) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      const infoCliente = {
        correo: dataUser.correo,
        nombres: dataUser.nombres,
        apellidos: dataUser.apellidos,
        telefono: dataUser.telefono,
        moto: nombreMoto
      };
      console.log(infoCliente);
      const confirmacion = confirm(`¿Te gustaría que te llamemos para realizar una cotización de la moto: ${nombreMoto}?  `);
      if (confirmacion) {
        await axios.post('https://dbacktienda.onrender.com/api/cliente', infoCliente);
      }
    } else {
      navigate("/autenticacion");
    }
  };

  const handleBusqueda = async () => {
    setLoading(true);

    if (busqueda.trim() === "") {

      try {
        const response = await axios.get("https://dbacktienda.onrender.com/api/moto");
        setMotos(response.data);
      } catch (error) {
        console.error("Error al obtener todas las motos", error);
      } finally {
        setLoading(false);
      }
    } else {
      // Si hay texto en la búsqueda, filtramos por marca
      try {
        const response = await axios.get(`https://dbacktienda.onrender.com/api/moto/busca/${busqueda}`);
        setMotos(response.data);
      } catch (error) {
        console.error("Error al buscar motos por marca", error);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    const fetchMotos = async () => {
      try {
        const response = await axios.get("https://dbacktienda.onrender.com/api/moto");
        setMotos(response.data);
      } catch (error) {
        console.error("Error al obtener las motos", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMotos();
    fetchUser();
  }, []);

  if (loading) {
    return <div>Cargando motos...</div>;
  }

  return (
    <div className="portafolio-container">
      <div className="buscador">
        <input
          type="text"
          placeholder="Buscar por marca..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <button onClick={handleBusqueda} className="btn-buscar"><FaSearch/> Buscar</button>
      </div>

      <div className="motos-container">
        {motos.map((moto, index) => (
          <div className="moto-card" key={index}>
            <img src={moto.imagen} alt={moto.nombre} className="moto-image" />
            <div className="moto-info">
              <h3>{moto.nombre}</h3>
              <p><strong>Marca:</strong> {moto.marca}</p>
              <p><strong>Modelo:</strong> {moto.modelo}</p>
              <p><strong>Año:</strong> {moto.año}</p>
              <p><strong>Cilindraje:</strong> {moto.cilindraje}</p>
              <p><strong>Precio:</strong> ${moto.precio}</p>
              <p>{moto.descripcion}</p>
              <button onClick={() => handleRecibirInfo(moto.nombre)} className="btn-tajeta">mas informacion <HiInformationCircle/></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
