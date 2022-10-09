import about from "public/aboutbg.jpg";
import Image from "next/image";
import H4 from "@material-tailwind/react/Heading4";
import LeadText from "@material-tailwind/react/LeadText";
import Card from "@material-tailwind/react/Card";
import CardBody from "@material-tailwind/react/CardBody";

export default function About() {
  return (
    <section
      id="about"
      className="bg-login-background bg-cover w-full h-full bg-gray-200 text-center pt-24 pb-48"
    >
      <div className="flex flex-wrap items-center mx-4 mt-4">
        <div className="w-full md:w-5/12 mx-auto">
          <H4 color="white" className="eventAnimation">
            Sobre Nosotros
          </H4>
          <LeadText color="white">
            ¡Somos una Agencia creadora de contenidos digitales, ubicada en Cali
            y Cauca, Colombia!
          </LeadText>
          <LeadText color="white">
            ¡Creemos en ti y en tus ideas! Por eso queremos ayudarte a progresar
            y desarrollar tu empresa o proyecto de manera sorprendente con
            nuestros servicios digitales:
          </LeadText>
          <div className="text-yellow-800 font-semibold">Diseño de Páginas</div>
          <div className="text-yellow-800 font-semibold">
            Web Desarrollo de Apps Móviles{" "}
          </div>
          <div className="text-yellow-800 font-semibold">Branding y Diseño</div>
          <div className="text-yellow-800 font-semibold">
            Gráfico Marketing Digital y Manejo de Redes Sociales
          </div>
        </div>
        <div className="boxImagen w-full md:w-6/12  rounded-md  mx-auto flex justify-center mt-24 lg:mt-0">
          <Card className="bg-transparent">
            <CardBody>
              <LeadText color="white">
                Ofrecemos nuestros servicios a autónomos que dan sus primeros
                pasos online, a dueños de negocios crecientes, a grandes
                empresas y a socios que les estén ayudando a alcanzar sus metas.
                No importa si estás construyendo tu presencia online comprando
                un dominio, si estás creando tu página web, nuestro portafolio de productos te ofrece
                aplicaciones, servidores y servicios de primera. Nuestros
                productos están diseñados para aportarte confianza y seguridad. La política de privacidad
                sólida y una seguridad de datos integral. Nuestros clientes son
                lo primero. Por eso ahora además de tener a tu disposición
                equipos de asistencia locales para ayudarte en cualquier
                momento, ahora somos el primer proveedor a nivel mundial que te
                ofrece un asistente personal que brinda asesoramiento experto a
                medida de tus necesidades.
              </LeadText>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
}
