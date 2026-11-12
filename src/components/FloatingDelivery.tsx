import { useState } from 'react';
import { ShoppingBag, ExternalLink, X } from 'lucide-react';
import { DELIVERY_LINKS } from '../data/links';

export function FloatingDelivery() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside aria-label="Pedir no delivery" className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-3">
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl border border-[#EDE0D4] p-4 w-72 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-[#EDE0D4]">
            <div>
              <span className="font-heading font-bold text-sm text-[#1E1214] block">
                Peça no seu App
              </span>
              <span className="text-[11px] text-[#5E4E51]">
                Entregas rápidas em Águas Claras
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-[#5E4E51] hover:text-[#D72D38] hover:bg-[#FAF5F0]"
              aria-label="Fechar opções de delivery"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2.5 pt-3">
            <a
              href={DELIVERY_LINKS.ifood}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-[#EA1D2C] hover:bg-[#C91422] text-white font-heading font-bold text-sm transition-transform active:scale-98 shadow-md"
            >
              <span className="flex items-center gap-2">
                <span className="text-base">🛵</span>
                <span>Pedir no iFood</span>
              </span>
              <ExternalLink className="w-4 h-4 opacity-80" />
            </a>

            <a
              href={DELIVERY_LINKS.ninetyNineFood}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-[#FF9600] hover:bg-[#E58300] text-[#1E1214] font-heading font-bold text-sm transition-transform active:scale-98 shadow-md"
            >
              <span className="flex items-center gap-2">
                <span className="text-base">🍔</span>
                <span>Pedir no 99Food</span>
              </span>
              <ExternalLink className="w-4 h-4 opacity-80" />
            </a>
          </div>
        </div>
      )}

      {/* Main floating pill button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-[#D72D38] hover:bg-[#A52A3C] text-white shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 font-heading font-bold text-sm focus-visible:outline-2 focus-visible:outline-[#D72D38]"
        aria-label="Abrir opções de delivery iFood e 99Food"
      >
        <ShoppingBag className="w-5 h-5 text-white" />
        <span>Peça no iFood / 99</span>
        <span className="flex h-2.5 w-2.5 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
        </span>
      </button>
    </aside>
  );
}
