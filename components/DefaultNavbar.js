import { useRef } from "react";

import Link from "next/link";

export default function DefaultNavbar() {
  const topnav = useRef();
  const navBar = useRef();
  const toggleMenu = () => {
    topnav.current.classList.toggle("responsive");
    navBar.current.classList.toggle("bgnavBar");
  };
  return (
    <div ref={navBar} className="navBar flex justify-between" >
      <div className="text-white font-semibold mx-4 mt-3 text-3xl float-left flex">
        <h1 className="text-teal-500">Local</h1>Host
      </div>

      <nav ref={topnav} className="topnav ">
      <Link href="#about">
        <a onClick={toggleMenu} className="" rel="noreferrer">
          <h6 className="">Sobre Nosotros</h6>
        </a>
      </Link>
      <Link href="#exito">
        <a onClick={toggleMenu} className="" rel="noreferrer">
          <h6 className="">Proyectos Exitosos</h6>
        </a>
      </Link>

      <Link href="#servicios">
        <a onClick={toggleMenu} className="" rel="noreferrer">
          <h6 className="">Servicios</h6>
        </a>
      </Link>
      <Link href="#contacto">
        <a onClick={toggleMenu} className="" rel="noreferrer">
          <h6 className="">Contacto</h6>
        </a>
      </Link>

      
      </nav>
      <a onClick={toggleMenu} className="iconMenu text-white right-4">
        <i className="fa fa-bars"></i>
      </a>
    </div>
  );
}
