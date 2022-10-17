import { useEffect, useRef } from "react";

import Link from "next/link";

export default function DefaultNavbar() {
  const topnav = useRef();
  const navBar = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header");
      const { y } = header.getBoundingClientRect();
      y !== 0
        ? navBar.current.classList.add("bgNavbar")
        : navBar.current.classList.remove("bgNavbar");
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    topnav.current.classList.toggle("responsive");
    navBar.current.classList.toggle("bgnavBar");
  };

  return (
    <div
      ref={navBar}
      className="navBar py-2 fixed top-0 left-0 right-0 navbarAnimation flex justify-between"
    >
      <Link href="/">
        <a className="titleLogo font-medium text-gray-200 mx-4 mt-2 text-2xl float-left flex">
          <div className="text-cyan-600 font-extrabold">L</div> ocalHost
        </a>
      </Link>

      <nav ref={topnav} className="topnav ">
    
        <Link href="#exito">
          <a onClick={toggleMenu} className="hover:text-cyan-500" rel="noreferrer">
            <div className=" text-sm">Proyectos Exitosos</div>
          </a>
        </Link>

        <Link href="#servicios">
          <a onClick={toggleMenu} className="hover:text-cyan-500" rel="noreferrer">
            <div className="text-sm ">Servicios</div>
          </a>
        </Link>
  
        <Link href="#about">
          <a onClick={toggleMenu} className="hover:text-cyan-500" rel="noreferrer">
            <div className=" text-sm">Sobre Nosotros</div>
          </a>
        </Link>
        <Link href="#contacto">
          <a onClick={toggleMenu} className="hover:text-cyan-500" rel="noreferrer">
            <div className=" text-sm">Contacto</div>
          </a>
        </Link>
      </nav>
      <a onClick={toggleMenu} className="iconMenu text-white">
        <i className="fa fa-bars"></i>
      </a>
    </div>
  );
}
