import Button from "@material-tailwind/react/Button";
import H4 from "@material-tailwind/react/Heading4";
import LeadText from "@material-tailwind/react/LeadText";
import { useEffect, useState } from "react";

export default function Form() {
  const [mensaje, setMensaje] = useState({
    name: "",
    email: "",
    mensaje: "",
  });

  console.log(mensaje);

  const captureValues = (e) => {
    setMensaje({
      ...mensaje,
      [e.target.name]: e.target.value,
    });
  };

  const sendMessage = async(e) =>{
    e.preventDefault()
    const rawResponse = await fetch('https://formspree.io/f/moqbebvn', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(mensaje)
  });
  const content = await rawResponse.json();
  content.ok && alert('Mesnsaje enviado')

  console.log(content);
  }

  return (
    <section id="contacto" className="bg-gray-200 pt-20 pb-48">
      <div className="flex flex-wrap items-center mt-4">
        <div className="w-full md:w-5/12 px-4 mx-auto">
          <H4 color="teal" className="eventAnimation">
            ¡Coméntanos tus ideas, nosotros las hacemos realidad!
          </H4>
          <LeadText color="blueGray">
            ¡Creemos en ti y en tus ideas! Por eso queremos ayudarte a progresar
            y desarrollar tu empresa o proyecto de manera sorprendente con
            nuestros servicios digitales.
          </LeadText>
          <LeadText color="blueGray">
            Contáctanos ahora para que podamos asesorarte y darte el mejor
            servicio con un Precio Especial en este momento.
          </LeadText>
        </div>
        <div className="boxImagen w-full md:w-4/12  rounded-md px-4 mx-auto flex justify-center mt-24 lg:mt-0">
          <form
            id="formContact"
            onChange={captureValues}
            className="bg-login-background bg-cover bg-center p-4 rounded-xl"
          >
            <br />
            <div className="flex flex-col gap-4 mb-4">
              <div>
                <label className="block py-2 text-sm font-medium text-white dark:text-white">
                  Nombres:
                </label>
                <input
                  type="text"
                  name="name"
                  id="inputName"
                  className="bg-transaparent outline-none  text-gray-800 text-sm rounded-lg  block w-full p-2.5"
                  placeholder="Nombre completo"
                  required
                />
              </div>
              <div>
                <label className="block py-2 text-sm font-medium text-white dark:text-white">
                  Email:
                </label>
                <input
                  type="text"
                  name="email"
                  id="inputEmail"
                  className="bg-transaparent outline-none text-gray-800 text-sm rounded-lg  block w-full p-2.5"
                  placeholder="•••••••••"
                  required
                />
              </div>
              <div>
                <label className="block py-2 text-sm font-medium text-white dark:text-white">
                  Mensaje:
                </label>
                <textarea
                  name="mensaje"
                  rows="4"
                  cols="50"
                  className="bg-transaparent outline-none  text-gray-800 text-sm rounded-lg  block w-full p-2.5"
                />
              </div>
            </div>

            <div className="flex p-2 justify-center">
              <Button onClick={sendMessage} color="teal" ripple="light">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
