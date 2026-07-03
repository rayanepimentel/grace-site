'use client';

import { motion } from 'framer-motion';
import { FaChartLine, FaDatabase, FaPython, FaChartBar } from 'react-icons/fa';
import HeroAcoes from '../../components/HeroAcoes';

export default function CienciaDadosPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroAcoes
        title="Ciência de Dados para Ensino Médio"
        subtitle="Introduzindo estudantes ao mundo da análise de dados e estatística"
        icon={<FaChartLine />}
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
              O projeto <strong>Ciência de Dados para Ensino Médio</strong> tem como objetivo introduzir estudantes do
              ensino médio aos conceitos fundamentais de análise de dados, estatística e visualização de informações.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Através de atividades práticas e projetos reais, as alunas aprendem a coletar, processar, analisar e
              visualizar dados, desenvolvendo habilidades essenciais para o mercado de trabalho do século XXI.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Utilizamos ferramentas modernas e acessíveis, como Python e bibliotecas de visualização, tornando o
              aprendizado de ciência de dados divertido e aplicável ao cotidiano.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>HABILIDADES</h2>
            <p>O QUE AS ALUNAS DESENVOLVEM</p>
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
                <FaDatabase />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Coleta de Dados</h3>
              <p className="text-gray-600">
                Técnicas para coletar e organizar dados de diferentes fontes
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
                <FaPython />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Programação Python</h3>
              <p className="text-gray-600">
                Fundamentos de programação aplicados à análise de dados
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
                <FaChartBar />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Visualização</h3>
              <p className="text-gray-600">
                Criação de gráficos e dashboards para comunicar insights
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
                <FaChartLine />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Análise Estatística</h3>
              <p className="text-gray-600">
                Conceitos estatísticos aplicados à interpretação de dados
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>CONTEÚDO</h2>
            <p>TÓPICOS ABORDADOS</p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Introdução à Ciência de Dados',
              'Estatística Descritiva',
              'Coleta e Limpeza de Dados',
              'Análise Exploratória',
              'Visualização de Dados',
              'Python para Análise',
              'Bibliotecas: Pandas e NumPy',
              'Projetos Práticos',
            ].map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-600"
              >
                <h3 className="text-lg font-bold text-gray-900 flex items-center gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-400 text-white rounded-full flex items-center justify-center text-sm">
                    {index + 1}
                  </span>
                  {topic}
                </h3>
              </motion.div>
            ))}
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Quer Participar do Projeto?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Entre em contato para saber mais sobre como participar ou levar o projeto para sua escola.
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

