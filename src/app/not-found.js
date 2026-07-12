import Link from "next/link";
import Image from "next/image";
import Background from "@/components/layout/Background";
import { site } from "@/lib/site";

export const metadata = { title: "Not Found" };

export default function NotFound() {
  return (
    <>
      <Background />
      <main className="notfound">
        <div className="card notfound-card">
          <Image src={site.avatar} alt="" className="notfound-cat" width={96} height={96} />
          <h1>404</h1>
          <p>This page wandered off. Let&apos;s get you back.</p>
          <Link href="/" className="write-btn">Go home</Link>
        </div>
      </main>
    </>
  );
}
