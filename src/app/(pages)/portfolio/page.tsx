import Navbar from "@/components/navbar";
import Image from "next/image";

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

      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        {data.map((doc) => (
          <div className="p-4 bg-slate-500 rounded-xl" key={doc.title}>
            <Image
              className="rounded-xl"
              src={`/portfolio/${doc.image}`}
              alt={doc.title}
              width={1000}
              height={1000}
            />
            <p>{doc.title}</p>
            <p>{doc.desc}</p>
            <p>{doc.techStack}</p>
          </div>
        ))}
      </div>
    </Navbar>
  );
}
