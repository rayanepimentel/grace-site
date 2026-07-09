'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();

  // Clear active section immediately when pathname changes
  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection('');
    }
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Detect active section on homepage using IntersectionObserver, which
  // (unlike a scrollY+offset calculation) keeps working correctly for
  // short sections near the bottom of the page where scroll gets clamped.
  useEffect(() => {
    if (pathname !== '/') return;

    const sections = ['hero', 'about', 'equipe-cta', 'services', 'acoes', 'results', 'portfolio', 'midia', 'faq', 'contact'];
    const elements = sections
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-96px 0px -70% 0px', threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const activePill =
    'px-4 py-2 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-md shadow-pink-500/30';
  const inactiveLink = 'text-gray-800 hover:text-pink-600';
  const navItemClass = (isActive: boolean) => (isActive ? activePill : inactiveLink);

  const isHomeActive = pathname === '/' && activeSection === 'hero';
  const isQuemSomosActive =
    (pathname === '/' && ['about', 'equipe-cta', 'services'].includes(activeSection)) ||
    pathname === '/equipe';
  const isAcoesActive =
    (pathname === '/' && activeSection === 'acoes') ||
    ['/robotica-escola', '/ciencia-dados', '/escola-web', '/pensamento-computacional'].includes(pathname);
  const isMateriaisActive = pathname === '/materiais';
  const isPesquisaMidiaActive =
    pathname === '/' && ['results', 'portfolio', 'midia'].includes(activeSection);
  const isParticipeActive = pathname === '/participe';
  const isFaqActive = pathname === '/' && activeSection === 'faq';
  const isContactActive = pathname === '/' && activeSection === 'contact';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/img/grace-logo.jpg"
              alt="GRACE Logo"
              width={140}
              height={70}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-6">
            <Link
              href="/#hero"
              className={`nav-link text-sm font-semibold transition-all duration-300 ${navItemClass(isHomeActive)}`}
            >
              HOME
            </Link>

            {/* Quem Somos Dropdown */}
            <div className="relative group">
              <button className={`nav-link text-sm font-semibold transition-all duration-300 flex items-center gap-1 ${navItemClass(isQuemSomosActive)}`}>
                QUEM SOMOS <FiChevronDown className="text-xs" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100">
                <Link href="/#about" className="dropdown-item block px-4 py-3 text-sm text-gray-700 hover:text-pink-600 transition-colors">
                  Sobre Nós
                </Link>
                <Link href="/equipe" className="dropdown-item block px-4 py-3 text-sm text-gray-700 hover:text-pink-600 transition-colors">
                  Equipe
                </Link>
                <Link href="/#services" className="dropdown-item block px-4 py-3 text-sm text-gray-700 hover:text-pink-600 transition-colors">
                  Parcerias
                </Link>
              </div>
            </div>

            {/* Ações Dropdown */}
            <div className="relative group">
              <button className={`nav-link text-sm font-semibold transition-all duration-300 flex items-center gap-1 ${navItemClass(isAcoesActive)}`}>
                AÇÕES <FiChevronDown className="text-xs" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-72 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100">
                <Link href="/robotica-escola" className="dropdown-item block px-4 py-3 text-sm text-gray-700 hover:text-pink-600 transition-colors">
                  ROBÓTICA NA ESCOLA
                </Link>
                <Link href="/ciencia-dados" className="dropdown-item block px-4 py-3 text-sm text-gray-700 hover:text-pink-600 transition-colors">
                  CIÊNCIA DE DADOS PARA ENSINO MÉDIO
                </Link>
                <Link href="/escola-web" className="dropdown-item block px-4 py-3 text-sm text-gray-700 hover:text-pink-600 transition-colors">
                  ESCOLA DE PROGRAMAÇÃO WEB
                </Link>
                <Link href="/pensamento-computacional" className="dropdown-item block px-4 py-3 text-sm text-gray-700 hover:text-pink-600 transition-colors">
                  PENSAMENTO COMPUTACIONAL
                </Link>
              </div>
            </div>

            {/* Tech School Dropdown */}
            <div className="relative group">
              <button className="nav-link text-sm font-semibold text-gray-800 hover:text-pink-600 transition-colors flex items-center gap-1">
                TECH SCHOOL <FiChevronDown className="text-xs" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100">
                <a href="https://grace.icmc.usp.br/techschool2026/index.html" className="dropdown-item block px-4 py-3 text-sm text-gray-700 hover:text-pink-600 transition-colors" target="_blank" rel="noopener noreferrer">
                  TECHSCHOOL 2026
                </a>
                <a href="https://grace.icmc.usp.br/techschool2025/index.html" className="dropdown-item block px-4 py-3 text-sm text-gray-700 hover:text-pink-600 transition-colors" target="_blank" rel="noopener noreferrer">
                  TECHSCHOOL 2025
                </a>
                <a href="https://grace.icmc.usp.br/techschool2024/index.html" className="dropdown-item block px-4 py-3 text-sm text-gray-700 hover:text-pink-600 transition-colors" target="_blank" rel="noopener noreferrer">
                  TECHSCHOOL 2024
                </a>
                <a href="https://grace.icmc.usp.br/techschool2023/index.html" className="dropdown-item block px-4 py-3 text-sm text-gray-700 hover:text-pink-600 transition-colors" target="_blank" rel="noopener noreferrer">
                  TECHSCHOOL 2023
                </a>
                <a href="https://grace.icmc.usp.br/techschool2022/index.html" className="dropdown-item block px-4 py-3 text-sm text-gray-700 hover:text-pink-600 transition-colors" target="_blank" rel="noopener noreferrer">
                  TECHSCHOOL 2022
                </a>
              </div>
            </div>

            {/* Materiais Dropdown */}
            {/* <div className="relative group">
              <button className={`nav-link text-sm font-semibold transition-all duration-300 flex items-center gap-1 ${navItemClass(isMateriaisActive)}`}>
                MATERIAIS <FiChevronDown className="text-xs" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100">
                <Link href="/materiais#apostilas" className="dropdown-item block px-4 py-3 text-sm text-gray-700 hover:text-pink-600 transition-colors">
                  APOSTILAS
                </Link>
                <Link href="/materiais#videoaulas" className="dropdown-item block px-4 py-3 text-sm text-gray-700 hover:text-pink-600 transition-colors">
                  VIDEOAULAS
                </Link>
              </div>
            </div> */}

            {/* Pesquisa & Mídia Dropdown */}
            <div className="relative group">
              <button className={`nav-link text-sm font-semibold transition-all duration-300 flex items-center gap-1 ${navItemClass(isPesquisaMidiaActive)}`}>
                PESQUISA & MÍDIA <FiChevronDown className="text-xs" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100">
                <Link href="/#results" className="dropdown-item block px-4 py-3 text-sm text-gray-700 hover:text-pink-600 transition-colors">
                  RESULTADOS
                </Link>
                <Link href="/#portfolio" className="dropdown-item block px-4 py-3 text-sm text-gray-700 hover:text-pink-600 transition-colors">
                  PESQUISAS
                </Link>
                <Link href="/#midia" className="dropdown-item block px-4 py-3 text-sm text-gray-700 hover:text-pink-600 transition-colors">
                  GRACE NA MÍDIA
                </Link>
              </div>
            </div>

            <Link
              href="/participe"
              className={`nav-link text-sm font-semibold transition-all duration-300 ${navItemClass(isParticipeActive)}`}
            >
              PARTICIPE
            </Link>
            <Link
              href="/#faq"
              className={`nav-link text-sm font-semibold transition-all duration-300 ${navItemClass(isFaqActive)}`}
            >
              FAQ
            </Link>
            <Link
              href="/#contact"
              className={`nav-link text-sm font-semibold transition-all duration-300 ${navItemClass(isContactActive)}`}
            >
              CONTATO
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden text-2xl text-gray-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-2">
              <Link href="/#hero" className="mobile-nav-link block" onClick={closeMobileMenu}>
                HOME
              </Link>

              <button
                onClick={() => toggleDropdown('quemSomos')}
                className="mobile-nav-link flex items-center justify-between"
              >
                QUEM SOMOS <FiChevronDown />
              </button>
              {openDropdown === 'quemSomos' && (
                <div className="pl-4 space-y-2">
                  <Link href="/#about" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                    Sobre Nós
                  </Link>
                  <Link href="/equipe" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                    Equipe
                  </Link>
                  <Link href="/#services" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                    Parcerias
                  </Link>
                </div>
              )}

              <button
                onClick={() => toggleDropdown('acoes')}
                className="mobile-nav-link flex items-center justify-between"
              >
                AÇÕES <FiChevronDown />
              </button>
              {openDropdown === 'acoes' && (
                <div className="pl-4 space-y-2">
                  <Link href="/robotica-escola" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                    ROBÓTICA NA ESCOLA
                  </Link>
                  <Link href="/ciencia-dados" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                    CIÊNCIA DE DADOS
                  </Link>
                  <Link href="/escola-web" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                    ESCOLA DE PROGRAMAÇÃO WEB
                  </Link>
                  <Link href="/pensamento-computacional" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                    PENSAMENTO COMPUTACIONAL
                  </Link>
                </div>
              )}

              <Link href="/participe" className="mobile-nav-link block" onClick={closeMobileMenu}>
                PARTICIPE
              </Link>
              <Link href="/#faq" className="mobile-nav-link block" onClick={closeMobileMenu}>
                FAQ
              </Link>
              <Link href="/#contact" className="mobile-nav-link block" onClick={closeMobileMenu}>
                CONTATO
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

