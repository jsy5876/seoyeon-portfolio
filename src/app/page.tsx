import Header from "../components/Header";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050914] text-white">
      <Header />

      <div className="mx-auto max-w-6xl px-6">
        <About />
        <Skills />
        <Projects />
      </div>
    </main>
  );
}