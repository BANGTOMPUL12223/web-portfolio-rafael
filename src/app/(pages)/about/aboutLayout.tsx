import Navbar from "@/components/navbar";
import Image from "next/image";
import { ReactNode } from "react";
import AboutNavItem from "./aboutNavItem";

export default function AboutLayout({ children }: { children: ReactNode }) {
  return (
    <Navbar>
      <div className="grid gap-8">
        <div className="border border-slate-300/25 rounded-3xl bg-gray-900 p-5 justify-evenly items-center gap-10 lg:flex md:p-10">
          <div>
            <h1 className="font-semibold text-2xl mb-6 text-slate-300">
              About Me
            </h1>
            <div className="max-w-sm rounded-full overflow-hidden m-auto">
              <Image
                className="w-full"
                src={"/profil.jpeg"}
                alt="profile"
                width={300}
                height={300}
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 font-medium text-slate-300 text-justify m-auto lg:m-0 mt-8 indent-8 max-w-2xl text-sm md:text-xl">
            <p>
              Hi everyone! My name is Rafael Paulus Sitompul. I&apos;m a web
              developer from Pematang, South Sumatera. I have 1 year of
              experience in Full-Stack web development. I really enjoy what I do
              right now, in my opinion, creating programs is not just a job, but
              also an art that has aesthetic value.
            </p>
            <p>
              My job is to build your website to be functional and user-friendly
              yet still attractive. In addition, I provide a personal touch to
              your product and ensure that the website catches attention and is
              easy to use. My goal is to convey your message and identity in the
              most creative way. If you are interested in hiring me, please
              contact the listed contact.
            </p>
          </div>
        </div>

        <div>
          <h1 className="font-semibold text-2xl mb-6 text-slate-300">Skills</h1>
          <AboutNavItem />
          <div>{children}</div>
        </div>
      </div>
    </Navbar>
  );
}
