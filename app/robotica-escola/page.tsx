'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaRobot, FaUsers, FaLaptopCode, FaGraduationCap } from 'react-icons/fa';
import HeroAcoes from '../../components/HeroAcoes';

export default function RoboticaEscolaPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroAcoes
        title="Robótica na Escola"
        subtitle="Levando robótica educacional para escolas públicas, ensinando programação e pensamento lógico"
        icon={<FaRobot />}
      />

      {/* About Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Sobre o Projeto</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              O projeto <strong>Robótica na Escola</strong> leva a tecnologia e a programação para escolas públicas de
              São Carlos e região, com foco especial em incentivar meninas a explorarem o mundo da robótica educacional.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Através de atividades práticas e lúdicas, as alunas aprendem conceitos de programação, eletrônica básica e
              pensamento computacional, desenvolvendo habilidades essenciais para o século XXI.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Utilizamos kits de robótica educacional e plataformas de programação visual, tornando o aprendizado
              acessível e divertido para todas as idades.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>DESTAQUES</h2>
            <p>O QUE AS ALUNAS APRENDEM</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <div className="text-5xl text-pink-600 mb-4 flex justify-center">
                <FaRobot />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Montagem de Robôs</h3>
              <p className="text-gray-600">
                Construção e montagem de robôs educacionais com componentes eletrônicos básicos
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <div className="text-5xl text-purple-600 mb-4 flex justify-center">
                <FaLaptopCode />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Programação Visual</h3>
              <p className="text-gray-600">
                Aprendizado de lógica de programação através de plataformas visuais intuitivas
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <div className="text-5xl text-pink-600 mb-4 flex justify-center">
                <FaUsers />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Trabalho em Equipe</h3>
              <p className="text-gray-600">
                Desenvolvimento de habilidades colaborativas através de projetos em grupo
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <div className="text-5xl text-purple-600 mb-4 flex justify-center">
                <FaGraduationCap />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pensamento Lógico</h3>
              <p className="text-gray-600">
                Estímulo ao raciocínio lógico e resolução criativa de problemas
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>METODOLOGIA</h2>
            <p>COMO FUNCIONA</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex gap-6 items-start"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Introdução à Robótica</h3>
                <p className="text-gray-700">
                  Apresentação dos conceitos básicos de robótica, eletrônica e programação de forma lúdica e acessível.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex gap-6 items-start"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Atividades Práticas</h3>
                <p className="text-gray-700">
                  Montagem de circuitos simples e programação de robôs educacionais com desafios progressivos.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex gap-6 items-start"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Projetos Finais</h3>
                <p className="text-gray-700">
                  Desenvolvimento de projetos criativos em equipe, aplicando todos os conhecimentos adquiridos.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Quer Levar o Projeto para Sua Escola?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Entre em contato conosco para saber como trazer a Robótica na Escola para sua instituição de ensino.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300"
            >
              Entre em Contato
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

