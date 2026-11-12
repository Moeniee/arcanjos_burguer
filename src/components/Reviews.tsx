import { Star, ThumbsUp } from 'lucide-react';
import { TESTIMONIALS } from '../data/menu';

export function Reviews() {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-[#EDE0D4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F46036]">
              Quem Provou, Aprovou
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E1214]">
              A Voz dos Nossos Clientes
            </h2>
            <p className="text-sm sm:text-base text-[#5E4E51] max-w-xl">
              Mais de 500 hambúrgueres entregues toda semana com nota média de 4.9 estrelas.
            </p>
          </div>

          <div className="flex items-center gap-4 bg-[#FAF5F0] p-4 rounded-2xl border border-[#EDE0D4] shrink-0">
            <div className="flex text-[#F46036]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <div>
              <p className="font-heading font-bold text-lg text-[#1E1214] leading-none">4.9 de 5.0</p>
              <p className="text-[11px] text-[#5E4E51]">Mais de 1.400 avaliações</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review, i) => (
            <div
              key={i}
              className="bg-[#FAF5F0] rounded-3xl p-6 sm:p-8 border border-[#EDE0D4] flex flex-col justify-between space-y-6 hover:shadow-lg transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-[#F46036]">
                    {[...Array(review.stars)].map((_, s) => (
                      <Star key={s} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-[#5E4E51]">
                    {review.time}
                  </span>
                </div>
                <p className="text-sm text-[#1E1214] leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#EDE0D4] flex items-center justify-between">
                <div>
                  <h3 className="font-heading font-bold text-sm text-[#1E1214]">
                    {review.name}
                  </h3>
                  <p className="text-xs text-[#5E4E51]">{review.neighborhood}</p>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
                  <ThumbsUp className="w-3 h-3" />
                  <span>Pedido Verificado</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
