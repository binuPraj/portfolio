import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ScrollingBanner from '@/components/ScrollingBanner';
import Projects from '@/components/Projects';
import Experiences from '@/components/Experiences';
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ScrollingBanner />
      <Projects />
      <Experiences />
      <Skills />
      <Footer />
    </main>
  );
}
