import Hero from "@/components/Hero";
import Technologies from "@/components/Technologies";
import Projects from "@/components/Projects";
import ScheduleCall from "@/components/ScheduleCall";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Technologies />
      <Projects />
      <ScheduleCall />
      <Footer />
    </main>
  );
}

