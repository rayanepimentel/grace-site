'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaBook, FaFileAlt, FaExternalLinkAlt } from 'react-icons/fa';
import HeroAcoes from '../../components/HeroAcoes';

const publications = [
  {
    title: 'Avaliação de Metodologias para Inclusão Digital',
    description: 'Dissertação de Mestrado/Trabalho Científico (USP)',
    image: '/assets/img/pesquisa/2.png',
    year: '2024',
    type: 'Dissertação de Mestrado',
    link: 'https://bdta.abcd.usp.br/directbitstream/aabe7b9b-5fbe-422d-8c22-1323c30ce073/Valerio_Marcelo.pdf',
  },
  {
    title: 'Artigo SBC - Experiências em TI',
    description: 'Publicação no Workshop sobre Informática na Tecnologia',
    image: '/assets/img/pesquisa/1.png',
    year: '2018',
    type: 'Artigo Científico',
    link: 'https://sol.sbc.org.br/index.php/wit/article/view/3397',
  },
  {
    title: 'Ações para a Inclusão Feminina na Era Digital',
    description: 'Despertando o Interesse em Programação - Trabalho de pesquisa da equipe GRACE',
    image: '/assets/img/pesquisa/3.png',
    year: '2018',
    type: 'Artigo Científico',
    link: 'https://www.researchgate.net/profile/Maria-Lydia-Fioravanti/publication/329360584_Acoes_para_a_Inclusao_Feminina_na_Era_Digital_Despertando_o_Interesse_em_Programacao/links/5c044c5192851c63cab62333/Acoes-para-a-Inclusao-Feminina-na-Era-Digital-Despertando-o-Interesse-em-Programacao.pdf',
  },
];

export default function PublicacoesPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroAcoes
        title="Publicações Científicas"
        subtitle="Pesquisas, artigos e trabalhos acadêmicos desenvolvidos pelo GRACE"
        icon={<FaBook />}
      />

      {/* Publications Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <Image
                    src={pub.image}
                    alt={pub.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-purple-600">
                    {pub.year}
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <FaFileAlt className="text-pink-600" />
                  <span className="text-sm text-gray-600">{pub.type}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors">
                  {pub.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">{pub.description}</p>

                <a
                  href={pub.link}
                  className="inline-flex items-center gap-2 text-pink-600 hover:text-purple-600 font-semibold transition-colors"
                >
                  Ler Mais <FaExternalLinkAlt className="text-sm" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quer Colaborar com Nossas Pesquisas?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Entre em contato para saber mais sobre oportunidades de colaboração e parcerias acadêmicas.
            </p>
            <a
              href="/#contact"
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300"
            >
              Entre em Contato
            </a>
          </motion.div>
        </div>
      </section> */}
    </>
  );
}
