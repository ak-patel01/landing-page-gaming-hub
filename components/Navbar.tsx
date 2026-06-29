'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const scrollToHero = () => {
    const heroSection = document.getElementById('hero-section');
    heroSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/80 border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text"
        >
          GameID
        </motion.div>

        {/* CTA Button */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            onClick={scrollToHero}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg px-6 py-2"
          >
            Create ID
          </Button>
        </motion.div>
      </div>
    </motion.nav>
  );
}
