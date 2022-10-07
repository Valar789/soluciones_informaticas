import Title from 'components/landing/Title';
import ContactCard from 'components/landing/ContactCard';

import m1 from 'public/m1.jpg'
import m2 from 'public/m2.png'
import m3 from 'public/m3.jpg'


export default function ContactSection() {
    return (
        <section id='servicios' className="pb-20 relative block bg-white">
            <div className="container max-w-7xl mx-auto px-4 lg:pt-20">
                <Title  heading="¡Nuestros Servicios!
">
                Crece de manera más rápida y eficiente con todos nuestros servicios reunidos en paquetes asombrosos y económicos.
                </Title>

                <div className="flex flex-wrap mt-8 justify-center">
                    <ContactCard img={m1} title="Diseño Web">
                    -Creación de Página Web
                    -Dominio y hosting gratis
                    -Correos corporativos
                    -Diseño para Móviles
                    </ContactCard>
                    <ContactCard img={m2} title="Mantenimiento Web">
                    Cambios y actualizaciones
                    Informe de estadísticas
                    Soporte técnico y asistencia
                    Sistemas de seguridad web
                    </ContactCard>

                    <ContactCard img={m3} title="Redes Sociales">
                    Diseño de Publicaciones
                    Nuevos Seguidores mensuales
                    Informes de Estadísticas
                    Estrategia de Contenidos
                    </ContactCard>
                </div>

               
            </div>
        </section>
    );
}
