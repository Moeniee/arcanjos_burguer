import { useState } from 'react';
import { Sparkles, Check, ExternalLink } from 'lucide-react';
import { formatCurrency } from '../utils/order';
import { DELIVERY_LINKS } from '../data/links';

export function ComboBuilder() {
  const burgers = [
    { id: 'cb-cheddar', name: 'Cheddar Burguer', price: 28.90, desc: 'Smash 100g, cheddar cremoso e maionese' },
    { id: 'cb-bacon', name: 'Cheddar Bacon', price: 34.90, desc: 'Smash 100g, bacon crocante e cheddar' },
    { id: 'cb-supremo', name: 'Supremo Duplo', price: 45.90, desc: '2x Smash 100g, cheddar fatiado e bacon' },
  ];

  const sides = [
    { id: 'side-batata', name: 'Batata Frita (150g)', price: 10.90, desc: 'Crocante, sequinha e com tempero da casa' },
  ];

  const drinks = [
    {
      id: 'drink-coca',
      name: 'Coca-Cola 350ml Lata',
      price: 9.90,
      image: '/assets/aistudio/coca_lata_trimmed.png',
    },
    {
      id: 'drink-coca-2l',
      name: 'Coca-Cola 2L Gelada',
      price: 14.90,
      image: '/assets/aistudio/coca_2l_trimmed.png',
    },
  ];

  const [selectedBurger, setSelectedBurger] = useState(burgers[1]); // Default Bacon Supreme
  const [selectedSide, setSelectedSide] = useState(sides[0]);
  const [selectedDrink, setSelectedDrink] = useState(drinks[0]);

  const rawTotal = selectedBurger.price + selectedSide.price + selectedDrink.price;
  const comboDiscount = 6.00; // R$ 6 off for building a combo
  const finalPrice = Math.max(0, rawTotal - comboDiscount);

  return (
    <section id="combos" className="py-16 md:py-24 bg-white border-b border-[#EDE0D4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#1E1214] via-[#2A171A] to-[#1E1214] rounded-3xl p-6 sm:p-10 lg:p-12 text-white shadow-2xl border border-white/10 relative overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#D72D38]/20 rounded-full blur-3xl pointer-events-none" />

          {/* Heading */}
          <div className="max-w-2xl mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D72D38]/40 border border-[#D72D38]/60 text-[#EDE0D4] text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#F46036]" />
              <span>Desconto de R$ 6,00 Garantido</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Simule seu Combo dos Sonhos
            </h2>
            <p className="text-sm sm:text-base text-[#EDE0D4]/80">
              Escolha seu hambúrguer artesanal, a sua porção de fritas preferida e a bebida gelada. Em seguida, abra o iFood ou 99Food para fazer seu pedido!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Steps Container (8 cols) */}
            <div className="lg:col-span-8 space-y-8">
              {/* Step 1: Burger */}
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#F46036]">
                  Passo 1 · Escolha o Hambúrguer
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {burgers.map((b) => {
                    const isSelected = selectedBurger.id === b.id;
                    return (
                      <button
                        key={b.id}
                        type="button"
                        onClick={() => setSelectedBurger(b)}
                        className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                          isSelected
                            ? 'border-[#D72D38] bg-[#D72D38]/20 shadow-md ring-1 ring-[#D72D38]'
                            : 'border-white/10 bg-white/5 hover:bg-white/10'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-heading font-bold text-sm text-white">{b.name}</span>
                          {isSelected && <Check className="w-4 h-4 text-[#F46036]" />}
                        </div>
                        <p className="text-xs text-[#EDE0D4]/70 mb-2">{b.desc}</p>
                        <span className="text-xs font-bold text-[#F46036] tabular-nums">{formatCurrency(b.price)}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Side */}
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#F46036]">
                  Passo 2 · Escolha a Porção
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {sides.map((s) => {
                    const isSelected = selectedSide.id === s.id;
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setSelectedSide(s)}
                        className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                          isSelected
                            ? 'border-[#D72D38] bg-[#D72D38]/20 shadow-md ring-1 ring-[#D72D38]'
                            : 'border-white/10 bg-white/5 hover:bg-white/10'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-heading font-bold text-sm text-white">{s.name}</span>
                          {isSelected && <Check className="w-4 h-4 text-[#F46036]" />}
                        </div>
                        <p className="text-xs text-[#EDE0D4]/70 mb-2">{s.desc}</p>
                        <span className="text-xs font-bold text-[#F46036] tabular-nums">{formatCurrency(s.price)}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Drink */}
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#F46036]">
                  Passo 3 · Escolha a Bebida
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {drinks.map((d) => {
                    const isSelected = selectedDrink.id === d.id;
                    return (
                      <button
                        key={d.id}
                        type="button"
                        onClick={() => setSelectedDrink(d)}
                        className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex items-center gap-3 ${
                          isSelected
                            ? 'border-[#D72D38] bg-[#D72D38]/20 shadow-md ring-1 ring-[#D72D38]'
                            : 'border-white/10 bg-white/5 hover:bg-white/10'
                        }`}
                      >
                        <div className="w-12 h-14 shrink-0 bg-black/20 rounded-xl p-1 flex items-center justify-center overflow-hidden">
                          <img
                            src={d.image}
                            alt={d.name}
                            className="max-h-full max-w-full object-contain drop-shadow-md"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-heading font-bold text-xs sm:text-sm text-white truncate">{d.name}</span>
                            {isSelected && <Check className="w-4 h-4 text-[#F46036] shrink-0 ml-1" />}
                          </div>
                          <span className="text-xs font-bold text-[#F46036] tabular-nums">{formatCurrency(d.price)}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Combo Summary Card (4 cols) */}
            <div className="lg:col-span-4 bg-white/5 border border-white/15 rounded-3xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <h3 className="font-heading text-lg font-bold text-white">Resumo do Combo</h3>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#F46036] bg-[#F46036]/15 px-2.5 py-1 rounded-md">
                  Economize R$ 6,00
                </span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-[#EDE0D4]">
                <div className="flex justify-between">
                  <span>🍔 {selectedBurger.name}</span>
                  <span className="tabular-nums text-white/80">{formatCurrency(selectedBurger.price)}</span>
                </div>
                <div className="flex justify-between">
                  <span>🍟 {selectedSide.name}</span>
                  <span className="tabular-nums text-white/80">{formatCurrency(selectedSide.price)}</span>
                </div>
                <div className="flex justify-between">
                  <span>🥤 {selectedDrink.name}</span>
                  <span className="tabular-nums text-white/80">{formatCurrency(selectedDrink.price)}</span>
                </div>
                <div className="flex justify-between text-emerald-400 font-semibold pt-2 border-t border-white/10">
                  <span>Desconto de Combo</span>
                  <span className="tabular-nums">-{formatCurrency(comboDiscount)}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-4">
                <div>
                  <span className="block text-xs line-through text-white/50 tabular-nums">
                    {formatCurrency(rawTotal)}
                  </span>
                  <span className="font-heading text-3xl font-bold text-[#F46036] tabular-nums">
                    {formatCurrency(finalPrice)}
                  </span>
                </div>

                <div className="space-y-2">
                  <a
                    href={DELIVERY_LINKS.ifood}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#EA1D2C] hover:bg-[#CC1422] text-white font-heading font-bold text-sm rounded-xl transition-all shadow-md shadow-[#EA1D2C]/30"
                  >
                    <span>Pedir Combo no iFood</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <a
                    href={DELIVERY_LINKS.food99}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#FF9600] hover:bg-[#E58500] text-white font-heading font-bold text-sm rounded-xl transition-all shadow-md shadow-[#FF9600]/30"
                  >
                    <span>Pedir Combo no 99Food</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
