'use client';

import { Navbar } from './components/atoms/Navbar/Navbar';
import { Contact } from './components/organisms/Contact/Contact';
import { Hero } from './components/organisms/Hero/Hero';
import { Projects } from './components/organisms/Projects/Projects';
import { Services } from './components/organisms/Services/Services';
import { Testimonials } from './components/organisms/Testimonials/Testimonials';
import { labels } from './constants';

export default function Home() {
  return (
    <div className='flex min-h-screen w-full flex-col items-center'>
      <Navbar />
      <main className='mt-[4.875rem] flex w-full flex-col lg:w-[80rem]'>
        <Hero />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <footer className='bg-primary flex w-full justify-center p-4'>
        <span className='font-normal text-white'>
          {labels.footer.description}
        </span>
      </footer>
    </div>
  );
}
