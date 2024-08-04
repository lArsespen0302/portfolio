import Navbar from "@/common/component/navbar";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
    <Navbar />
    <Link href="/about">About</Link>
  

  </div>
  );
}