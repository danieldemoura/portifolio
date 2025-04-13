import { AboutSection } from "@/layouts/AboutSection";
import { Header } from "@layouts/Header";
import { ProjectsSection } from "@layouts/ProjectsSection";
import { CTASection } from "@layouts/CTASection";
import { Footer } from "@layouts/Footer";

export function App() {
  return (
    <>
      <Header />
      <main className="relative z-10 bg-slate-950">
        <AboutSection />
        <ProjectsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
