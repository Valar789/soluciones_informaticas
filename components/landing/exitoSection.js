import Title from 'components/landing/Title';
import TeamCard from 'components/landing/exitoCard';
import Image1 from 'public/team-1-800x800.jpg';
import Image2 from 'public/team-2-800x800.jpg';
import Image3 from 'public/team-3-800x800.jpg';
import Image4 from 'public/team-4-470x470.png';

export default function TeamSection() {
    return (
        <section id='exito' className="pt-20 pb-48">
            <div className="container max-w-7xl mx-auto px-4">
                <Title heading="Proyectos Exitosos">
                    Conoce algunos de los proyectos de nuestro clientes mas destacados
                </Title>
                <div className="flex flex-wrap">
                    <TeamCard
                        img={Image1}
                        name="Ryan Tompson"
                        position="Web Developer"
                    />
                    <TeamCard
                        img={Image2}
                        name="Romina Hadid"
                        position="Marketing Specialist"
                    />
                    <TeamCard
                        img={Image3}
                        name="Alexa Smith"
                        position="UI/UX Designer"
                    />
                    <TeamCard
                        img={Image4}
                        name="Jenna Kardi"
                        position="Founder and CEO"
                    />
                </div>
            </div>
        </section>
    );
}
