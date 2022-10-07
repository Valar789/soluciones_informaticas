import { useState } from "react";
import Navbar from "@material-tailwind/react/Navbar";
import NavbarContainer from "@material-tailwind/react/NavbarContainer";
import NavbarWrapper from "@material-tailwind/react/NavbarWrapper";
import NavbarToggler from "@material-tailwind/react/NavbarToggler";
import NavbarCollapse from "@material-tailwind/react/NavbarCollapse";
import Nav from "@material-tailwind/react/Nav";
import H5 from "@material-tailwind/react/Heading5";

import Link from "next/link";

export default function DefaultNavbar() {
  const [openNavbar, setOpenNavbar] = useState(false);

  return (
    <Navbar
      className="navbarAnimation  bg-trasnsparent"
      color="transparent "
      navbar

    >
      <NavbarContainer>
        <NavbarWrapper>
          <Link href="/">
            <a className="hover:text-teal-500" rel="noreferrer">
              <H5 color="white" >LocalHost:</H5>
            </a>
          </Link>
          <NavbarToggler
            onClick={() => setOpenNavbar(!openNavbar)}
            color="white"
          />
        </NavbarWrapper>

        <NavbarCollapse open={openNavbar}>
          <Nav className="">
            <div className="flex flex-col z-50 lg:flex-row lg:items-center">
              <Link href="#about">
                <a className="mx-2" rel="noreferrer">
                  <h6 className="text-white hover:text-teal-500">Sobre Nosotros</h6>
                </a>
              </Link>
              <Link href="#exito">
                <a className="mx-2" rel="noreferrer">
                  <h6 className="text-white hover:text-teal-500">Proyectos Exitosos</h6>
                </a>
              </Link>

              <Link href="#servicios">
                <a className="mx-2" rel="noreferrer">
                  <h6 className="text-white hover:text-teal-500">Servicios</h6>
                </a>
              </Link>
              <Link href="#contacto">
                <a className="mx-2" rel="noreferrer">
                  <h6 className="text-white hover:text-teal-500">Contacto</h6>
                </a>
              </Link>
            </div>
          </Nav>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
}
