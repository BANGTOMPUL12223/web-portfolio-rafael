"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarItem() {
  const pathname = usePathname();

  return (
    <>
      <li
        className={`hover:text-slate-500 transition ${
          pathname === "/" ? "text-white" : "text-slate-600"
        }`}
      >
        <Link href={"/"}>Home</Link>
      </li>
      <li
        className={`hover:text-slate-500 transition ${
          pathname === "/about" ? "text-white" : "text-slate-600"
        }`}
      >
        <Link href={"/about"}>About</Link>
      </li>
      <li
        className={`hover:text-slate-500 transition ${
          pathname === "/portfolio" ? "text-white" : "text-slate-600"
        }`}
      >
        <Link href={"/portfolio"}>Portfolio</Link>
      </li>
      <li
        className={`hover:text-slate-500 transition ${
          pathname === "/blog" ? "text-white" : "text-slate-600"
        }`}
      >
        <Link href={"/Blog"}>Blog</Link>
      </li>
    </>
  );
}
