import Navbar from "@/components/Navbar";
import Main from "@/components/Main"
import Features from "@/components/Features";

export default function Home() {
  return (
    <main className="flex flex-col gap-6 p-6 md:px-28">
      <Navbar />
      <Main />
      <Features />
    </main>
  );
}
