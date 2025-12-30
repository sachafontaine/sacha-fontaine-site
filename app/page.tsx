import TopNav from "@/components/TopNav";
import Hero from "@/components/Hero";
import Experiences from "@/components/Experiences";
import Projects from "@/components/Projects";
import Hobbies from "@/components/Hobbies";
import Contact from "@/components/Contact";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="min-h-screen">
      <TopNav />
      <Hero />
      <Experiences />
      <Projects />
      <Hobbies />
      <Contact />
    </main>
  );
}

