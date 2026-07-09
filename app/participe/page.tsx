'use client';

import { motion } from 'framer-motion';
import {
  FaHandsHelping,
  FaChalkboardTeacher,
  FaSchool,
  FaUserPlus,
  FaLaptopCode,
  FaBullhorn,
} from 'react-icons/fa';
import HeroAcoes from '@/components/HeroAcoes';

export default function ParticipePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroAcoes
        title="Como Ajudar"
        subtitle="Faça parte dessa transformação"
        icon={<FaHandsHelping />}
      />

      {/* About Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              Você pode atuar como voluntária, mentora ou aluna nos projetos de extensão do GRACE, ajudando a
              promover a inclusão de meninas na tecnologia — não importa o estado onde você mora.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ways to Help Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>FORMAS DE PARTICIPAR</h2>
            <p>ESCOLHA COMO QUER CONTRIBUIR</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <div className="text-5xl text-pink-600 mb-4 flex justify-center">
                <FaChalkboardTeacher />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Convocação de Mentores</h3>
              <p className="text-gray-600">
                De vez em quando abrimos convocações para mentoria em projetos pontuais das nossas iniciativas, como
                orientar meninas de 8 a 18 anos na criação de aplicativos. Não precisa fazer parte do time GRACE
                para participar.
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
                <FaSchool />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Oficinas e Seminários</h3>
              <p className="text-gray-600">
                Participe de atividades em escolas locais, ensinando programação e ciências exatas para novas
                gerações.
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
                <FaUserPlus />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Processo Seletivo</h3>
              <p className="text-gray-600">
                Quer se tornar integrante voluntária do GRACE? Nosso processo seletivo é aberto para pessoas maiores
                de 18 anos. Fique de olho nas nossas redes para as próximas chamadas.
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
                <FaLaptopCode />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Monitoria de Projetos</h3>
              <p className="text-gray-600">
                Vagas para projetos específicos, como desenvolvimento web, muitas vezes voltadas para quem tem
                conhecimento em Python.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <div className="text-5xl text-pink-600 mb-4 flex justify-center">
                <FaBullhorn />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Divulgue o GRACE</h3>
              <p className="text-gray-600">
                Ajude a divulgar nossas convocações de mentoria e o processo seletivo, compartilhando nosso conteúdo
                nas redes sociais para chegar a um número cada vez maior de meninas.
              </p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pronta Para Participar?</h2>
            <p className="text-lg text-gray-700">
              Fique de olho nas nossas redes sociais para saber quando abrirem novas chamadas.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
