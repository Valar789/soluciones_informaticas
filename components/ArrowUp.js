import Image from "next/image";
import Link from "next/link";
import arrowUp from "public/arrowUp.png";
import { useEffect, useRef } from "react";

export default function ArrowUp() {
  const arrowRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header");
      const { y } = header.getBoundingClientRect();

      y === 0
        ? arrowRef.current.classList.toggle("arrowDisplay")
        : arrowRef.current.classList.remove("arrowDisplay");
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={arrowRef} className="hover:scale-110 fixed bottom-4 right-4 arrowDisplay z-30">
      <Link href="#header">
        <a>
          <Image width={25} height={25} src={arrowUp} alt="up" />
        </a>
      </Link>
    </div>
  );
}
