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
import equipo from "public/equipo.png";
import movil from "public/movil.png";
import diseño from "public/diseño.png";


export default function WorkingSection() {


  return (
    <section className="pb-20 bg-gray-200 -mt-32">
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

        <div className="flex flex-wrap items-center mt-32">
          <div className="w-full md:w-5/12 px-4 mx-auto">
            <div className="text-blue-gray-800 text-center inline-flex items-center justify-center w-24 h-24 mb-6 rounded-full ">
              <Image
                className="iconAnimation"
                src={equipo}
                alt="asesoria"
                raised="true"
              />
            </div>
            <H4 color="teal" className="eventAnimation">
              Equipo de desarrolladores al instante
            </H4>
            <LeadText color="blueGray">
              Obtén acceso instantáneo a un equipo de diseñadores visuales y
              desarrolladores web con las habilidades para crear cualquier cosa
              que tu sitio web necesite.
            </LeadText>
            <LeadText color="blueGray">
              Configuramos tu sitio web con nuestra mejor plataforma y servicios
              para darle a tu negocio una base sólida.
            </LeadText>
          </div>

          <div

            className="boxImagen w-full md:w-4/12  rounded-md px-4 mx-auto flex justify-center mt-24 lg:mt-0"
          >
            <Card className="bg-white">
              <Image
                className="efectZoom rounded-md "
                alt="Card Image"
                src={Teamwork}
                raised="true"
              />
              <CardBody>
                <H5 color="teal">Tu aprobación</H5>
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
