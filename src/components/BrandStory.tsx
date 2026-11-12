import { Heart, Sparkles, Smile } from 'lucide-react';

export function BrandStory() {
  return (
    <section id="historia" className="py-16 md:py-24 bg-[#FAF5F0] border-b border-[#EDE0D4] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Mascot Portrait & Brand Seal (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-sm aspect-square bg-white rounded-3xl p-6 flex flex-col items-center justify-center shadow-xl border-2 border-[#EDE0D4] overflow-hidden group">
              <img
                src="/assets/aistudio/arcanjos-logo-official.png"
                alt="Logo Oficial Arcanjo's Burguers"
                className="w-72 h-72 object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
              />

              {/* Decorative Corner Badge */}
              <div className="absolute top-4 right-4 bg-[#D72D38] text-white px-3.5 py-1.5 rounded-xl shadow-md flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#EDE0D4]" />
                <span className="text-xs font-heading font-bold">100% Artesanal</span>
              </div>
            </div>
          </div>

          {/* Narrative Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#F46036]">
                Essência & Origem
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E1214] leading-tight text-balance">
                Mais do que hambúrgueres: uma experiência feita com coração.
              </h2>
            </div>

            <p className="text-base text-[#5E4E51] leading-relaxed">
              O <strong className="text-[#1E1214]">Arcanjo's Burguers</strong> nasceu com uma missão clara e sem rodeios: criar hambúrgueres artesanais de altíssima qualidade, com carne de verdade, pão brioche dourado na manteiga e receitas autorais — mas sem a afetação e os preços abusivos das hamburguerias gourmet tradicionais.
            </p>

            <p className="text-base text-[#5E4E51] leading-relaxed">
              Inspirados pelo charme nostálgico dos clássicos diners dos anos 50 e com a energia calorosa da hospitalidade brasileira, criamos um espaço onde cada cliente é recebido com um sorriso sincero e atendido com o carinho que merece.
            </p>

            {/* Three Pillar Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-white p-4 rounded-2xl border border-[#EDE0D4] space-y-1.5 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-[#D72D38]/10 text-[#D72D38] flex items-center justify-center mb-2">
                  <Heart className="w-4 h-4" />
                </div>
                <h3 className="font-heading text-base font-bold text-[#1E1214]">Acolhedor</h3>
                <p className="text-xs text-[#5E4E51]">
                  Um ambiente leve, onde todos se sentem bem-vindos e em casa.
                </p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-[#EDE0D4] space-y-1.5 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-[#F46036]/10 text-[#F46036] flex items-center justify-center mb-2">
                  <Smile className="w-4 h-4" />
                </div>
                <h3 className="font-heading text-base font-bold text-[#1E1214]">Memorável</h3>
                <p className="text-xs text-[#5E4E51]">
                  A crocância do bacon e o queijo derretido marcam sua memória.
                </p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-[#EDE0D4] space-y-1.5 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-[#A52A3C]/10 text-[#A52A3C] flex items-center justify-center mb-2">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h3 className="font-heading text-base font-bold text-[#1E1214]">Acessível</h3>
                <p className="text-xs text-[#5E4E51]">
                  Preço justo de ponta a ponta, sem taxas surpresa ou exagero.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
