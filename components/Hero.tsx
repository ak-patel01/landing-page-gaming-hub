'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const WHATSAPP_NUMBER = '+918889612456';
const WHATSAPP_MESSAGE = "Hello! I want to know more about it.";

export function Hero() {
  const handleWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="hero-section"
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center pt-20"
    >
      {/* Background Images with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-background z-10" />

        {/* Roulette Image */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-60">
          <Image
            src="/casino-roulette.png"
            alt="Casino Roulette"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Cricket Players Image */}
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-50">
          <Image
            src="/cricket-players.png"
            alt="Cricket Players"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white text-balance"
        >
          Create Your Gaming ID
          <span className="block text-transparent bg-gradient-to-r from-primary via-accent to-primary bg-clip-text mt-2">
            Today
          </span>
        </motion.h1>

        {/* Support Text */}
        <motion.div variants={itemVariants} className="mb-8">
          <p className="text-2xl sm:text-3xl font-semibold text-primary mb-4">
            24×7 Customer Support
          </p>
          <p className="text-lg text-muted-foreground">
            Fast • Secure • Instant ID Creation
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={handleWhatsApp}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl glow-accent transition-all"
            >
              Create Your ID
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={handleWhatsApp}
              variant="outline"
              className="border-2 border-accent text-accent hover:bg-accent/10 font-bold text-lg px-8 py-6 rounded-xl transition-all"
            >
              Chat Now
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-center justify-center">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
}
