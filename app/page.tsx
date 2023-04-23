import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import SubPage from "./subDir/page";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h1 className="mb-4">Index page</h1>
      <h2>
        <Link href={"subDir"}>Click to go to SubPage</Link>
      </h2>
    </>
  );
}
