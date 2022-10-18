import H5 from "@material-tailwind/react/Heading5";
import Icon from "@material-tailwind/react/Icon";
import Link from "next/link";



export default function DefaultFooter() {

  return (
    <>
      <footer className="relative bg-white pt-8 pb-6">
        <div className="container max-w-7xl mx-auto px-4">
          <hr className="my-6 border-gray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-700 font-medium py-1">
                Copyright © {new Date().getFullYear()} LocalHost.{" "}
              </div>
            </div>
          </div>
        </div>
      </footer>

     
    </>
  );
}
