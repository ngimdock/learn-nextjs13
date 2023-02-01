import { Inter } from "@next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h2>home page</h2>
      <Link href="todos" className="p-2 text-white bg-indigo-600 rounded ">
        todos
      </Link>
    </main>
  );
}
