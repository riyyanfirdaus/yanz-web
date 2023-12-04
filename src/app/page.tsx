import { AboutSection, EmailSection, HeroSection, ProjectsSection } from "@/components";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-6xl mt-28">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <EmailSection />
    </main>
  );
}
