"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AboutNavItem() {
  const pathname = usePathname();

  return (
    <div className="font-medium text-slate-400 flex gap-4">
      <Link
        className={`p-3 rounded-lg transition hover:text-slate-100 ${
          pathname === "/about" ? "text-yellow-400 bg-yellow-700/25" : ""
        }`}
        href={"/about"}
      >
        Tech Stack
      </Link>
      <Link
        className={`p-3 rounded-lg transition hover:text-slate-100 ${
          pathname === "/about/tools" ? "text-yellow-400 bg-yellow-700/25" : ""
        }`}
        href={"/about/tools"}
      >
        Tools
      </Link>
    </div>
  );
}
