import Image from "next/image";

export default function CardSkill({
  data,
}: {
  data: { name: string; level: string }[];
}) {
  return (
    <div className="grid gap-2 md:gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:px-20">
      {data.map((doc: { name: string; level: string }) => (
        <div
          className="border h-16 md:h-20 border-yellow-500 cursor-pointer rounded-lg p-2 md:p-4 flex items-center gap-4 font-semibold group hover:bg-yellow-500/25 transition"
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
  );
}
