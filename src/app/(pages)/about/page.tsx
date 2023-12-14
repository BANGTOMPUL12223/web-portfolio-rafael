import Image from "next/image";
import AboutLayout from "./aboutLayout";

const data = [
  { name: "html", level: "advanced" },
  { name: "css", level: "advanced" },
  { name: "php", level: "advanced" },
  { name: "javascript", level: "advanced" },
  { name: "laravel", level: "advanced" },
  { name: "codeigniter", level: "intermediate" },
  { name: "vuejs", level: "intermediate" },
  { name: "alpinejs", level: "beginner" },
  { name: "nodejs", level: "beginner" },
  { name: "tailwind", level: "advanced" },
  { name: "bootstrap", level: "intermediate" },
  { name: "reactjs", level: "beginner" },
];

export default function about() {
  return (
    <AboutLayout>
      <div className="grid gap-2 md:gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:px-20">
        {data.map((doc) => (
          <div
            className="border h-16 md:h-20 border-yellow-500 rounded-lg p-2 md:p-4 flex items-center gap-4 font-semibold group hover:bg-yellow-500/25 transition"
            key={doc.name}
          >
            <Image
              className="w-6 md:w-8 transition group-hover:scale-125"
              src={`/${doc.name}.svg`}
              alt={doc.name}
              width={100}
              height={100}
            />
            <div className="grid items-center">
              <p className="text-sm md:text-base">{doc.name.toUpperCase()}</p>
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
