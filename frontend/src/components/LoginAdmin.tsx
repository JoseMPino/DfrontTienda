import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import '../styles/autenticacion.css'
import { FaUserGear } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";

export default function LoginAdmin(){
    const[dataForm,setDataForm]= useState({
        username: '',
        password: ''
        })
    const [mensaje, setMensaje] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDataForm({
        ...dataForm,
        [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
    
        try {
        const response = await axios.post('https://dbacktienda.onrender.com/api/admin/login', dataForm);
            // Guarda el token en el almacenamiento local
        localStorage.setItem('adminToken', response.data.token);
        navigate('/administracion');
    
        setMensaje(response.data.message);
        setError('');
        setDataForm({
            username: '',
            password: ''
        });
        } catch (err:unknown) {
        if (axios.isAxiosError(err)) {
            setMensaje("");
            setError(err.response?.data?.message || "Error al iniciar Sesion");
        } else {
            setMensaje("");
            setError("Error desconocido");
        }
        }
    };
    


    return(
        <div className="form-container">
            <h1>Login Admin <FaUserGear/></h1>
            <form onSubmit={handleSubmit} className="form">
                <label htmlFor="username" className="form-label"><FaUserGear/> UserName</label>
                <input type="text" className="form-input" placeholder="Ingrese su UserName" name="username" value={dataForm.username} onChange={handleChange}/>
                <label htmlFor="password" className="form-label">< RiLockPasswordFill/> Contraseña</label>
                <input type="text" className="form-input" placeholder="Ingrese su Contraseña" name="password" value={dataForm.password} onChange={handleChange}/>
                <button type="submit" className="form-button">Iniciar Sesion</button>
            </form>

            {mensaje && <p style={{ color: 'white' }} className="form-message">{mensaje}</p>}
            {error && <p style={{ color: 'red' }} className="form-error">{error}</p>}

        </div>
    )

}