import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-4xl font-bold mb-3 tracking-wide">GRACE-USP</h3>
          <p className="text-lg text-white/80 italic mb-10">Grupo de Alunas de Ciências Exatas</p>
          
          {/* Social Links */}
          <div className="flex justify-center gap-3 mb-12">
            <a
              href="https://x.com/icmc_usp"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 rounded-full flex items-center justify-center text-xl transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
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
              href="https://www.linkedin.com/search/results/all/?heroEntityKey=urn%3Ali%3Aorganization%3A64666623&keywords=Grace%20USP&origin=ENTITY_SEARCH_HOME_HISTORY&sid=TKo"
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
            <p className="text-white/60 text-sm">
              Copyright <strong className="text-white font-semibold">GRACE-USP</strong> All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

