'use client';

import { motion } from 'framer-motion';

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-secondary/50 border-t border-border py-8 px-4"
    >
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-muted-foreground text-sm">
          © 2026 GameID. All Rights Reserved.
        </p>
      </div>
    </motion.footer>
  );
}
