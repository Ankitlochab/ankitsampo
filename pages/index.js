import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/common/Navbar";
import Section1 from "@/components/common/Section1";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <Section1 />
    </>
  );
}
