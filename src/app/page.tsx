'use client';

import { Footer } from './components/atoms/Footer/Footer';
import { Navbar } from './components/atoms/Navbar/Navbar';
import { Contact } from './components/organisms/Contact/Contact';
import { Hero } from './components/organisms/Hero/Hero';
import { Projects } from './components/organisms/Projects/Projects';
import { Services } from './components/organisms/Services/Services';
import { Testimonials } from './components/organisms/Testimonials/Testimonials';

export default function Home() {
  return (
    <div className='flex min-h-screen w-full flex-col items-center'>
      <Navbar />
      <main className='mt-[4.25rem] flex w-full flex-col md:mt-[4.875rem] xl:w-[80rem]'>
        <Hero />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
