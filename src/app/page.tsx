import Image from "next/image";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <Navbar>
      <Image
        src={"/profil.jpeg"}
        alt="Rafael Paulus Sitompul"
        width={100}
        height={100}
      />
    </Navbar>
  );
}
