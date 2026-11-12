import { useState } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';
import { DELIVERY_LINKS } from '../data/links';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#EDE0D4] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark with Mascot */}
        <a href="#" className="flex items-center gap-3 group shrink-0 focus-visible:outline-2 focus-visible:outline-[#D72D38] rounded-lg">
          <img
            src="/assets/aistudio/arcanjos-logo-official.png"
            alt="Arcanjo's Burguers Logo"
            className="w-12 h-12 object-contain drop-shadow-xs group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col">
            <span className="font-heading text-2xl font-bold tracking-tight text-[#D72D38] leading-none">
              ARCANJO'S
            </span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#F46036] mt-0.5">
              Burguers Artesanais
            </span>
          </div>
        </a>

        {/* Zone 2: 4-5 concise single-line nav links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#5E4E51]">
          <a
            href="#cardapio"
            className="hover:text-[#D72D38] transition-colors whitespace-nowrap shrink-0"
          >
            Cardápio
          </a>
          <a
            href="#combos"
            className="hover:text-[#D72D38] transition-colors whitespace-nowrap shrink-0"
          >
            Combos
          </a>
          <a
            href="#bastidores"
            className="hover:text-[#D72D38] transition-colors whitespace-nowrap shrink-0"
          >
            Bastidores
          </a>
          <a
            href="#historia"
            className="hover:text-[#D72D38] transition-colors whitespace-nowrap shrink-0"
          >
            Nossa História
          </a>
          <a
            href="#localizacao"
            className="hover:text-[#D72D38] transition-colors whitespace-nowrap shrink-0"
          >
            Onde Estamos
          </a>
        </nav>

        {/* Zone 3: Direct Delivery Ordering (iFood & 99Food) */}
        <div className="flex items-center gap-2.5 shrink-0">
          <a
            href={DELIVERY_LINKS.ifood}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 bg-[#EA1D2C] hover:bg-[#C91422] text-white text-xs sm:text-sm font-heading font-bold rounded-xl shadow-xs transition-transform active:scale-95 whitespace-nowrap"
            title="Peça no iFood"
          >
            <span>🛵</span>
            <span>iFood</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>

          <a
            href={DELIVERY_LINKS.ninetyNineFood}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#FF9600] hover:bg-[#E58300] text-[#1E1214] text-xs sm:text-sm font-heading font-bold rounded-xl shadow-xs transition-transform active:scale-95 whitespace-nowrap"
            title="Peça no 99Food"
          >
            <span>🍔</span>
            <span>99Food</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#5E4E51] hover:text-[#D72D38] hover:bg-[#FAF5F0]"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#EDE0D4] px-4 pt-3 pb-6 space-y-4">
          <nav className="flex flex-col space-y-2 text-base font-medium text-[#1E1214]">
            <a
              href="#cardapio"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#FAF5F0] hover:text-[#D72D38] transition-colors"
            >
              Cardápio Completo
            </a>
            <a
              href="#combos"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#FAF5F0] hover:text-[#D72D38] transition-colors"
            >
              Combos com Desconto
            </a>
            <a
              href="#bastidores"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#FAF5F0] hover:text-[#D72D38] transition-colors"
            >
              Vídeos dos Bastidores
            </a>
            <a
              href="#historia"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#FAF5F0] hover:text-[#D72D38] transition-colors"
            >
              Nossa História & Mascote
            </a>
            <a
              href="#localizacao"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#FAF5F0] hover:text-[#D72D38] transition-colors"
            >
              Onde Estamos & Horários
            </a>
          </nav>

          <div className="pt-2 border-t border-[#EDE0D4] space-y-2">
            <span className="text-[11px] uppercase tracking-wider font-bold text-[#5E4E51] block mb-1">
              Peça pelo seu aplicativo favorito:
            </span>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={DELIVERY_LINKS.ifood}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 bg-[#EA1D2C] hover:bg-[#C91422] text-white font-heading font-bold text-sm rounded-xl text-center shadow-xs"
              >
                <span>🛵 iFood</span>
              </a>
              <a
                href={DELIVERY_LINKS.ninetyNineFood}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 bg-[#FF9600] hover:bg-[#E58300] text-[#1E1214] font-heading font-bold text-sm rounded-xl text-center shadow-xs"
              >
                <span>🍔 99Food</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
