import Navbar from "@/components/navbar";
import Image from "next/image";

export default function about() {
  return (
    <Navbar>
      <div>
        <div className="border border-slate-300/25 rounded-3xl bg-gray-900 p-5">
          <p className="font-semibold text-2xl">About Me</p>
          <div className="max-w-sm">
            <Image
              className="w-full"
              src={"/default.png"}
              alt="profile"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </Navbar>
  );
}
