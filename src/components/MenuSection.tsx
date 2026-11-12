import { useState } from 'react';
import { Flame, Sparkles, ExternalLink } from 'lucide-react';
import { MENU_ITEMS } from '../data/menu';
import { formatCurrency } from '../utils/order';
import { DELIVERY_LINKS } from '../data/links';

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const categories = [
    { id: 'todos', label: 'Todos os Itens' },
    { id: 'smash', label: 'Burguers Artesanais' },
    { id: 'combo', label: 'Combos & Caixas' },
    { id: 'porcoes', label: 'Fritas' },
    { id: 'bebidas', label: 'Bebidas Geladas' },
  ];

  const filteredItems =
    activeCategory === 'todos'
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="cardapio" className="py-16 md:py-24 bg-[#FAF5F0] border-b border-[#EDE0D4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#F46036]">
            Feito na Hora
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E1214]">
            Cardápio Arcanjo's
          </h2>
          <p className="text-sm sm:text-base text-[#5E4E51]">
            Receitas artesanais exclusivas com carne fresca e pão brioche dourado na manteiga. Escolha o seu e peça pelo iFood ou 99Food!
          </p>
        </div>

        {/* Filter Segmented Controls */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl font-heading text-sm font-semibold transition-all whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#D72D38] cursor-pointer ${
                  isActive
                    ? 'bg-[#D72D38] text-white shadow-md shadow-[#D72D38]/20'
                    : 'bg-white hover:bg-[#EDE0D4] text-[#5E4E51] border border-[#EDE0D4]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl overflow-hidden border border-[#EDE0D4] hover:border-[#D72D38]/40 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Product Visual Container */}
              <div className="relative aspect-16/10 bg-[#1E1214] overflow-hidden flex items-center justify-center">
                {item.category === 'bebidas' ? (
                  <div className="w-full h-full bg-gradient-to-br from-[#2B1B1E] via-[#201315] to-[#140B0D] flex items-center justify-center p-5 relative">
                    {/* Subtle warm glow behind beverage */}
                    <div className="absolute w-28 h-28 bg-[#D72D38]/20 rounded-full blur-xl pointer-events-none" />
                    <img
                      src={item.image}
                      alt={item.name}
                      className="relative z-10 h-36 sm:h-40 max-w-full object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)] group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}

                {/* Subtle scrim overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Card Tag Badge */}
                {item.badge && (
                  <div className="absolute top-3 left-3 bg-[#D72D38] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-white" />
                    <span>{item.badge}</span>
                  </div>
                )}

                {item.meatGrams && (
                  <div className="absolute bottom-3 left-3 bg-black/75 backdrop-blur-xs text-[#EDE0D4] text-[11px] font-semibold px-2.5 py-0.5 rounded-md flex items-center gap-1">
                    <Flame className="w-3 h-3 text-[#F46036]" />
                    <span>{item.meatGrams}g carne fresca</span>
                  </div>
                )}
              </div>

              {/* Card Body Info */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-heading text-xl font-bold text-[#1E1214] group-hover:text-[#D72D38] transition-colors">
                      {item.name}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#5E4E51] line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Clean unboxed ingredients metadata */}
                  {item.ingredients && (
                    <div className="text-[11px] text-[#5E4E51]/80 pt-1">
                      {item.ingredients.map((ing, i) => (
                        <span key={i}>
                          {ing}
                          {i < item.ingredients!.length - 1 && <span className="mx-1 text-[#EDE0D4]" aria-hidden="true">·</span>}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Price & Delivery Buttons Row */}
                <div className="pt-4 border-t border-[#EDE0D4] space-y-3">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs text-[#5E4E51] font-medium">A partir de</span>
                    <div className="text-right">
                      {item.originalPrice && (
                        <span className="block text-xs line-through text-[#5E4E51] tabular-nums">
                          {formatCurrency(item.originalPrice)}
                        </span>
                      )}
                      <span className="font-heading text-2xl font-bold text-[#D72D38] tabular-nums">
                        {formatCurrency(item.price)}
                      </span>
                    </div>
                  </div>

                  {/* Direct delivery actions */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <a
                      href={DELIVERY_LINKS.ifood}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 bg-[#EA1D2C] hover:bg-[#CC1422] text-white rounded-xl font-heading font-semibold text-xs shadow-xs transition-all hover:shadow-md"
                      title="Pedir este item no iFood"
                    >
                      <span>iFood</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <a
                      href={DELIVERY_LINKS.food99}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 bg-[#FF9600] hover:bg-[#E58500] text-white rounded-xl font-heading font-semibold text-xs shadow-xs transition-all hover:shadow-md"
                      title="Pedir este item no 99Food"
                    >
                      <span>99Food</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
