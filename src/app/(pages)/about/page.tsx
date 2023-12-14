import Image from "next/image";
import AboutLayout from "./aboutLayout";

const data = [
  { image: "/html.svg", name: "html", level: "advanced" },
  { image: "/css.svg", name: "css", level: "advanced" },
  { image: "/php.svg", name: "php", level: "advanced" },
];

export default function about() {
  return (
    <AboutLayout>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {data.map((doc) => (
          <div
            className="border h-20 border-yellow-500 rounded-lg p-4 flex items-center gap-4 font-semibold group hover:bg-yellow-500/25 transition"
            key={doc.name}
          >
            <Image
              className="w-8 transition group-hover:scale-125"
              src={doc.image}
              alt={doc.name}
              width={100}
              height={100}
            />
            <div className="grid items-center">
              <p>{doc.name.toUpperCase()}</p>
              <p className="capitalize text-xs hidden transition group-hover:inline text-yellow-500">
                {doc.level}
              </p>
            </div>
          </div>
        ))}
      </div>
    </AboutLayout>
  );
}
