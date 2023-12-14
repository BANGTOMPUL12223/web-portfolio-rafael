import Image from "next/image";
import Navbar from "../components/navbar";
import TypewriterText from "@/components/typewriter";

export default function Home() {
  return (
    <Navbar>
      <div className="text-center md:text-start mt-20 items-center justify-around md:flex">
        <div className="max-w-md md:m-0 m-auto border-4 border-yellow-300 shadow-yellow-300/25 rounded-full overflow-hidden shadow-[0_0_75px_25px_rgba(0,0,0,0.3)] md:order-2">
          <Image
            className="w-full"
            src={"/profil.jpeg"}
            alt="Rafael Paulus Sitompul"
            width={150}
            height={150}
          />
        </div>

        <div className="mt-6 flex flex-col gap-4 md:order-1 md:mt-0 md:gap-2">
          <p className="text-yellow-300">Hello World, I&apos;m</p>
          <p className="text-3xl font-bold">Rafael Paulus Sitompul</p>
          <TypewriterText />
          <p>Welcome To My Personal Website. 👋🏻</p>
        </div>
      </div>
    </Navbar>
  );
}
