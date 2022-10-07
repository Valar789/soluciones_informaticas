import H2 from '@material-tailwind/react/Heading2';
import LeadText from '@material-tailwind/react/LeadText';
import { useRef } from 'react';

export default function Header() {
const header = useRef()


    return (
        <div ref={header} id='header' className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen">
            <div className="bg-landing-background bg-cover bg-center absolute top-0 w-full h-full" />
            <div className="container max-w-8xl relative mx-auto">
                <div className="items-center flex flex-wrap">
                    <div className="titleAnimation w-full lg:w-8/12 px-4 ml-auto mr-auto text-center">
                        <H2 color="white">Sitios Web Increíbles Para Tu Proyecto</H2>
                        <div className="subTitleAnimation text-gray-200 ">
                            <LeadText color="gray-200">
                            Modernos y llamativos para exhibir tus productos y servicios en internet o impulsar tu idea
                            </LeadText>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
