import { useEffect, useRef } from "react";

import Link from "next/link";

export default function DefaultNavbar() {
  const topnav = useRef();
  const navBar = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header");
      const { y } = header.getBoundingClientRect();
      console.log(y);

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
      className="navBar fixed top-0 left-0 right-0 navbarAnimation flex justify-between"
    >
      <Link href="/">
        <a className="titleLogo font-bold text-gray-200 mx-4 mt-2 text-3xl float-left flex">
          LocalHost
        </a>
      </Link>

      <nav ref={topnav} className="topnav">
    
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
  
        <Link href="#about">
          <a onClick={toggleMenu} className="" rel="noreferrer">
            <h6 className="">Sobre Nosotros</h6>
          </a>
        </Link>
        <Link href="#contacto">
          <a onClick={toggleMenu} className="" rel="noreferrer">
            <h6 className="">Contacto</h6>
          </a>
        </Link>
      </nav>
      <a onClick={toggleMenu} className="iconMenu text-white">
        <i className="fa fa-bars"></i>
      </a>
    </div>
  );
}
