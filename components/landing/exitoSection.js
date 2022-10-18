import Title from "components/landing/Title";
import TeamCard from "components/landing/exitoCard";
import mirandapc from "public/mirandapc.png";
import kotavista from "public/kotavista.jpg";
import Image2 from "public/team-2-800x800.jpg";
import Image3 from "public/team-3-800x800.jpg";
import Image4 from "public/team-4-470x470.png";
import Link from "next/link";

export default function TeamSection() {
  return (
    <section id="exito" className="pt-20 pb-48">
      <div className="container max-w-7xl mx-auto px-4">
        <Title heading="Proyectos Exitosos">
          Conoce algunos de los proyectos de nuestro clientes mas destacados
        </Title>
        <div className="flex flex-wrap">
          <TeamCard
            img={kotavista}
            name="Kota Arquitectura"
            position="Arquitecto"
            url="https://kota-4n0d467oz-valar789.vercel.app/"
          />

          <TeamCard
            img={mirandapc}
            name="MirandaPC"
            position="Mantenimiento computadores"
            url="https://mirandapc.vercel.app"
          />
          <TeamCard
            img={kotavista}
            name="Kota Arquitectura"
            position="Arquitecto"
            url="https://kota-4n0d467oz-valar789.vercel.app/"
          />

          <TeamCard
            img={mirandapc}
            name="MirandaPC"
            position="Mantenimiento computadores"
            url="https://mirandapc.vercel.app"
          />
        </div>
      </div>
    </section>
  );
}
