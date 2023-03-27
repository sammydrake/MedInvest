import Link from "next/link";
import { useState } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";

const NavBar = ({ title, classprops, link }) => (
  <li
    className={`font-medium tracking-wide text-[#777] transition-colors duration-200 hover:text-deep-purple-accent-400 cursor-pointer ${classprops}`}
  >
    <Link href={`${link}`}>{title}</Link>
  </li>
);

const Navbar = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between">
        {}
        <Link
          href="/"
          aria-label="MedInvest"
          title="MedInvest"
          className="inline-flex items-center"
        >
          <span className="ml-2 text-xl font-bold tracking-wide uppercase">
            MedInvest
          </span>
        </Link>

        <ul className="flex items-center hidden space-x-8 lg:flex">
          <li>
            <p
              className={`inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md focus:shadow-outline focus:outline-none cursor-pointer ${
                props.walletConnected()
                  ? "bg-green-500"
                  : "bg-gray-500 hover:bg-gray-600"
              }`}
              onClick={() => props.walletConnected() || props.connect()}
            >
              {props.walletConnected() ? "Wallet Connected" : "Connect Wallet"}
            </p>
          </li>
        </ul>

        <div className="lg:hidden">
          {!isMenuOpen && (
            <CgMenuGridR
              fontSize={50}
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline cursor-pointer"
              onClick={() => setIsMenuOpen(true)}
            />
          )}

          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-10">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  {}
                  <Link
                    href="/"
                    aria-label="LOGIC"
                    title="LOGIC"
                    className="inline-flex items-center"
                  >
                    <span className="text-xl font-bold tracking-wide uppercase">
                      MedInvest
                    </span>
                  </Link>

                  <AiOutlineClose
                    fontSize={28}
                    className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline cursor-pointer"
                    onClick={() => setIsMenuOpen(false)}
                  />
                </div>
                <nav>
                  <ul className="space-y-4">
                    {}
                    {props.navItems.map((item, index) => (
                      <NavBar
                        key={item.title + index}
                        title={item.title}
                        link={item.link}
                        classprops=""
                      />
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
