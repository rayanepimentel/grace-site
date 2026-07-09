'use client';


import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaRobot, FaChartLine, FaCode, FaLightbulb, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import Hero from '../components/Hero';


export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section id="about" className="section bg-white">
        <div className="container">
          <div className="section-title">
            <h2>SOBRE</h2>
            <p>QUEM SOMOS</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-700 leading-relaxed mb-4">
                O GRACE (GRupo de Alunas de Ciências Exatas) é um projeto de extensão do{' '}
                <strong>ICMC-USP (Instituto de Ciências Matemáticas e de Computação da Universidade de São Paulo)</strong>{' '}
                em São Carlos, dedicado ao desenvolvimento de atividades na área de tecnologia, com foco no público feminino
                da cidade de São Carlos e região, especialmente estudantes dos níveis primário, secundário e superior.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Inserido no Programa Nacional Meninas Digitais da SBC, o GRACE busca incentivar instituições a promoverem
                projetos que estimulem meninas do ensino fundamental e médio a se interessarem pela área de informática,
                contribuindo para a redução da desigualdade de gênero na tecnologia.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <Image
                src="/assets/img/masonry-portfolio/grace/2.png"
                alt="Imagem do Projeto GRACE"
                width={500}
                height={400}
                className="rounded-2xl shadow-xl w-auto h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team CTA Section */}
      <section id="equipe-cta" className="section bg-gray-50">
        <div className="container">
          <div className="section-title">
            <h2>NOSSA EQUIPE</h2>
            <p>CONHEÇA QUEM FAZ O GRACE ACONTECER</p>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600 mb-8">
              O GRACE é formado por uma equipe dedicada de professores, monitores, desenvolvedores e profissionais de
              diversas áreas, todos comprometidos em promover a inclusão de meninas e mulheres na tecnologia.
            </p>
            <Link href="/equipe" className="btn-primary">
              Conheça Nossa Equipe Completa
            </Link>
          </div>
        </div>
      </section>

      {/* Services/Parcerias Section */}
      <section id="services" className="section bg-gray-50">
        <div className="container">
          <div className="section-title">
            <h2>PARCERIAS</h2>
            <p>CONSTRUINDO PONTES PARA INOVAÇÃO</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="card text-center group"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src="/assets/parcerias/meninasDigitais.png"
                  alt="Logo Meninas Digitais"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                <a href="https://meninas.sbc.org.br" target="_blank" rel="noopener noreferrer">
                  Meninas Digitais
                </a>
              </h3>
              <p className="text-gray-600">Programa da Sociedade Brasileira de Computação.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="card text-center group"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src="/assets/parcerias/logoICMC.png"
                  alt="Logo ICMC"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                <a href="https://icmc.usp.br/institucional/quem-somos" target="_blank" rel="noopener noreferrer">
                  ICMC-USP
                </a>
              </h3>
              <p className="text-gray-600">Instituto de Ciências Matemáticas e de Computação da Universidade de São Paulo.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="card text-center group"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src="/assets/parcerias/logoSBC.png"
                  alt="Logo SBC"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                <a href="http://portal-adm.cnpq.br/web/guest/pagina-inicial" target="_blank" rel="noopener noreferrer">
                  SBC
                </a>
              </h3>
              <p className="text-gray-600">Sociedade Brasileira de Computação.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Actions Section */}
      <section id="acoes" className="section bg-white">
        <div className="container">
          <div className="section-title">
            <h2>NOSSAS AÇÕES</h2>
            <p>PROJETOS QUE TRANSFORMAM VIDAS</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Link href="/robotica-escola" className="service-item block group">
                <div className="icon text-pink-600">
                  <FaRobot />
                </div>
                <h3 className="group-hover:text-pink-600 transition-colors">Robótica na Escola</h3>
                <p>
                  Levamos robótica educacional para escolas públicas, ensinando programação e pensamento lógico de forma
                  prática e divertida.
                </p>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link href="/ciencia-dados" className="service-item block group">
                <div className="icon text-purple-600">
                  <FaChartLine />
                </div>
                <h3 className="group-hover:text-purple-600 transition-colors">Ciência de Dados para Ensino Médio</h3>
                <p>
                  Introduzimos estudantes do ensino médio ao mundo da análise de dados, estatística e visualização de
                  informações.
                </p>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Link href="/escola-web" className="service-item block group">
                <div className="icon text-pink-600">
                  <FaCode />
                </div>
                <h3 className="group-hover:text-pink-600 transition-colors">Escola de Programação Web</h3>
                <p>Curso online de 5 meses sobre programação web para meninas e mulheres de todo o Brasil, em parceria com a REBECA.</p>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link href="/pensamento-computacional" className="service-item block group">
                <div className="icon text-purple-600">
                  <FaLightbulb />
                </div>
                <h3 className="group-hover:text-purple-600 transition-colors">Pensamento Computacional</h3>
                <p>
                  Desenvolvemos habilidades de resolução de problemas através de atividades lúdicas e desafios de lógica.
                </p>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="section bg-gray-50">
        <div className="container">
          <div className="section-title">
            <h2>RESULTADOS</h2>
            <p>CONQUISTAS E RECONHECIMENTOS</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="card group"
            >
              <a href="https://www.instagram.com/p/DL6VD6SsrYI" target="_blank" rel="noopener noreferrer">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <Image
                    src="/assets/img/instagram/post4.png"
                    alt="Semifinalistas TechSchool"
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Três grupos da 7ª edição da TechSchool como semifinalistas na maior competição global de meninas na TI
                </h4>
                <p className="text-pink-600 font-semibold">Clique para ver no Instagram →</p>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="card group"
            >
              <a href="https://www.instagram.com/p/DKvdY7AR_0e/?img_index=1" target="_blank" rel="noopener noreferrer">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <Image
                    src="/assets/img/instagram/post1.png"
                    alt="Menção Honrosa INTERPRET"
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Aplicativo desenvolvido no TechSchool 2025 (INTERPRET), recebe menção honrosa
                </h4>
                <p className="text-pink-600 font-semibold">Clique para ver no Instagram →</p>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="card group"
            >
              <a href="https://www.instagram.com/p/C7zIqT0qWEf" target="_blank" rel="noopener noreferrer">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <Image
                    src="/assets/img/instagram/post6.png"
                    alt="Semifinal Technovation Girls"
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Temos 4 equipes diretamente da TechSchool na semifinal da competição internacional Technovation Girls
                </h4>
                <p className="text-pink-600 font-semibold">Clique para ver no Instagram →</p>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research/Portfolio Section */}
      <section id="portfolio" className="section bg-white">
        <div className="container">
          <div className="section-title">
            <h2>PESQUISAS</h2>
            <p>PUBLICAÇÕES CIENTÍFICAS</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="card group"
            >
              <div className="relative overflow-hidden rounded-xl mb-4">
                <Image
                  src="/assets/img/pesquisa/2.png"
                  alt="Avaliação de Metodologias"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Avaliação de Metodologias para Inclusão Digital
              </h4>
              <p className="text-gray-600 mb-4">Dissertação de Mestrado/Trabalho Científico (USP)</p>
              <a
                href="https://bdta.abcd.usp.br/directbitstream/aabe7b9b-5fbe-422d-8c22-1323c30ce073/Valerio_Marcelo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-purple-600 font-semibold inline-flex items-center gap-2"
              >
                Acessar PDF <span>→</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="card group"
            >
              <div className="relative overflow-hidden rounded-xl mb-4">
                <Image
                  src="/assets/img/pesquisa/1.png"
                  alt="Artigo SBC"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Artigo SBC - Experiências em TI</h4>
              <p className="text-gray-600 mb-4">Publicação no Workshop sobre Informática na Tecnologia</p>
              <a
                href="https://sol.sbc.org.br/index.php/wit/article/view/3397"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-purple-600 font-semibold inline-flex items-center gap-2"
              >
                Acessar Artigo <span>→</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="card group"
            >
              <div className="relative overflow-hidden rounded-xl mb-4">
                <Image
                  src="/assets/img/pesquisa/3.png"
                  alt="Pesquisa 3"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Mais Publicações</h4>
              <p className="text-gray-600 mb-4">Confira outras pesquisas e trabalhos do GRACE</p>
              <Link
                href="/publicacoes"
                className="text-pink-600 hover:text-purple-600 font-semibold inline-flex items-center gap-2"
              >
                Ver Mais <span>→</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mídia Section */}
      <section id="midia" className="section bg-gray-50">
        <div className="container">
          <div className="section-title">
            <h2>GRACE NA MÍDIA</h2>
            <p>REPERCUSSÃO E COBERTURA</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="card group"
            >
              <a href="https://www.bancadejornalistas.com.br/mentoria-contribua-para-que-garotas-criem-aplicativos-em-escola-de-verao-na-usp" target="_blank" rel="noopener noreferrer">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <Image
                    src="/assets/img/midia/img1.png"
                    alt="Mentoria em Escola de Verão"
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Mentoria em Escola de Verão na USP para criação de apps
                </h4>
                <p className="text-pink-600 font-semibold">Clique para ler →</p>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="card group"
            >
              <a href="https://www.f3noticias.com.br/meninas-em-franca-podem-ajudar-a-formar-nova-geracao-de-mulheres-lideres-de-tecnologia/" target="_blank" rel="noopener noreferrer">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <Image
                    src="/assets/img/midia/img2.png"
                    alt="Meninas líderes em tecnologia"
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Meninas em Franca podem ser líderes em tecnologia
                </h4>
                <p className="text-pink-600 font-semibold">Clique para ler →</p>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="card group"
            >
              <a href="https://www.dsvc.com.br/2021/01/oportunidade-na-usp-garotas-de-10-a-18-anos-podem-criar-aplicativos/" target="_blank" rel="noopener noreferrer">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <Image
                    src="/assets/img/midia/img3.png"
                    alt="Oportunidade na USP"
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Oportunidade na USP: Garotas criam aplicativos (10-18 anos)
                </h4>
                <p className="text-pink-600 font-semibold">Clique para ler →</p>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="card group"
            >
              <a href="https://techbreak.ig.com.br/evento-busca-voluntarios-para-formar-nova-geracao-de-mulheres-na-tecnologia/" target="_blank" rel="noopener noreferrer">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <Image
                    src="/assets/img/midia/img4.png"
                    alt="Evento busca voluntários"
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Evento busca voluntários para formar nova geração de mulheres na tecnologia
                </h4>
                <p className="text-pink-600 font-semibold">Clique para ler →</p>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="card group"
            >
              <a href="https://brasilescola.uol.com.br/noticias/usp-sao-carlos-oferece-curso-gratuitogarotas-aprenderem-aplicativos/3123900.html" target="_blank" rel="noopener noreferrer">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <Image
                    src="/assets/img/midia/img5.png"
                    alt="Curso gratuito USP"
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  USP São Carlos oferece curso gratuito de aplicativos para garotas
                </h4>
                <p className="text-pink-600 font-semibold">Clique para ler →</p>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="card group"
            >
              <a href="https://www.jornalrmc.com.br/ajude-a-formar-a-proxima-geracao-de-mulheres-lideres-em-tecnologia/" target="_blank" rel="noopener noreferrer">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <Image
                    src="/assets/img/midia/img6.png"
                    alt="Formar mulheres líderes"
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Ajude a formar a próxima geração de mulheres líderes em tecnologia
                </h4>
                <p className="text-pink-600 font-semibold">Clique para ler →</p>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section bg-white">
        <div className="container">
          <div className="section-title">
            <h2>FAQ</h2>
            <p>PERGUNTAS FREQUENTES</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: 'O que é o GRACE?',
                answer:
                  'O GRACE é um projeto de extensão do ICMC-USP dedicado a promover a inclusão de meninas e mulheres nas áreas de tecnologia e ciências exatas.',
              },
              {
                question: 'Quem pode participar?',
                answer:
                  'Nossas atividades são voltadas principalmente para meninas e mulheres de todas as idades, desde o ensino fundamental até o superior.',
              },
              {
                question: 'As atividades são gratuitas?',
                answer: 'Sim! Todas as nossas atividades são totalmente gratuitas.',
              },
              {
                question: 'Como posso participar?',
                answer:
                  'Fique atenta às nossas redes sociais e site para saber sobre inscrições e eventos. Entre em contato conosco para mais informações.',
              },
            ].map((faq, index) => (
              <motion.details
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 cursor-pointer group"
              >
                <summary className="font-bold text-lg text-gray-900 group-hover:text-pink-600 transition-colors">
                  {faq.question}
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section bg-white">
        <div className="container">
          <div className="section-title">
            <h2>CONTATO</h2>
            <p>FALE CONOSCO</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Endereço */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center text-white text-2xl shadow-lg">
                  <FaMapMarkerAlt />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Endereço</h3>
                <p className="text-gray-600">
                  ICMC-USP - Instituto de Ciências Matemáticas e de Computação<br />
                  Av. Trabalhador São-carlense, 400<br />
                  Centro, São Carlos - SP, 13566-590
                </p>
              </div>
            </motion.div>

            {/* Telefone */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center text-white text-2xl shadow-lg">
                  <FaPhone />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Telefone</h3>
                <p className="text-gray-600">(16) 3373-9700</p>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center text-white text-2xl shadow-lg">
                  <FaEnvelope />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">
                  <a href="mailto:grace@icmc.usp.br" className="hover:text-pink-600 transition-colors">
                    grace@icmc.usp.br
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

