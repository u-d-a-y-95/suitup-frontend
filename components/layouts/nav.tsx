import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/24/outline";

const Nav = () => {
  return (
    <div className="border-b sticky top-0 shadow">
      <div className="flex justify-between items-center container mx-auto">
        <div className="py-6">
          <Image
            src="/assets/img/logo.png"
            width="100"
            height="80"
            alt="Logo"
          />
        </div>
        <div>
          <div className="sm:hidden flex justify-center items-center ">
            <Bars3Icon className="w-8" />
          </div>
          <ul className="hidden sm:flex ">
            <li className="px-4 py-6  hover:bg-teal-400 hover:text-white">
              <a className="" href="">
                Home
              </a>
            </li>
            <li className="px-4 py-6  hover:bg-teal-400 hover:text-white">
              <a className="" href="">
                Categories
              </a>
            </li>
            <li className="px-4 py-6  hover:bg-teal-400 hover:text-white">
              <a className="" href="">
                Sales
              </a>
            </li>
            <li className="px-4 py-6  hover:bg-teal-400 hover:text-white">
              <a className="" href="">
                My Cart
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
