import Hero from '@/app/components/Hero';
import { About } from '@/app/components/About';
import { Projects } from '@/app/components/Projects';
import { Contact } from '@/app/components/Contact';
import NavBar from './components/NavBar';
import '@/styles/styles.css';

export default function App() {
  return (
      <div className="relative w-full min-h-screen">
        <NavBar />
        <div className="w-full relative">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </div>
      </div>
  );
}