
import LeadText from '@material-tailwind/react/LeadText';
import { useRef } from 'react';

export default function Header() {
const header = useRef()


    return (
        <div ref={header} id='header' className="relative pt-16 pb-32 0 flex content-center items-center justify-center h-screen">
            <div className="bg-landing-background bg-cover  absolute top-0 w-full h-full" />
            <div className="container max-w-8xl  relative mx-auto">
                <div className="items-center flex flex-wrap">
                    <div className="titleAnimation  w-full lg:w-8/12  ml-auto mr-auto text-center">
                        <h1 className='titleHeader font-bold text-white text-6xl'>Sitios Web Increíbles</h1>
                        <div className="subTitleAnimation text-gray-200 ">
                            <LeadText color="gray-200">
                            Modernos y llamativos para exhibir tu negocio.
                            </LeadText>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
