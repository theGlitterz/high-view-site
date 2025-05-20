import { useEffect } from 'react';
import { motion } from 'framer-motion';

const Section = ({ children, className = '' }) => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    viewport={{ once: true }}
    className={`px-6 py-20 max-w-6xl mx-auto ${className}`}
  >
    {children}
  </motion.section>
);

export default function App() {
  return (
    <div className="bg-white text-black font-sans">
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src="/hero.jpg"
          alt="Hero Background"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white text-4xl md:text-6xl font-light text-center max-w-3xl"
          >
            High View Luxury Residence
          </motion.h1>
        </div>
      </section>

      <Section>
        <h2 className="text-2xl md:text-4xl font-medium mb-6">Project Overview</h2>
        <p className="text-lg leading-relaxed max-w-3xl">
          The High View project is a modern residence that blends minimalism with functionality.
          Featuring clean lines, premium materials, and an emphasis on natural light, this home
          redefines contemporary living.
        </p>
      </Section>

      <Section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((n) => (
          <motion.img
            key={n}
            src={`/gallery${n}.jpg`}
            alt={`Gallery ${n}`}
            className="rounded-xl shadow-lg object-cover w-full h-80"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </Section>

      <Section className="text-center">
        <h2 className="text-3xl md:text-5xl font-semibold mb-4">Let's Build Something Beautiful</h2>
        <p className="text-lg mb-8">Contact us to begin your own luxury design journey.</p>
        <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition">Get In Touch</button>
      </Section>

      <footer className="py-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Your Studio Name. All rights reserved.
      </footer>
    </div>
  );
}
