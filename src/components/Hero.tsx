import { ArrowRight, Flame, Sparkles, Clock, ExternalLink } from 'lucide-react';
import { DELIVERY_LINKS } from '../data/links';

interface HeroProps {
  onExploreMenu: () => void;
}

export function Hero({ onExploreMenu }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF5F0] via-white to-[#FAF5F0] py-12 md:py-20 border-b border-[#EDE0D4]">
      {/* Background Decorative subtle watermarks and circular warm aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F46036]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Narrative & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Tagline kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D72D38]/10 text-[#D72D38] text-xs font-bold tracking-wide uppercase">
              <Flame className="w-3.5 h-3.5 text-[#D72D38]" />
              <span>O Smash Mais Suculento de Águas Claras</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1E1214] leading-[1.12] text-balance">
              Hambúrguer com{' '}
              <span className="text-[#D72D38]">sabor,</span>{' '}
              <span className="text-[#F46036]">alegria</span> e{' '}
              <span className="text-[#D72D38]">
                preço justo
              </span>
              .
            </h1>

            <p className="text-base sm:text-lg text-[#5E4E51] max-w-2xl leading-relaxed">
              Carne 100% bovina moída no dia, prensada na chapa fervente com aquela{' '}
              <strong className="text-[#1E1214] font-semibold">crostinha smash inconfundível</strong>,
              queijo derretido, tiras estaladiças de bacon e pão brioche dourado na manteiga pura.
              Peça com entrega rápida e exclusiva pelo <strong className="text-[#EA1D2C]">iFood</strong> e <strong className="text-[#FF9600]">99Food</strong>!
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onExploreMenu}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-[#D72D38] hover:bg-[#A52A3C] text-white font-heading font-semibold text-base rounded-2xl shadow-lg shadow-[#D72D38]/25 hover:shadow-xl transition-all hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-[#D72D38] cursor-pointer"
              >
                <span>Conhecer o Cardápio</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href={DELIVERY_LINKS.ifood}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-4 bg-[#EA1D2C] hover:bg-[#CC1422] text-white font-heading font-bold text-sm sm:text-base rounded-2xl shadow-md shadow-[#EA1D2C]/25 transition-all hover:-translate-y-0.5"
              >
                <span>Pedir no iFood</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={DELIVERY_LINKS.food99}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-4 bg-[#FF9600] hover:bg-[#E58500] text-white font-heading font-bold text-sm sm:text-base rounded-2xl shadow-md shadow-[#FF9600]/25 transition-all hover:-translate-y-0.5"
              >
                <span>Pedir no 99Food</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Quick Proof Trust Markers */}
            <div className="pt-4 border-t border-[#EDE0D4] flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-[#5E4E51]">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#D72D38]"></span>
                <span className="font-medium text-[#1E1214]">100% Carne Fresca</span>
              </div>
              <span className="text-[#EDE0D4]">·</span>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#F46036]" />
                <span className="font-medium text-[#1E1214]">Pão Brioche Selado</span>
              </div>
              <span className="text-[#EDE0D4]">·</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#D72D38]" />
                <span className="font-medium text-[#1E1214]">Águas Claras · DF</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Food Showcase (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Visual Frame */}
            <div className="relative w-full max-w-md aspect-4/5 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#1E1214] group">
              <img
                src="/assets/aistudio/WhatsApp_Image_2026-11-11_at_19.36.30__1__ea25f700.jpeg"
                alt="Combo Hambúrguer Artesanal Arcanjo's com Batata Rústica"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />

              {/* Gradient Scrim for Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

              {/* Floating Top Floating Mascot Emblem */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-2 shadow-lg border border-[#EDE0D4] flex items-center gap-2.5">
                <img
                  src="/assets/aistudio/arcanjos-logo-official.png"
                  alt="Logo Arcanjo's Burguers"
                  className="w-10 h-10 object-contain drop-shadow-xs"
                />
                <div className="text-left pr-1.5">
                  <p className="text-[10px] font-bold uppercase text-[#D72D38] tracking-wider leading-none">
                    Selo Oficial
                  </p>
                  <p className="text-xs font-heading font-bold text-[#1E1214]">Arcanjo's</p>
                </div>
              </div>

              {/* Bottom Card Callout */}
              <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-[#EDE0D4] text-left">
                <div className="flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold text-[#F46036] uppercase tracking-wider block">
                      Destaque do Cardápio
                    </span>
                    <h2 className="font-heading text-base sm:text-lg font-bold text-[#1E1214] truncate">
                      Combo Supremo Duplo
                    </h2>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="block text-[11px] line-through text-[#5E4E51] tabular-nums">
                      R$ 54,90
                    </span>
                    <span className="font-heading text-lg sm:text-xl font-bold text-[#D72D38] tabular-nums">
                      R$ 46,90
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Review Badge */}
            <div className="hidden sm:flex absolute -bottom-5 -left-4 bg-white rounded-2xl p-3 shadow-xl border border-[#EDE0D4] items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#D72D38] text-white flex items-center justify-center font-heading font-bold text-base">
                ★
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1 text-[#F46036] text-xs font-bold">
                  <span>4.9 / 5.0</span>
                  <span className="text-[#5E4E51] font-normal">no Delivery</span>
                </div>
                <p className="text-xs font-semibold text-[#1E1214]">Disponível no iFood & 99Food</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
