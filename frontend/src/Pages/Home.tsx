import Portafolio from "../components/Portafolio";
import Footer from "../components/Footer";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "../styles/home.css";
import { Bs1Circle,Bs2Circle,Bs3Circle,Bs4Circle,Bs5Circle } from "react-icons/bs";




// Importación de imágenes (asegúrate de tener estas imágenes en tu carpeta assets)
import moto1 from '../assets/moto1.jpg';
import moto2 from '../assets/moto2.jpg';
import moto3 from '../assets/moto3.jpg';
import moto4 from '../assets/moto4.jpg';

export default function PaginaInicio() {
    return (
        <div>
            <h1>Comercializadora los J</h1>
            <p>La moto de tus sueños esta aqui</p>
            
            {/* Añadir el Carrusel */}
            <div className="carousel-container">
                <Carousel 
                    showArrows={true} 
                    autoPlay={true} 
                    infiniteLoop={true} 
                    interval={3000} 
                    showThumbs={false}
                >
                    <div>
                        <img src={moto1} alt="Moto Deportiva" />
                        <p className="legend">Moto Deportiva</p>
                    </div>
                    <div>
                        <img src={moto2} alt="Moto Touring" />
                        <p className="legend">Moto Touring</p>
                    </div>
                    <div>
                        <img src={moto3} alt="Scooter" />
                        <p className="legend">Scooter</p>
                    </div>
                    <div>
                        <img src={moto4} alt="Motocross" />
                        <p className="legend">Motocross</p>
                    </div>
                </Carousel>
            </div>
           
            <Portafolio/>
            <div className="container-info">
                <div>
                    <h2>Tipos de Motos:</h2>
                    <ul>
                        <li><Bs1Circle/> Motos Deportivas</li>
                        <li><Bs2Circle/> Motos Touring</li>
                        <li><Bs3Circle/> Scooters</li>
                        <li><Bs4Circle/> Motocross</li>
                        <li><Bs5Circle/> Enduro</li>
                    </ul>
                </div>
                <div>
                    <h2>Algunas de las mas conocidas:</h2>
                    <ul>
                        <li><Bs1Circle/> Harley Davidson</li>
                        <li><Bs2Circle/> Kawasaki</li>
                        <li><Bs3Circle/> Yamaha</li>
                        <li><Bs4Circle/> Suzuki</li>
                        <li><Bs5Circle/> Honda</li>
                    </ul>
                </div>
                <div>
                    <h2>Beneficios:</h2>
                    <ul>
                        <li><Bs1Circle/> Menor impacto ambiental</li>
                        <li><Bs2Circle/> Conexion Con El Entorno</li>
                        <li><Bs3Circle/> Precio Economico</li>
                        <li><Bs4Circle/> Ahorro de Tiempo</li>
                        <li><Bs5Circle/> Movilidad Agil</li>
                    </ul>
                </div>
            </div>
            <Footer/>
        </div>
    )
}