import React,{useState} from "react";
import axios from "axios";
import '../styles/autenticacion.css'
import { FaUserAlt } from "react-icons/fa";
import { IoIosLogIn } from "react-icons/io";
import { CgMail } from "react-icons/cg";
import { RiLockPasswordFill } from "react-icons/ri";
export default function Login(){
    const[dataForm,setDataForm]= useState({
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
        const response = await axios.post('https://dbacktienda.onrender.com/api/usuario/login', dataForm);
            // Guarda el token en el almacenamiento local
        localStorage.setItem('authToken', response.data.token);
        localStorage.setItem('userEmail', dataForm.correo);
    
        setMensaje(response.data.message);
        setError('');
        setDataForm({
            correo: '',
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
            <h1>Login <FaUserAlt/></h1>
            <form onSubmit={handleSubmit} className="form" >
                <label htmlFor="correo" className="form-label"><CgMail/> Correo</label>
                <input type="text" className="form-input" placeholder="Ingrese su Correo" name="correo" value={dataForm.correo} onChange={handleChange}/>
                <label htmlFor="password" className="form-label"><RiLockPasswordFill/> Contraseña</label>
                <input type="text" className="form-input" placeholder="Ingrese su Contraseña" name="password" value={dataForm.password} onChange={handleChange}/>
                <button type="submit" className="form-button">Iniciar Sesion <IoIosLogIn/></button>
            </form>

            {mensaje && <p style={{ color: 'white' }} className="form-message">{mensaje}</p>}
            {error && <p style={{ color: 'red' } }  className="form-error">{error}</p>}

        </div>
    )

}