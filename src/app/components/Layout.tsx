import { Outlet, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MapPin, Instagram, Facebook } from 'lucide-react';
import CookieBanner from './CookieBanner';

export default function Layout() {
  const location = useLocation();
  const isFunilPage = location.pathname === '/funil-conversao' || location.pathname === '/estrategia-notoriedade';
  const [isScrolled, setIsScrolled] = useState(isFunilPage);
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const isServicePage = location.pathname.startsWith('/servicos/') || location.pathname === '/servicos' || location.pathname === '/ebooks' || location.pathname === '/funil-conversao' || location.pathname === '/estrategia-notoriedade';

  useEffect(() => {
    const handleScroll = () => {
      if (isFunilPage) {
        setIsScrolled(true);
      } else {
        setIsScrolled(window.scrollY > 50);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isFunilPage]);

  // Smooth scrolling for anchor links
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="bg-[var(--warm-white)] overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-16 py-5 backdrop-blur-md transition-all duration-500 max-md:px-6 ${
        isScrolled
          ? 'bg-[rgba(253,249,246,0.95)] border-b border-[rgba(180,120,90,0.18)] py-4 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}>
        <Link to="/" className={`font-[var(--font-display)] text-[2rem] font-light tracking-[0.28em] no-underline uppercase transition-colors duration-300 ${
          isScrolled ? 'text-[var(--espresso)]' : 'text-[var(--warm-white)]'
        }`}>
          Mi<span className={`transition-colors duration-300 ${isScrolled ? 'text-[var(--terra)]' : 'text-[var(--rose-sand)]'}`}>té</span>
        </Link>

        <ul className="flex items-center gap-10 list-none max-md:hidden">
          <li>
            <Link to="/" className={`text-[0.7rem] tracking-[0.16em] uppercase no-underline font-medium transition-colors ${
              isScrolled ? 'text-[var(--espresso)] hover:text-[var(--terra)]' : 'text-[rgba(253,249,246,0.85)] hover:text-[var(--rose-sand)]'
            }`}>Home</Link>
          </li>
          <li>
            <Link to="/sobre-nos" className={`text-[0.7rem] tracking-[0.16em] uppercase no-underline font-medium transition-colors ${
              isScrolled ? 'text-[var(--espresso)] hover:text-[var(--terra)]' : 'text-[rgba(253,249,246,0.85)] hover:text-[var(--rose-sand)]'
            }`}>Sobre Nós</Link>
          </li>

          {/* Dropdown Procedimentos */}
          <li
            className="relative"
            onMouseEnter={() => setShowServicesMenu(true)}
            onMouseLeave={() => setShowServicesMenu(false)}
          >
            <Link to="/servicos" className={`text-[0.7rem] tracking-[0.16em] uppercase font-medium transition-colors flex items-center gap-1 no-underline ${
              isScrolled ? 'text-[var(--espresso)] hover:text-[var(--terra)]' : 'text-[rgba(253,249,246,0.85)] hover:text-[var(--rose-sand)]'
            }`}>Procedimentos</Link>

            {showServicesMenu && (
              <div className="absolute top-full left-0 mt-2 bg-[var(--warm-white)] rounded-[6px] shadow-[0_8px_24px_rgba(0,0,0,0.12)] py-2 min-w-[240px] border border-[rgba(180,120,90,0.08)]">
                <Link to="/servicos/sobrancelhas" className="block px-5 py-2.5 text-[0.75rem] text-[var(--text-mid)] hover:bg-[var(--cream)] hover:text-[var(--terra)] transition-colors">
                  Micropigmentação Sobrancelhas
                </Link>
                <Link to="/servicos/labios" className="block px-5 py-2.5 text-[0.75rem] text-[var(--text-mid)] hover:bg-[var(--cream)] hover:text-[var(--terra)] transition-colors">
                  Micropigmentação Lábios
                </Link>
                <Link to="/servicos/protocolos-rosto" className="block px-5 py-2.5 text-[0.75rem] text-[var(--text-mid)] hover:bg-[var(--cream)] hover:text-[var(--terra)] transition-colors">
                  Protocolos de Rosto
                </Link>
                <Link to="/servicos/lifting-pestanas" className="block px-5 py-2.5 text-[0.75rem] text-[var(--text-mid)] hover:bg-[var(--cream)] hover:text-[var(--terra)] transition-colors">
                  Lifting de Pestanas
                </Link>
              </div>
            )}
          </li>

          <li>
            <Link to="/ebooks" className={`text-[0.7rem] tracking-[0.16em] uppercase no-underline font-medium transition-colors ${
              isScrolled ? 'text-[var(--espresso)] hover:text-[var(--terra)]' : 'text-[rgba(253,249,246,0.85)] hover:text-[var(--rose-sand)]'
            }`}>E-books</Link>
          </li>
          <li>
            <Link to="/#contacto" className={`text-[0.7rem] tracking-[0.16em] uppercase no-underline font-medium transition-colors ${
              isScrolled ? 'text-[var(--espresso)] hover:text-[var(--terra)]' : 'text-[rgba(253,249,246,0.85)] hover:text-[var(--rose-sand)]'
            }`}>Contacto</Link>
          </li>
        </ul>

        <div className="flex items-center gap-6">
          <div className={`flex items-center gap-2 text-[0.68rem] tracking-[0.1em] uppercase max-md:hidden transition-colors ${
            isScrolled ? 'text-[var(--text-light)]' : 'text-[rgba(253,249,246,0.7)]'
          }`}>
            <MapPin className="w-3 h-3" />
            Maia, Porto
          </div>

          <div className="flex gap-3 items-center max-md:hidden">
            <a
              href="https://www.instagram.com/mite_microeesteticafacial/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={`flex items-center justify-center w-[30px] h-[30px] border rounded-full transition-all ${
                isScrolled
                  ? 'border-[rgba(180,120,90,0.35)] text-[var(--terra)] hover:bg-[var(--terra)] hover:text-white'
                  : 'border-[rgba(253,249,246,0.35)] text-[var(--warm-white)] hover:bg-[var(--warm-white)] hover:text-[var(--espresso)]'
              }`}
            >
              <Instagram className="w-[13px] h-[13px]" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className={`flex items-center justify-center w-[30px] h-[30px] border rounded-full transition-all ${
                isScrolled
                  ? 'border-[rgba(180,120,90,0.35)] text-[var(--terra)] hover:bg-[var(--terra)] hover:text-white'
                  : 'border-[rgba(253,249,246,0.35)] text-[var(--warm-white)] hover:bg-[var(--warm-white)] hover:text-[var(--espresso)]'
              }`}
            >
              <Facebook className="w-[13px] h-[13px]" />
            </a>
          </div>

          <Link
            to="/#contacto"
            className={`font-[var(--font-body)] text-[0.68rem] font-medium tracking-[0.18em] uppercase border-none px-6 py-[0.65rem] cursor-pointer transition-all whitespace-nowrap ${
              isScrolled
                ? 'text-[var(--warm-white)] bg-[var(--espresso)] hover:bg-[var(--mocha)]'
                : 'text-[var(--espresso)] bg-[var(--rose-sand)] hover:bg-[var(--champagne)]'
            }`}
          >
            Marcar Consulta
          </Link>
        </div>
      </nav>

      {/* Page Content */}
      <Outlet />

      {/* Footer */}
      <footer className={`bg-[var(--text-dark)] px-16 pb-8 max-md:px-6 ${
        isServicePage ? 'pt-32 max-md:pt-28' : 'pt-16'
      }`}>
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12 pb-12 border-b border-[rgba(253,249,246,0.1)] max-md:grid-cols-2">
          <div>
            <div className="font-[var(--font-display)] text-[2rem] font-light tracking-[0.28em] text-[var(--warm-white)] uppercase mb-4 block">
              Mi<span className="text-[var(--rose-sand)]">té</span>
            </div>
            <p className="text-[0.8rem] text-[rgba(253,249,246,0.45)] leading-[1.85] max-w-[280px] mb-6">
              Especialistas em micropigmentação de sobrancelhas, lifting de pestanas,
              micropigmentação labial e limpeza de pele. Realce a sua beleza natural
              com segurança e profissionalismo.
            </p>
            <div className="flex gap-[0.65rem]">
              <a href="https://www.instagram.com/mite_microeesteticafacial/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 border border-[rgba(253,249,246,0.15)] rounded-full text-[rgba(253,249,246,0.5)] hover:border-[var(--rose-sand)] hover:text-[var(--rose-sand)] transition-all">
                <Instagram className="w-[13px] h-[13px]" />
              </a>
              <a href="#" className="flex items-center justify-center w-8 h-8 border border-[rgba(253,249,246,0.15)] rounded-full text-[rgba(253,249,246,0.5)] hover:border-[var(--rose-sand)] hover:text-[var(--rose-sand)] transition-all">
                <Facebook className="w-[13px] h-[13px]" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[0.65rem] font-medium tracking-[0.18em] uppercase text-[var(--rose-sand)] mb-5">
              Navegação
            </h4>
            <ul className="list-none flex flex-col gap-[0.6rem]">
              <li><Link to="/" className="text-[0.8rem] text-[rgba(253,249,246,0.5)] no-underline hover:text-[var(--rose-sand)] transition-colors">Home</Link></li>
              <li><Link to="/sobre-nos" className="text-[0.8rem] text-[rgba(253,249,246,0.5)] no-underline hover:text-[var(--rose-sand)] transition-colors">Sobre Nós</Link></li>
              <li><Link to="/servicos" className="text-[0.8rem] text-[rgba(253,249,246,0.5)] no-underline hover:text-[var(--rose-sand)] transition-colors">Serviços</Link></li>
              <li><Link to="/ebooks" className="text-[0.8rem] text-[rgba(253,249,246,0.5)] no-underline hover:text-[var(--rose-sand)] transition-colors">E-books</Link></li>
              <li><Link to="/#contacto" className="text-[0.8rem] text-[rgba(253,249,246,0.5)] no-underline hover:text-[var(--rose-sand)] transition-colors">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[0.65rem] font-medium tracking-[0.18em] uppercase text-[var(--rose-sand)] mb-5">
              Serviços
            </h4>
            <ul className="list-none flex flex-col gap-[0.6rem]">
              <li><Link to="/servicos/sobrancelhas" className="text-[0.8rem] text-[rgba(253,249,246,0.5)] no-underline hover:text-[var(--rose-sand)] transition-colors">Micropigmentação Sobrancelhas</Link></li>
              <li><Link to="/servicos/labios" className="text-[0.8rem] text-[rgba(253,249,246,0.5)] no-underline hover:text-[var(--rose-sand)] transition-colors">Micropigmentação Lábios</Link></li>
              <li><Link to="/servicos/protocolos-rosto" className="text-[0.8rem] text-[rgba(253,249,246,0.5)] no-underline hover:text-[var(--rose-sand)] transition-colors">Protocolos de Rosto</Link></li>
              <li><Link to="/servicos/lifting-pestanas" className="text-[0.8rem] text-[rgba(253,249,246,0.5)] no-underline hover:text-[var(--rose-sand)] transition-colors">Lifting de Pestanas</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[0.65rem] font-medium tracking-[0.18em] uppercase text-[var(--rose-sand)] mb-5">
              Contacto
            </h4>
            <ul className="list-none flex flex-col gap-[0.6rem]">
              <li className="text-[0.8rem] text-[rgba(253,249,246,0.5)]">+351 912 345 678</li>
              <li className="text-[0.8rem] text-[rgba(253,249,246,0.5)]">contato@mite-estetica.pt</li>
              <li className="text-[0.8rem] text-[rgba(253,249,246,0.5)]">Rua Exemplo, 123<br />4425-000 Maia</li>
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 flex-wrap">
          <p className="text-[0.7rem] text-[rgba(253,249,246,0.28)] leading-[1.5]">
            © 2024 MITÉ — Micro e Estética Facial. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[0.7rem] text-[rgba(253,249,246,0.28)] no-underline hover:text-[var(--rose-sand)] transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-[0.7rem] text-[rgba(253,249,246,0.28)] no-underline hover:text-[var(--rose-sand)] transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </footer>

      {/* Cookie Banner */}
      <CookieBanner />
    </div>
  );
}
