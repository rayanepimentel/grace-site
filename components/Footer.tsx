import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-4xl font-bold mb-3 tracking-wide">GRACE-USP</h3>
          <p className="text-lg text-white/80 italic mb-10">Grupo de Alunas de Ciências Exatas</p>
          
          {/* Social Links */}
          <div className="flex justify-center gap-3 mb-12">
            {/* <a
              href="https://x.com/icmc_usp"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 rounded-full flex items-center justify-center text-xl transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a> */}
            <a
              href="https://www.facebook.com/grace.icmc.usp/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 rounded-full flex items-center justify-center text-xl transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/grace.icmc.usp/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 rounded-full flex items-center justify-center text-xl transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/grace-usp/about/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 rounded-full flex items-center justify-center text-xl transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 pt-8">
            <p className="text-white/60 text-sm mb-2">
              Copyright <strong className="text-white font-semibold">GRACE-USP</strong> All Rights Reserved
            </p>
            <p className="text-white/40 text-xs">
              Site desenvolvido por{' '}
              <a
                href="https://github.com/GabrielaMarculino/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition-colors"
              >
                Gabriela Marculino
              </a>
              ,{' '}
              <a
                href="https://www.linkedin.com/in/rayanepimentel/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition-colors"
              >
                Rayane Pimentel
              </a>{' '}
              e{' '}
              <a
                href="https://linkedin.com/in/maria-sinesio"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition-colors"
              >
                Maria Luiza
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

