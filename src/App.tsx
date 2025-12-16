import { useState } from 'react';
import { Header } from './components/Header';
import { Intro } from './components/Intro';
import { About } from './components/About';
import { Blogs } from './components/Blogs';
import { Contact } from './components/Contact';

export default function App() {
  const [activeSection, setActiveSection] = useState('intro');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="pt-20">
        {activeSection === 'intro' && <Intro />}
        {activeSection === 'about' && <About />}
        {activeSection === 'blogs' && <Blogs />}
        {activeSection === 'contact' && <Contact />}
      </main>
    </div>
  );
}
