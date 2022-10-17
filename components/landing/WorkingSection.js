import Card from "@material-tailwind/react/Card";
import CardBody from "@material-tailwind/react/CardBody";
import H4 from "@material-tailwind/react/Heading4";
import H5 from "@material-tailwind/react/Heading5";
import LeadText from "@material-tailwind/react/LeadText";
import Paragraph from "@material-tailwind/react/Paragraph";
import StatusCard from "components/landing/StatusCard";
import Teamwork from "public/teamwork.jpeg";
import Image from "next/image";
import asesoria from "public/asesoria.png";
import equipo from "public/equipo.jpg";
import movil from "public/movil.png";
import diseño from "public/diseño.png";

export default function WorkingSection() {
  return (
    <section id="worksection" className="pb-20 bg-gray-200 -mt-32">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap relative z-10">
          <StatusCard img={asesoria} title="Asesoria">
            Te asesoramos en la estructuración, funciones, contenidos e
            información de tu página web para crear el mejor desarrollo y
            utilidad de tu página web.
          </StatusCard>
          <StatusCard color="white" img={movil} title="Páginas Web PWA">
            Hacemos tu página web descargable como App para móviles y escritorio
            para que sorprendas a tu clientela y des una experiencia tecnológica
            única.
          </StatusCard>
          <StatusCard color="white" img={diseño} title="Diseño Web a la medida">
            Tu página web merece un diseño propio, con optimización y
            personalización que la diferencien y le den un toque único.
          </StatusCard>
        </div>

        <div className="flex flex-wrap items-center text-center mt-32">
          <div className="w-full md:w-4/12  mx-auto ">
            
            <H4 color="black" className="eventAnimation">
              Equipo de desarrolladores</H4>
            <LeadText color="blueGray " className='text-center'>
              Obtén acceso instantáneo a un equipo de diseñadores visuales y
              desarrolladores web con las habilidades para crear lo que tu sitio web necesite.
            </LeadText>

            <div className="boxImagen text-gray-800 text-center inline-flex items-center justify-center">
              <Image
                className="efectZoom rounded-md "
                src={equipo}  
                alt="asesoria"
                raised="true"
              />
            </div>
          </div>

          <div className="boxImagen w-full md:w-5/12  rounded-md px-4 mx-auto flex justify-center mt-24 lg:mt-0">
            <Card className="bg-white">
              <Image
                className="efectZoom rounded-md "
                height={450}
                width={650}
                alt="Card Image"
                src={Teamwork}
                raised="true"
              />
              <CardBody>
                <H5 color="black">Tu aprobación</H5>
                <Paragraph color="blueGray">
                  Nuestros diseñadores profesionales crean un prototipo
                  personalizado de tu nuevo sitio web para que puedas
                  retroalimentar fácilmente. Una vez aprobado, lo codificamos en
                  un sitio de mas alto rendimiento.
                </Paragraph>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
