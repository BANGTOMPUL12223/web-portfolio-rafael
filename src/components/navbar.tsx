import Link from "next/link";
import { ReactNode } from "react";
import { FaGithub } from "react-icons/fa";
import NavbarItem from "./navbarItems";

export default function Navbar({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="fixed bg-black w-screen py-4 flex justify-around items-center">
        <Link
          href={"/"}
          className="text-xl text-yellow-300 font-semibold transition hover:text-white"
        >
          Rafael Sitompoel
        </Link>

        <ul className="md:flex hidden gap-4 font-semibold text-sm">
          <NavbarItem />
        </ul>

        <Link href={"/"}>
          <FaGithub size="2em" />
        </Link>
      </div>

      <div className="py-20 px-4">{children}</div>

      <div className="py-5 backdrop-blur-sm border border-slate-500 rounded-t-[30px] fixed bottom-0 w-screen md:hidden">
        <ul className="font-semibold text-sm flex justify-around">
          <NavbarItem />
        </ul>
      </div>
    </>
  );
}
