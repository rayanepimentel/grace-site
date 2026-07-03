import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface HeroAcoesProps {
  title: string;
  subtitle: string;
  icon: ReactNode;
}

export default function HeroAcoes({ title, subtitle, icon }: HeroAcoesProps) {
  return (
    <section className="relative pt-32 pb-16 bg-gradient-to-br from-[#fef3f8] to-[#f8f0ff]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h1>
            <p className="text-lg md:text-xl text-gray-600">
              {subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-pink-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
              <div className="text-4xl text-white">
                {icon}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

