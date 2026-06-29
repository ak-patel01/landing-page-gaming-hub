import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { FloatingButtons } from '@/components/FloatingButtons';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FloatingButtons />
      <Footer />
    </>
  );
}
