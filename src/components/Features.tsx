import { Flame, Sparkles, HeartHandshake, ShieldCheck } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Flame,
      title: 'Crostinha Smash Perfeita',
      description: 'Carne 100% bovina moída no dia, prensada na chapa a mais de 200°C para criar aquela crostinha caramelizada cheia de sabor.',
      tag: 'Técnica & Sabor',
    },
    {
      icon: Sparkles,
      title: 'Pão Brioche Selado na Manteiga',
      description: 'Pão fofinho, levemente adocicado e selado com manteiga pura na chapa. Sustenta o lanche inteiro sem desmanchar.',
      tag: 'Qualidade Superior',
    },
    {
      icon: ShieldCheck,
      title: 'Bacon Sequinho & Crocante',
      description: 'Fatias douradinhas, sem excesso de gordura, preparadas no ponto exato para fazer "crunch" a cada mordida.',
      tag: 'Receita da Casa',
    },
    {
      icon: HeartHandshake,
      title: 'Preço Justo para Todo Mundo',
      description: 'Acreditamos que comer bem não deve custar uma fortuna. Sabor artesanal de verdade ao alcance de todos.',
      tag: 'Nossa Filosofia',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-[#EDE0D4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#F46036]">
            Diferenciais Arcanjo's
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1E1214] text-balance">
            Por que o nosso hambúrguer conquista na primeira mordida?
          </h2>
          <p className="text-sm sm:text-base text-[#5E4E51]">
            Nada de ultraprocessados ou carnes congeladas. Aqui cada lanche é preparado com carinho, técnica e respeito ao seu paladar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="group relative bg-[#FAF5F0] rounded-2xl p-6 sm:p-8 border border-[#EDE0D4] hover:border-[#D72D38]/40 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#D72D38] text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md shadow-[#D72D38]/20">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#F46036]">
                    {feat.tag}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-[#1E1214]">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-[#5E4E51] leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
