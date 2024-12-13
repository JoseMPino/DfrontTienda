
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../styles/navbar.css'
import Home from '../Pages/Home';
import Administracion from '../Pages/Administracion';
import Autenticacion from '../Pages/Autenticacion';
import RutaProtegida from "./RutaProtegida";
import AcercaDe from "../Pages/AcercaDe";
import { FaUserAlt,FaHome } from "react-icons/fa";
import { BiSolidInfoCircle } from "react-icons/bi";


const links = [
    {
        name: "Home",
        href: "/",
        icono:<FaHome/>
       
    },
   
    {
        name: "About",
        href:"/acerca",
        icono:<BiSolidInfoCircle/>
    },
    {
        name: "Login",
        href:"/autenticacion",
        icono:<FaUserAlt/>
    }

]

export default function NavBar() {
    return (
        <Router>
            <nav className="navbar">
                <ul className="navbar-list">
                    {links.map((links) => (
                        <li className="navbar-item"><Link to={links.href} className="navbar-link">{links.icono} {links.name}</Link></li>
                    ))}
                </ul>
            </nav>

            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/acerca" element={<AcercaDe/>} />
                
                <Route path='/autenticacion' element={<Autenticacion />} />
                {/* Ruta protegida (requiere autenticación) */}
        <Route path="/administracion" element={<RutaProtegida component={Administracion} />} />
            </Routes>
        </Router>

    )


}
