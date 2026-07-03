'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaRobot } from 'react-icons/fa';

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fef3f8] to-[#f8f0ff] overflow-hidden px-4">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, purple 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center max-w-xl mx-auto"
      >
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-28 h-28 mx-auto mb-8 bg-gradient-to-br from-pink-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg"
        >
          <FaRobot className="text-5xl text-white" />
        </motion.div>

        <h1 className="text-7xl md:text-8xl font-bold mb-2">
          <span className="bg-gradient-to-r from-pink-500 via-pink-600 to-purple-600 bg-clip-text text-transparent">
            404
          </span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Essa página se perdeu no caminho!
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          Nem o nosso robô encontrou essa página. Que tal voltar pra explorar o que o GRACE tem pra te oferecer?
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300"
          >
            Voltar para o Início
          </Link>
          <Link
            href="/#contact"
            className="inline-block bg-white text-gray-800 px-8 py-3 rounded-lg font-semibold border border-gray-200 hover:border-pink-300 hover:text-pink-600 transition-all duration-300"
          >
            Falar com a Gente
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
