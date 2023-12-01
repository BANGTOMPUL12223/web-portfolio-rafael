import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed">
      <Link href={"/"} className="text-2xl font-semibold">
        Rafael Sitompoel
      </Link>
    </div>
  );
}
