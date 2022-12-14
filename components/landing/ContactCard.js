
import H6 from '@material-tailwind/react/Heading6';
import Paragraph from '@material-tailwind/react/Paragraph';
import Image from 'next/image';


export default function ContactCard({ img, title, children }) {
    return (
        <div className="w-full lg:w-3/12 px-4 text-center">
            <div className="text-blue-gray-800 p-3 mx-4 rounded-lg bg-white inline-flex items-center justify-center mb-6">
                <Image className='rounded-md' src={img} alt='logo' raised='true' />
            </div>
            <H6 color="gray">{title}</H6>
            <Paragraph color="blueGray">{children}</Paragraph>
        </div>
    );
}
