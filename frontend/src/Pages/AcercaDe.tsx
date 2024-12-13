
import "../styles/acercaDe.css";
import Footer from "../components/Footer";

export default function AcercaDe() {
    return (
        <>
        <div className="acerca-container">
            <h1 className="acerca-title">Acerca de Nosotros</h1>
            <p className="acerca-description">
            Bienvenido a nuestra comercializadora. Estamos dedicados a ofrecerte una experiencia única y personalizada, inspirada en la pasión por las motocicletas, la innovación y el compromiso de brindarte lo mejor en movilidad y estilo.
            </p>
            <section className="acerca-section">
                <h2>Misión</h2>
                <p>
                Ofrecer a nuestros clientes las mejores motocicletas y accesorios del mercado, garantizando calidad, innovación y un servicio personalizado que satisfaga sus necesidades de movilidad y estilo de vida. Buscamos ser un aliado confiable en cada etapa del camino, promoviendo la pasión por las motos y la libertad sobre ruedas.
                </p>
            </section>
            <section className="acerca-section">
                <h2>Visión</h2>
                <p>
                Ser reconocidos como la comercializadora de motos líder en la región, destacándonos por nuestra excelencia en servicio al cliente, un catálogo diverso de marcas y modelos de alta calidad, y nuestro compromiso con la sostenibilidad y la innovación en el sector de transporte personal.
                </p>
            </section>
            <section className="acerca-section">
    <h2>Valores Corporativos</h2>
    <ul>
        <li><strong>Pasión:</strong> Vivimos y compartimos el amor por las motocicletas.</li>
        <li><strong>Compromiso:</strong> Nos dedicamos a superar las expectativas de nuestros clientes en cada interacción.</li>
        <li><strong>Innovación:</strong> Nos mantenemos a la vanguardia, ofreciendo productos y servicios modernos.</li>
        <li><strong>Integridad:</strong> Actuamos con transparencia, honestidad y ética en todas nuestras operaciones.</li>
        <li><strong>Calidad:</strong> Garantizamos que cada producto cumple con los más altos estándares del mercado.</li>
        <li><strong>Sostenibilidad:</strong> Promovemos prácticas responsables y el uso de vehículos más ecológicos.</li>
    </ul>
</section>

<section className="acerca-section">
    <h2>¿Por qué confiar en nosotros?</h2>
    <ul>
        <li><strong>Experiencia comprobada:</strong> Más de 20 años en el mercado ofreciendo motocicletas de las mejores marcas.</li>
        <li><strong>Variedad de opciones:</strong> Un catálogo extenso que incluye modelos para principiantes, expertos y todo tipo de usos, desde ciudad hasta aventuras todoterreno.</li>
        <li><strong>Soporte y garantía:</strong> Acompañamos a nuestros clientes con servicios de mantenimiento, garantías extendidas y asesoramiento experto.</li>
        <li><strong>Atención personalizada:</strong> Nuestro equipo está comprometido en entender tus necesidades y ayudarte a elegir la moto perfecta.</li>
        <li><strong>Precios competitivos:</strong> Ofrecemos opciones accesibles y planes de financiamiento para que puedas hacer realidad tu sueño de tener una moto.</li>
    </ul>
</section>

        </div>
        <Footer/>
        </>
    );
}

