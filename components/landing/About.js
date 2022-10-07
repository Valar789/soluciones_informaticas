import about from "public/about.jpg";
import Image from "next/image";
import H4 from "@material-tailwind/react/Heading4";

import LeadText from "@material-tailwind/react/LeadText";
import Paragraph from "@material-tailwind/react/Paragraph";
import Card from "@material-tailwind/react/Card";
import CardBody from "@material-tailwind/react/CardBody";

export default function About() {
  return (
    <section id="about" className="bg-gray-200 pt-24 pb-48">
      
      <div className="flex flex-wrap items-center mt-4">
        <div className="boxImagen w-full md:w-4/12  rounded-md px-4 mx-auto flex justify-center mt-24 lg:mt-0">
          <Card className="bg-white">
            <Image
              className="efectZoom rounded-md "
              alt="Card Image"
              src={about}
              raised="true"
            />
            <CardBody>
              <Paragraph color="blueGray">
                Nuestros diseñadores profesionales crean un prototipo
                personalizado de tu nuevo sitio web para que puedas
                retroalimentar fácilmente. Una vez aprobado, lo codificamos en
                un sitio de mas alto rendimiento.
              </Paragraph>
            </CardBody>
          </Card>
        </div>

        <div className="w-full md:w-5/12 px-4 mx-auto">
          <H4 color="Gray" className="eventAnimation">
           Sobre Nosotros
          </H4>
          <LeadText color="blueGray">
            ¡Somos una Agencia creadora de contenidos digitales, ubicada en Cali y Cauca, Colombia!
          </LeadText>
          <LeadText color="blueGray">
            ¡Creemos en ti y en tus ideas! Por eso queremos ayudarte a progresar
            y desarrollar tu empresa o proyecto de manera sorprendente con
            nuestros servicios digitales de publicidad en:
          </LeadText>
          <div className="text-teal-500 ">Diseño de Páginas</div>
          <div className="text-teal-500 ">Web Desarrollo de Apps Móviles </div>
          <div className="text-teal-500 ">Branding y Diseño</div>
          <div className="text-teal-500 ">
            Gráfico Marketing Digital y Manejo de Redes Sociales
          </div>
        </div>
      </div>
    </section>
  );
}
