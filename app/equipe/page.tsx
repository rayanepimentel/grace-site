'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

type Social = {
  linkedin?: string;
  instagram?: string;
  github?: string;
  behance?: string;
  lattes?: string;
};

type TeamMember = {
  name: string;
  team: string;
  role: string;
  image?: string;
  bio?: string;
  social?: Social;
};

const teamMembers: TeamMember[] = [
  // Conselho Diretor e Lideranças
  {
    name: 'Lina Garcés',
    team: 'Conselho Diretor',
    role: 'Coordenadora',
    image: '/assets/img/colaboradores/linaGarces.png',
    bio: 'Professora assistente do ICMC-USP. Coordenadora do GRACE.',
    social: {
      linkedin: 'https://br.linkedin.com/in/linagarcesphd',
    },
  },
  {
    name: 'Brena Marques',
    team: 'Financeiro',
    role: 'Liderança',
    image: '/assets/img/colaboradores/brenaMarques.png',
    social: {
      linkedin: 'https://linkedin.com/in/brenamarques',
      instagram: 'https://instagram.com/brena.maarques',
    },
  },
  {
    name: 'Rayane Pimentel',
    team: 'Ensino',
    role: 'Liderança',
    image: '/assets/img/colaboradores/rayanePimentel.png',
    social: {
      linkedin: 'https://www.linkedin.com/in/rayanepimentel/',
      instagram: 'https://www.instagram.com/ray.pwd/',
      lattes: 'http://lattes.cnpq.br/3428448311495994'
    },
  },
  {
    name: 'Thaís Laurino',
    team: 'RH',
    role: 'Liderança',
    image: '/assets/img/colaboradores/thaisL.png',
    social: {
      linkedin: 'https://linkedin.com/in/thaislauriano',
      github: 'https://github.com/thaislauriano31',
      lattes: 'http://lattes.cnpq.br/0442639037695860'
    },
  },
  {
    name: 'Isabelle Milena',
    team: 'Marketing',
    role: 'Liderança',
    image: '/assets/img/colaboradores/isabeleMilena.png',
    social: {
      linkedin: 'https://www.linkedin.com/in/isabelle-milena-289a592b7',
      instagram: 'https://www.instagram.com/whos_.milena',
      lattes: 'http://lattes.cnpq.br/3959166119864044',
    },
  },

  // Ensino
  {
    name: 'João Antônio Misson Milhorim',
    team: 'Ensino',
    role: 'Voluntário',
    image: '/assets/img/colaboradores/joaoMisson.jpeg',
    social: {
      linkedin: 'https://www.linkedin.com/in/joaomisson/',
      instagram: 'https://www.instagram.com/joao_misson/',
    },
  },
  {
    name: 'Davi Andrade',
    team: 'Ensino',
    role: 'Voluntário',
    image: '/assets/img/colaboradores/daviAndrade.png',
    social: {
      linkedin: 'https://www.linkedin.com/in/davi-andrade-505728353/',
      instagram: 'https://www.instagram.com/davi_anddrade/',
    },
  },
  {
    name: 'Maria Luiza',
    team: 'Ensino',
    role: 'Voluntária',
    social: {
      linkedin: 'https://linkedin.com/in/maria-sinesio',
      github: 'https://github.com/MariaSinesio',
    },
  },
  {
    name: 'Giovanne Tomaszewski Grecco',
    team: 'Ensino',
    role: 'Voluntário',
    image: '/assets/img/colaboradores/giovanneGrecco.png',
  },
  {
    name: 'Luana Vitorino',
    team: 'Ensino',
    role: 'Voluntária',
    image: '/assets/img/colaboradores/luanaVitorino.png',
    social: {
      linkedin: 'https://www.linkedin.com/in/luana-assuncao-vitorino/',
      github: 'https://github.com/luanavitorino07',
      lattes: 'https://lattes.cnpq.br/7344453023281909'
    },
  },

  // RH
  {
    name: 'Rebeca Maia',
    team: 'RH',
    role: 'Voluntária',
    image: '/assets/img/colaboradores/rebecaMaia.png',
    social: {
      linkedin: 'https://www.linkedin.com/in/rebeca-maia-pontes-79b35b96',
      instagram: 'https://www.instagram.com/rebeca.maia3',
    },
  },
  {
    name: 'Darla Garcia',
    team: 'RH',
    role: 'Voluntária',
    image: '/assets/img/colaboradores/darlaGarcia.png',
    social: {
      linkedin: 'https://www.linkedin.com/in/darla-garcia-alves-4a944821a/',
      instagram: 'https://www.instagram.com/darlaa.garcia/',
      github: 'https://github.com/darlagalves',
      lattes: 'http://lattes.cnpq.br/1984661738360837'
    },
  },

  // Marketing
  {
    name: 'Natália Oliveira',
    team: 'Marketing',
    role: 'Voluntária',
    image: '/assets/img/colaboradores/nataliaOliveira.png',
    social: {
      linkedin: 'https://www.linkedin.com/in/nat%C3%A1lia-oliveira-34b924410',
      instagram: 'https://www.instagram.com/nataliaoliveira.design',
      behance: 'https://www.behance.net/nataliaoliveiraa',
    },
  },
  {
    name: 'Taís Daniely',
    team: 'Marketing',
    role: 'Voluntária',
      image: '/assets/img/colaboradores/thaisDani.png',
    social: {
      linkedin: 'https://br.linkedin.com/in/tais-stefani-4a6226378',
      instagram: 'https://www.instagram.com/tais._._',
      lattes: 'http://lattes.cnpq.br/5092235851539645',
    },
  },
  {
    name: 'Guilherme Eid Godoy',
    team: 'Marketing',
    role: 'Voluntário',
      image: '/assets/img/colaboradores/guilhermeGodoy.png',
    social: {
      linkedin: 'https://www.linkedin.com/in/guilherme-eid-godoy-456344313?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      instagram: 'https://www.instagram.com/guilhermeeid?igsh=dGFxM2thZGFxeWI4',
      github: 'https://github.com/guilhermeeid',
      lattes: 'http://lattes.cnpq.br/3573746900379250',
    },
  },
];

const categories = [
  { id: 'todos', label: 'Todos' },
  { id: 'Conselho Diretor', label: 'Conselho Diretor' },
  { id: 'Ensino', label: 'Ensino' },
  { id: 'RH', label: 'RH' },
  { id: 'Marketing', label: 'Marketing' },
  { id: 'Financeiro', label: 'Financeiro' },
];

const teamColors: Record<string, string> = {
  'Conselho Diretor': 'bg-purple-100 text-purple-700',
  Ensino: 'bg-blue-100 text-blue-700',
  RH: 'bg-pink-100 text-pink-700',
  Marketing: 'bg-orange-100 text-orange-700',
  Financeiro: 'bg-yellow-100 text-yellow-700',
};

function Avatar({ name, image }: { name: string; image?: string }) {
  const initial = name.charAt(0).toUpperCase();

  if (image) {
    return (
      <div className="relative w-36 h-36 mx-auto mb-4">
        <Image
          src={image}
          alt={name}
          fill
          className="rounded-full object-cover border-4 border-gray-100"
          unoptimized={image.startsWith('http')}
        />
      </div>
    );
  }

  return (
    <div className="w-36 h-36 mx-auto mb-4 rounded-full border-4 border-gray-100 bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center">
      <span className="text-4xl font-bold text-white">{initial}</span>
    </div>
  );
}

function SocialIcons({ social }: { social?: Social }) {
  if (!social) return null;

  const links = [
    {
      key: 'linkedin',
      url: social.linkedin,
      label: 'LinkedIn',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      key: 'instagram',
      url: social.instagram,
      label: 'Instagram',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      key: 'github',
      url: social.github,
      label: 'GitHub',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      ),
    },
    {
      key: 'behance',
      url: social.behance,
      label: 'Behance',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029L23.726 17zm-8.738-4h4.654c-.118-1.615-1.106-2.194-2.322-2.194-1.316 0-2.145.764-2.332 2.194zM13 11.269C12.336 10.49 11.27 10 9.472 10H4V21h5.422c1.961 0 3.574-.611 4.341-1.917.493-.865.578-1.921.578-2.7 0-.99-.211-1.988-.906-2.614.441-.37.79-.999.565-2.5zm-5.58 1.397h2.322c.797 0 1.372.219 1.372 1.02 0 .786-.539 1.06-1.371 1.06H7.42v-2.08zm0 4h2.322c.918 0 1.593.205 1.593 1.17 0 .955-.665 1.17-1.593 1.17H7.42v-2.34z" />
        </svg>
      ),
    },
    {
      key: 'lattes',
      url: social.lattes,
      label: 'Currículo Lattes',
      icon: <FaGraduationCap className="w-5 h-5" />,
    },
  ].filter((l) => !!l.url);

  if (links.length === 0) return null;

  return (
    <div className="flex justify-center gap-3 mt-3">
      {links.map((l) => (
        <a
          key={l.key}
          href={l.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={l.label}
          className="text-gray-400 hover:text-pink-500 transition-colors duration-200"
        >
          {l.icon}
        </a>
      ))}
    </div>
  );
}

export default function EquipePage() {
  const [activeFilter, setActiveFilter] = useState('todos');

  const filteredMembers =
    activeFilter === 'todos'
      ? teamMembers
      : teamMembers.filter((member) => member.team === activeFilter);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#fef3f8] to-[#f8f0ff]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">Nossa Equipe</h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
              Conheça as pessoas dedicadas que fazem o GRACE acontecer
            </p>
          </motion.div>
        </div>

        {/* Wave SVG */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-16 md:h-24"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
          >
            <defs>
              <path
                id="wave-path"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="opacity-50">
              <use xlinkHref="#wave-path" x="50" y="3" fill="rgba(255,255,255,0.7)" />
            </g>
          </svg>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-pink-400 to-purple-400 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-pink-600 hover:text-pink-600'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
              >
                <Avatar name={member.name} image={member.image} />

                <span
                  className={`inline-block self-center text-xs font-semibold px-3 py-1 rounded-full mb-2 ${
                    teamColors[member.team] ?? 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {member.team}
                </span>

                <h3 className="text-lg font-bold text-gray-900 mb-1 leading-snug">{member.name}</h3>
                <p className="text-pink-600 font-semibold text-sm mb-2">{member.role}</p>

                {member.bio && (
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mt-1">{member.bio}</p>
                )}

                <div className="mt-auto">
                  <SocialIcons social={member.social} />
                </div>
              </motion.div>
            ))}
          </div>

          {filteredMembers.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Nenhum membro encontrado nesta categoria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Quer Fazer Parte da Nossa Equipe?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Estamos sempre em busca de pessoas apaixonadas por educação e tecnologia para se juntar ao GRACE.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300"
            >
              Entre em Contato
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
