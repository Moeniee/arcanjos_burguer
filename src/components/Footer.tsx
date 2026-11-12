import { MapPin, Heart, ExternalLink } from 'lucide-react';
import { STORE_ADDRESS, DELIVERY_LINKS } from '../data/links';

export function Footer() {
  return (
    <footer className="bg-[#1E1214] text-[#EDE0D4] pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/aistudio/arcanjos-logo-official.png"
                alt="Arcanjo's Logo"
                className="w-12 h-12 object-contain drop-shadow-xs"
              />
              <span className="font-heading text-2xl font-bold tracking-tight text-white">
                ARCANJO'S
              </span>
            </div>
            <p className="text-xs text-[#EDE0D4]/70 leading-relaxed">
              Hambúrgueres artesanais de verdade com sabor, alegria e preço justo. Carne fresca com crostinha smash crocante e pão brioche amanteigado.
            </p>
            <div className="pt-1 flex flex-col gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#F46036]">
                Peça com Exclusividade em:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={DELIVERY_LINKS.ifood}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#EA1D2C] hover:bg-[#CC1422] text-white text-xs font-heading font-bold inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>iFood</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href={DELIVERY_LINKS.food99}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#FF9600] hover:bg-[#E58500] text-[#1E1214] text-xs font-heading font-bold inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>99Food</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#cardapio" className="hover:text-white transition-colors">
                  Cardápio de Hambúrgueres
                </a>
              </li>
              <li>
                <a href="#combos" className="hover:text-white transition-colors">
                  Combos com Desconto
                </a>
              </li>
              <li>
                <a href="#bastidores" className="hover:text-white transition-colors">
                  Vídeos da Cozinha
                </a>
              </li>
              <li>
                <a href="#historia" className="hover:text-white transition-colors">
                  Nossa História & Mascote
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-white transition-colors">
                  Localização no Google Maps
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Localização & Atendimento */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Endereço & Atendimento
            </h4>
            <div className="space-y-2.5 text-xs text-[#EDE0D4]/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#F46036] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">{STORE_ADDRESS.street}</p>
                  <p>{STORE_ADDRESS.neighborhood}, {STORE_ADDRESS.cityState}</p>
                  <p>CEP {STORE_ADDRESS.cep}</p>
                </div>
              </div>
              <div className="pt-2 text-[11px] text-[#EDE0D4]/60 leading-relaxed border-t border-white/10">
                <p className="font-semibold text-[#EDE0D4]/90 mb-1">Horário de Funcionamento:</p>
                <p>Terça a Quinta e Domingo: 18h00 às 23h30</p>
                <p>Sexta e Sábado: 18h00 às 00h30</p>
                <p className="text-[#F46036] font-medium mt-1">Segunda-feira: Fechado</p>
              </div>
            </div>
          </div>

          {/* Col 4: Garantia Arcanjo's */}
          <div className="space-y-3 bg-white/5 p-5 rounded-2xl border border-white/10">
            <h4 className="font-heading font-bold text-sm text-white">
              Garantia Arcanjo's
            </h4>
            <p className="text-xs text-[#EDE0D4]/70 leading-relaxed">
              Carne bovina de verdade prensada com crostinha smash, pão brioche dourado na manteiga e queijo cremoso derretido.
            </p>
            <div className="pt-2">
              <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#F46036]">
                Trabalhamos com iFood & 99Food
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EDE0D4]/60">
          <p>© {new Date().getFullYear()} Arcanjo's Burguers — Águas Claras, DF. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1.5">
            <span>Feito com</span>
            <Heart className="w-3.5 h-3.5 text-[#D72D38] fill-current" />
            <span>para quem ama hambúrguer de verdade</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
