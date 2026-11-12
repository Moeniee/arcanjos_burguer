export function MarqueeBanner() {
  const phrases = [
    '100% CARNE BOVINA FRESCA',
    'CROSTINHA SMASH CROCANTE',
    'PÃO BRIOCHE DOURADO NA MANTEIGA',
    'BACON ARTESANAL SEQUINHO',
    'SABOR, ALEGRIA E PREÇO JUSTO',
    'MOLHO SECRETO DO ARCANJO',
    'ENTREGA RÁPIDA & QUENTINHA',
  ];

  return (
    <div className="bg-[#D72D38] text-white py-3.5 overflow-hidden border-y border-[#A52A3C] shadow-inner select-none">
      <div className="flex w-max animate-marquee">
        {/* Render repeated list for continuous animation */}
        {[0, 1].map((copyIndex) => (
          <div key={copyIndex} className="flex items-center gap-8 shrink-0 pr-8">
            {phrases.map((phrase, i) => (
              <span key={i} className="flex items-center gap-8 font-heading text-sm sm:text-base font-bold tracking-wider uppercase whitespace-nowrap">
                <span>{phrase}</span>
                <span className="text-[#F46036] text-lg font-black" aria-hidden="true">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
