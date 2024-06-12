import Heading from "@/components/Heading";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <h1>hi im page.js</h1>
     <h1>New heading of home</h1>
     <Heading></Heading>
    </main>
  );
}
