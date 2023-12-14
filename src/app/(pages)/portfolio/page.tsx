import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";

const data = [
  {
    image: "portfolio.jpeg",
    title: "personal website",
    desc: "My personal website, I created this website to display my profile, skills and projects. As well as my place to try new technology.",
    techStack: "NextJS, TailwindCSS",
    linkGithub: "/",
    linkWeb: "/",
  },
];

export default function portfolio() {
  return (
    <Navbar>
      <div className="text-center pt-10">
        <h1 className="font-bold text-2xl">Past Project Experience</h1>
        <p className="bg-gradient-to-r from-white to-yellow-300 text-transparent bg-clip-text">
          Explore the projects I&apos;ve worked on so far
        </p>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 lg:p-10">
        {data.map((doc) => (
          <Link
            href={doc.linkWeb}
            className="p-5 bg-slate-900 rounded-xl grid gap-4 max-w-xl m-auto transition hover:bg-slate-800 hover:-translate-y-2"
            key={doc.title}
          >
            <Image
              className="rounded-xl"
              src={`/portfolio/${doc.image}`}
              alt={doc.title}
              width={1000}
              height={1000}
            />
            <p className="font-medium text capitalize text-center">
              {doc.title}
            </p>
            <p className="text-slate-300 text-sm">{doc.desc}</p>
            <p className="font-medium text-yellow-600 text-sm">
              {doc.techStack}
            </p>
            <Link className="flex justify-end" href={doc.linkGithub}>
              <FiGithub size="2em" />
            </Link>
          </Link>
        ))}
      </div>
    </Navbar>
  );
}
