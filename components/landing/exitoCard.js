import H6 from "@material-tailwind/react/Heading6";
import Paragraph from "@material-tailwind/react/Paragraph";
import Button from "@material-tailwind/react/Button";
 
import Image from "next/image";
 

export default function LandingTeamCard({ img, name, position, url }) {
  return (
    <div className=" boxImagen  w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 p-4 shadow-lg">
      <div className=" ">
        <Image
          className="efectZoom rounded-md"
          src={img}
          alt={name}
          raised="true"
        />
        <div className="pt-6 text-center">
          <H6 color="gray">{name}</H6>
          <Paragraph color="blueGray">{position}</Paragraph>
          <div className="flex items-center justify-center">
            <Button className="btn-teal-500" src={url} >Visitar</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
