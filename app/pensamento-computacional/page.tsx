'use client';

import { motion } from 'framer-motion';
import { FaLightbulb, FaPuzzlePiece, FaBrain, FaGamepad } from 'react-icons/fa';
import HeroAcoes from '../../components/HeroAcoes';

export default function PensamentoComputacionalPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroAcoes
        title="Pensamento Computacional"
        subtitle="Desenvolvendo habilidades de resolução de problemas através da lógica"
        icon={<FaLightbulb />}
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
              O projeto <strong>Pensamento Computacional</strong> tem como objetivo desenvolver habilidades fundamentais
              de resolução de problemas através de atividades lúdicas, desafios de lógica e jogos educativos.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              O pensamento computacional não se trata apenas de programar computadores, mas de desenvolver uma forma
              estruturada de pensar que pode ser aplicada em qualquer área do conhecimento e na vida cotidiana.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Através de atividades desplugadas (sem uso de computadores) e plugadas (com tecnologia), as participantes
              desenvolvem competências como decomposição de problemas, reconhecimento de padrões, abstração e algoritmos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>PILARES</h2>
            <p>OS 4 PILARES DO PENSAMENTO COMPUTACIONAL</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <div className="text-5xl text-purple-600 mb-4 flex justify-center">
                <FaPuzzlePiece />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Decomposição</h3>
              <p className="text-gray-600">
                Dividir problemas complexos em partes menores e mais gerenciáveis
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <div className="text-5xl text-pink-600 mb-4 flex justify-center">
                <FaBrain />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Reconhecimento de Padrões</h3>
              <p className="text-gray-600">
                Identificar semelhanças e tendências em diferentes situações
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <div className="text-5xl text-purple-600 mb-4 flex justify-center">
                <FaLightbulb />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Abstração</h3>
              <p className="text-gray-600">
                Focar nos aspectos importantes, ignorando detalhes irrelevantes
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <div className="text-5xl text-pink-600 mb-4 flex justify-center">
                <FaGamepad />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Algoritmos</h3>
              <p className="text-gray-600">
                Criar sequências de passos para resolver problemas de forma eficiente
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>ATIVIDADES</h2>
            <p>COMO TRABALHAMOS</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-600"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">Atividades Desplugadas</h3>
              <p className="text-gray-700 mb-3">
                Jogos e desafios que desenvolvem o pensamento computacional sem uso de tecnologia:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Jogos de tabuleiro lógicos</li>
                <li>• Desafios de sequenciamento</li>
                <li>• Atividades de reconhecimento de padrões</li>
                <li>• Quebra-cabeças algorítmicos</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6 border-l-4 border-pink-600"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">Atividades Plugadas</h3>
              <p className="text-gray-700 mb-3">
                Uso de ferramentas digitais para aplicar conceitos de forma prática:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Programação visual com Scratch</li>
                <li>• Jogos educativos de lógica</li>
                <li>• Desafios de programação</li>
                <li>• Projetos criativos digitais</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-600"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">Projetos Colaborativos</h3>
              <p className="text-gray-700 mb-3">
                Trabalho em equipe para resolver desafios complexos:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Competições de lógica</li>
                <li>• Hackathons educacionais</li>
                <li>• Projetos interdisciplinares</li>
                <li>• Apresentações e compartilhamento</li>
              </ul>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Desenvolva o Pensamento Computacional!</h2>
            <p className="text-lg text-gray-700 mb-8">
              Entre em contato para saber mais sobre nossas oficinas e como levar o projeto para sua escola.
            </p>
            <a
              href="/#contact"
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300"
            >
              Entre em Contato
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}

