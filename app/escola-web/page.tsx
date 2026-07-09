'use client';

import { motion } from 'framer-motion';
import {
  FaCode,
  FaPython,
  FaHtml5,
  FaDatabase,
  FaChartLine,
  FaCalendarAlt,
  FaClock,
  FaUsers,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa';
import HeroAcoes from '../../components/HeroAcoes';

const INSCRICAO_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfonhqAc7B0_Jt30kqwYRGHFl9xUQY2h1XBMrEy_GEuNvMouQ/viewform';

const modules = [
  {
    title: 'Introdução aos Conceitos de Computação',
    description: 'O computador; história do computador; conceito de algoritmo; conceito de linguagem de programação.',
  },
  {
    title: 'Lógica de Programação em Python',
    description:
      'Variáveis, tipos de dados, entrada e saída de dados, operadores, expressões, lógica booleana, estruturas condicionais e laços de repetição.',
  },
  {
    title: 'Manipulação de Dados',
    description: 'Arranjos, listas, strings e dicionários.',
  },
  {
    title: 'Funções e Bibliotecas',
    description: 'Organização de código em funções e uso de bibliotecas Python.',
  },
  {
    title: 'Entrada e Saída de Dados',
    description: 'Leitura e escrita em arquivos.',
  },
  {
    title: 'Introdução à Web',
    description: 'História da internet, protocolos web e linguagens de marcação (HTML, CSS).',
  },
  {
    title: 'Streamlit',
    description: 'Criação de aplicações web de dados interativas com Python.',
  },
  {
    title: 'Banco de Dados',
    description: 'Fundamentos de armazenamento e consulta de dados.',
  },
];

export default function EscolaWebPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroAcoes
        title="Escola de Web para Meninas"
        subtitle="Curso de desenvolvimento web para meninas e mulheres — ICMC-USP"
        icon={<FaCode />}
      />

      {/* Enrollment Banner */}
      <section className="bg-gradient-to-r from-pink-600 to-purple-600 py-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-6 text-white"
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-pink-100">Processo Seletivo Aberto</p>
              <h2 className="text-2xl md:text-3xl font-bold">Inscrições até 27/07 — 100% gratuito</h2>
              <p className="text-pink-50 mt-1">Resultado da 1ª chamada em 07/08 · 200 vagas · Curso a distância</p>
            </div>
            <a
              href={INSCRICAO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-all duration-300 whitespace-nowrap"
            >
              Inscreva-se Agora
            </a>
          </motion.div>
        </div>
      </section>

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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Sobre o Curso</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              O <strong>Curso de Desenvolvimento Web para Meninas e Mulheres</strong> (código 550200008) é um curso de
              extensão do ICMC-USP, na modalidade de aperfeiçoamento e 100% a distância, com o objetivo de aumentar a
              participação feminina no mercado nacional de desenvolvimento de software.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              É voltado para estudantes de ensino fundamental II ou ensino médio de escolas públicas identificadas com
              o gênero feminino, e também para pessoas adultas formadas no ensino médio que atuam em áreas diferentes
              da computação e se identificam com o gênero feminino.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Ao longo do curso, as alunas aprendem lógica de programação em Python, manipulação de dados,
              fundamentos de desenvolvimento web e criação de aplicações de dados interativas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Course Info Grid */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} viewport={{ once: true }}>
              <FaCalendarAlt className="text-3xl text-pink-600 mx-auto mb-2" />
              <p className="font-bold text-gray-900">15/08/2026 a 30/01/2027</p>
              <p className="text-sm text-gray-600">Período do curso</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }} viewport={{ once: true }}>
              <FaClock className="text-3xl text-purple-600 mx-auto mb-2" />
              <p className="font-bold text-gray-900">180 horas</p>
              <p className="text-sm text-gray-600">Carga horária</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }} viewport={{ once: true }}>
              <FaUsers className="text-3xl text-pink-600 mx-auto mb-2" />
              <p className="font-bold text-gray-900">200 vagas</p>
              <p className="text-sm text-gray-600">Gratuitas</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.3 }} viewport={{ once: true }}>
              <FaMapMarkerAlt className="text-3xl text-purple-600 mx-auto mb-2" />
              <p className="font-bold text-gray-900">ICMC-USP</p>
              <p className="text-sm text-gray-600">A distância</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>CONTEÚDO</h2>
            <p>O QUE VOCÊ VAI APRENDER</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <div className="text-6xl text-blue-600 mb-4 flex justify-center">
                <FaPython />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lógica com Python</h3>
              <p className="text-gray-600">
                Variáveis, estruturas condicionais, laços de repetição e fundamentos de programação
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <div className="text-6xl text-purple-600 mb-4 flex justify-center">
                <FaDatabase />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dados e Banco de Dados</h3>
              <p className="text-gray-600">
                Listas, dicionários, arquivos e fundamentos de armazenamento de dados
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <div className="text-6xl text-orange-600 mb-4 flex justify-center">
                <FaHtml5 />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Introdução à Web</h3>
              <p className="text-gray-600">
                História da internet, protocolos web e linguagens de marcação HTML e CSS
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <div className="text-6xl text-pink-600 mb-4 flex justify-center">
                <FaChartLine />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Streamlit</h3>
              <p className="text-gray-600">
                Criação de aplicações web de dados interativas com Python
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>PROGRAMA</h2>
            <p>MÓDULOS DO CURSO</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {modules.map((module, index) => (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 border-l-4 border-pink-600 shadow-sm"
              >
                <p className="text-sm font-bold text-pink-600 mb-1">Módulo {index + 1}</p>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{module.title}</h3>
                <p className="text-gray-600 text-sm">{module.description}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Quer Participar?</h2>
            <p className="text-lg text-gray-700 mb-2">
              Inscrições abertas até <strong>27/07</strong>. Resultado da 1ª chamada em <strong>07/08</strong>.
            </p>
            <p className="text-gray-600 mb-8">
              Critérios de seleção: estudantes de ensino fundamental II, ensino médio ou pessoas com ensino médio
              concluído que se identifiquem com o gênero feminino. Aprovação: 75% de frequência, nota de projeto
              acima de 7 e nota de exercícios acima de 6.
            </p>
            <a
              href={INSCRICAO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300"
            >
              Inscreva-se Agora
            </a>

            <div className="flex flex-wrap justify-center gap-8 mt-10 text-gray-600 text-sm">
              <span className="flex items-center gap-2">
                <FaPhone className="text-pink-600" /> (16) 3373-8171
              </span>
              <span className="flex items-center gap-2">
                <FaEnvelope className="text-pink-600" /> grace@icmc.usp.br
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
