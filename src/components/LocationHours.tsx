import { MapPin, Clock, Bike, ExternalLink, Navigation } from 'lucide-react';
import { STORE_ADDRESS, DELIVERY_LINKS } from '../data/links';

export function LocationHours() {
  return (
    <section id="localizacao" className="py-16 md:py-24 bg-[#FAF5F0] border-b border-[#EDE0D4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#F46036]">
            Nossa Casa em Águas Claras
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E1214]">
            Localização & Delivery
          </h2>
          <p className="text-sm sm:text-base text-[#5E4E51]">
            Venha nos conhecer em Águas Claras ou peça o smash quentinho no conforto da sua casa pelo iFood ou 99Food!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Col 1 & 2: Store Info & Operating Hours (5 cols) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            {/* Address Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EDE0D4] space-y-5 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#D72D38]/10 text-[#D72D38] flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-[#1E1214]">
                    Arcanjo's Burguers
                  </h3>
                  <span className="text-xs text-[#F46036] font-semibold">
                    Águas Claras · Brasília DF
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF5F0] border border-[#EDE0D4] space-y-1.5">
                <p className="text-xs font-bold uppercase tracking-wider text-[#5E4E51]">
                  Endereço Oficial
                </p>
                <p className="text-sm font-semibold text-[#1E1214] leading-snug">
                  {STORE_ADDRESS.full}
                </p>
                <p className="text-xs text-[#5E4E51]">
                  {STORE_ADDRESS.street} — {STORE_ADDRESS.neighborhood}, {STORE_ADDRESS.cityState} · CEP {STORE_ADDRESS.cep}
                </p>
              </div>

              <div className="pt-1">
                <a
                  href={STORE_ADDRESS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#D72D38] hover:text-[#A52A3C] transition-colors"
                >
                  <Navigation className="w-4 h-4 text-[#D72D38]" />
                  <span>Abrir rota no Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Hours & Delivery Apps Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EDE0D4] space-y-5 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#F46036]/10 text-[#F46036] flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#1E1214]">
                    Horário de Atendimento
                  </h3>
                  <span className="text-xs text-[#5E4E51]">
                    Pedidos e chapa a todo vapor
                  </span>
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-[#1E1214]">
                <div className="flex justify-between py-1.5 border-b border-[#EDE0D4]">
                  <span className="font-medium">Terça a Quinta</span>
                  <span className="font-semibold text-[#D72D38]">18h00 às 23h30</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#EDE0D4]">
                  <span className="font-medium">Sexta e Sábado</span>
                  <span className="font-semibold text-[#D72D38]">18h00 às 00h30</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#EDE0D4]">
                  <span className="font-medium">Domingo</span>
                  <span className="font-semibold text-[#D72D38]">18h00 às 23h30</span>
                </div>
                <div className="flex justify-between py-1.5 text-[#5E4E51]/70">
                  <span>Segunda-feira</span>
                  <span>Fechado para descanso da equipe</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF5F0] border border-[#EDE0D4] flex items-start gap-3">
                <Bike className="w-5 h-5 text-[#D72D38] shrink-0 mt-0.5" />
                <div className="text-xs text-[#5E4E51] leading-relaxed">
                  <strong className="text-[#1E1214] block">Delivery Exclusivo:</strong>
                  Trabalhamos exclusivamente com entregas pelos aplicativos{' '}
                  <strong className="text-[#EA1D2C]">iFood</strong> e{' '}
                  <strong className="text-[#FF9600]">99Food</strong> para garantir rapidez e segurança.
                </div>
              </div>
            </div>
          </div>

          {/* Col 3: Interactive Google Maps Embed + Direct Order Bar (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-5 sm:p-6 border border-[#EDE0D4] shadow-sm flex flex-col justify-between space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#1E1214]">
                  Localização no Mapa
                </span>
              </div>
              <a
                href={STORE_ADDRESS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#D72D38] hover:underline flex items-center gap-1"
              >
                <span>Ver mapa ampliado</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Embedded Google Map iframe */}
            <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-[#EDE0D4] bg-[#FAF5F0]">
              <iframe
                title="Localização Arcanjo's Burguers no Google Maps"
                src={STORE_ADDRESS.googleMapsEmbedUrl}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Callout Action Banner for iFood and 99Food */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#1E1214] to-[#2D1619] text-white flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="space-y-0.5">
                <p className="font-heading text-sm sm:text-base font-bold text-white">
                  Peça agora e receba em casa!
                </p>
                <p className="text-xs text-[#EDE0D4]/75">
                  Clique para abrir a loja oficial no seu app favorito:
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={DELIVERY_LINKS.ifood}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#EA1D2C] hover:bg-[#CC1422] text-white font-heading font-bold text-xs sm:text-sm shadow-md transition-transform active:scale-95 text-center"
                >
                  <span>🛵 iFood</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>

                <a
                  href={DELIVERY_LINKS.food99}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#FF9600] hover:bg-[#E58500] text-[#1E1214] font-heading font-bold text-xs sm:text-sm shadow-md transition-transform active:scale-95 text-center"
                >
                  <span>🍔 99Food</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
