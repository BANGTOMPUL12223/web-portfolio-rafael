import Navbar from "@/components/navbar";
import Image from "next/image";

export default function about() {
  return (
    <Navbar>
      <div>
        <div className="border border-slate-300/25 rounded-3xl bg-gray-900 p-5">
          <p className="font-semibold text-2xl mb-6 text-slate-300">About Me</p>
          <div className="max-w-sm rounded-full overflow-hidden">
            <Image
              className="w-full"
              src={"/profil.jpeg"}
              alt="profile"
              width={300}
              height={300}
            />
          </div>
          <div className="flex flex-col gap-4 font-medium text-slate-400 text-justify mt-8 indent-8 text-sm md:text-lg">
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
      </div>
    </Navbar>
  );
}
