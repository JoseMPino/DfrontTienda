import React,{useState} from "react";
import axios from "axios";
import '../styles/autenticacion.css'
import { TiUserAdd } from "react-icons/ti";
export default function Registro () {

    const[dataForm,setDataForm]= useState({
    nombres: '',
    apellidos: '',
    telefono: '',
    correo: '',
    password: ''
    })

const [mensaje, setMensaje] = useState("");
const [error, setError] = useState("");

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://dbacktienda.onrender.com/api/usuario', dataForm);

      setMensaje(response.data.message);
      setError('');
      setDataForm({
        nombres: '',
        apellidos: '',
        telefono: '',
        correo: '',
        password: ''
      });
    } catch (err:unknown) {
      if (axios.isAxiosError(err)) {
        setMensaje("");
        setError(err.response?.data?.message || "Error al crear el usuario");
      } else {
        setMensaje("");
        setError("Error desconocido");
      }
    }
  };


 return(
  <div className="form-container">
    <h1>Registro <TiUserAdd/></h1>
    <form onSubmit={handleSubmit} className="form">
        <label htmlFor="nombres" className="form-label">Nombres:</label>
        <input 
            type="text" 
            name="nombres" 
            placeholder="Ingrese sus nombres" 
            value={dataForm.nombres} 
            onChange={handleChange} 
            className="form-input"
        />
        
        <label htmlFor="apellidos" className="form-label">Apellidos:</label>
        <input 
            type="text" 
            name="apellidos" 
            placeholder="Ingrese sus apellidos" 
            value={dataForm.apellidos} 
            onChange={handleChange} 
            className="form-input"
        />
        
        <label htmlFor="telefono" className="form-label">Teléfono:</label>
        <input 
            type="text" 
            name="telefono" 
            placeholder="Ingrese su número de teléfono" 
            value={dataForm.telefono} 
            onChange={handleChange} 
            className="form-input"
        />
        
        <label htmlFor="correo" className="form-label">Correo:</label>
        <input 
            type="text" 
            name="correo" 
            placeholder="Ingrese su correo" 
            value={dataForm.correo} 
            onChange={handleChange} 
            className="form-input"
        />
        
        <label htmlFor="password" className="form-label">Contraseña:</label>
        <input 
            type="text" 
            name="password" 
            placeholder="Ingrese una contraseña" 
            value={dataForm.password} 
            onChange={handleChange} 
            className="form-input"
        />
        
        <button type="submit" className="form-button">Registrar</button>
    </form>

    {mensaje && <p style={{ color: 'white' }} className="form-message">{mensaje}</p>}
    {error && <p style={{ color: 'red' }} className="form-error">{error}</p>}
</div>
)
}