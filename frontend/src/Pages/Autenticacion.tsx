import {useState} from "react";
import Registro from "../components/Registro";
import LoginAdmin from "../components/LoginAdmin";
import Login from "../components/Login";
import { useNavigate } from 'react-router-dom';
import '../styles/autenticacion.css'
import Footer from "../components/Footer";
import { IoIosLogOut } from "react-icons/io";

export default function PaginaAutenticacion() {
    const [activeComponent, setActiveComponent] = useState("login"); // Estado para controlar el componente activo
    const navigate = useNavigate();

    const handleCerrarSesion = (): void => {
        // Eliminar el token de localStorage
        localStorage.removeItem('authToken');
        localStorage.removeItem('adminToken');

        // Redirigir al usuario a la página de inicio de sesión
        navigate('/autenticacion');

        console.log('Sesión cerrada, token eliminado.');
    };

    return (
        <div>
        
        <button onClick={handleCerrarSesion}className="cerrar-sesion-btn">Cerrar Sesión <IoIosLogOut/></button>
        <div>
            {activeComponent === "login" && <Login />}
            {activeComponent === "registro" && <Registro />}
            {activeComponent === "admin" && <LoginAdmin />}
        </div>
       

        <div className="btnLinkContainer ">
            {activeComponent !== "login" && (
                <button onClick={() => setActiveComponent("login")} className="btnLink">
                    Iniciar Sesión
                </button>
            )}
            {activeComponent !== "registro" && (
                <button onClick={() => setActiveComponent("registro")} className="btnLink">
                    No tienes cuenta? Regístrate
                </button>
                
            )}
            {activeComponent !== "admin" && (
                <button onClick={() => setActiveComponent("admin")} className="btnLink">
                    ¿Eres Administrador?
                </button>
            )}
           
        </div>

        <Footer/>
    </div>
);
}
