export interface MenuItemAddon {
  id: string;
  name: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  category: 'smash' | 'monstro' | 'combo' | 'porcoes' | 'bebidas';
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
  popular?: boolean;
  ingredients?: string[];
  meatGrams?: number;
  availableAddons?: MenuItemAddon[];
}

export interface CartItem {
  id: string; // unique cart line id
  menuItemId: string;
  name: string;
  basePrice: number;
  quantity: number;
  selectedAddons: MenuItemAddon[];
  notes?: string;
  image: string;
}

export interface OrderSubmissionData {
  customerName: string;
  customerPhone: string;
  orderType: 'delivery' | 'retirada';
  address?: string;
  referencePoint?: string;
  paymentMethod: 'pix' | 'cartao_credito' | 'cartao_debito' | 'dinheiro';
  changeFor?: string;
  items: CartItem[];
  couponCode?: string;
  notes?: string;
}

export const STORE_PHONE_NUMBER = '5511999998888'; // Format for wa.me

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(amount);
}

export function calculateItemUnitPrice(item: Pick<CartItem, 'basePrice' | 'selectedAddons'>): number {
  const addonsTotal = (item.selectedAddons || []).reduce((sum, addon) => sum + addon.price, 0);
  return item.basePrice + addonsTotal;
}

export function calculateItemTotal(item: CartItem): number {
  return calculateItemUnitPrice(item) * item.quantity;
}

export function calculateOrderSummary(
  items: CartItem[],
  orderType: 'delivery' | 'retirada',
  couponCode?: string
): {
  subtotal: number;
  deliveryFee: number;
  discount: number;
  total: number;
  isFreeDelivery: boolean;
} {
  const subtotal = items.reduce((acc, item) => acc + calculateItemTotal(item), 0);
  
  // Free delivery above R$ 80, otherwise R$ 7.00
  const isFreeDelivery = orderType === 'retirada' || subtotal >= 80;
  const deliveryFee = orderType === 'retirada' ? 0 : isFreeDelivery ? 0 : 7.0;

  // Coupon discount logic
  let discount = 0;
  const cleanCoupon = (couponCode || '').trim().toUpperCase();
  if (cleanCoupon === 'ARCANJO10') {
    discount = subtotal * 0.1; // 10% off
  } else if (cleanCoupon === 'PRIMEIRACOMPRA') {
    discount = 8.0; // R$ 8 off
  }

  // Discount cannot exceed subtotal
  discount = Math.min(discount, subtotal);

  const total = Math.max(0, subtotal - discount + deliveryFee);

  return {
    subtotal,
    deliveryFee,
    discount,
    total,
    isFreeDelivery,
  };
}

export function generateWhatsAppOrderMessage(data: OrderSubmissionData): string {
  const summary = calculateOrderSummary(data.items, data.orderType, data.couponCode);

  const paymentLabels: Record<OrderSubmissionData['paymentMethod'], string> = {
    pix: 'Pix (Chave enviada na confirmação)',
    cartao_credito: 'Cartão de Crédito (na entrega/retirada)',
    cartao_debito: 'Cartão de Débito (na entrega/retirada)',
    dinheiro: data.changeFor ? `Dinheiro (Troco para R$ ${data.changeFor})` : 'Dinheiro (Valor exato)',
  };

  const lines: string[] = [
    '🍔 *NOVO PEDIDO - ARCANJO\'S BURGUERS*',
    'Sabor, Alegria e Preço Justo!',
    '----------------------------------------',
    `👤 *Cliente:* ${data.customerName.trim()}`,
    `📱 *WhatsApp:* ${data.customerPhone.trim()}`,
    `🛵 *Modalidade:* ${data.orderType === 'delivery' ? 'Entrega em Domicílio (Delivery)' : 'Retirada no Balcão'}`,
  ];

  if (data.orderType === 'delivery' && data.address) {
    lines.push(`📍 *Endereço:* ${data.address.trim()}`);
    if (data.referencePoint) {
      lines.push(`🏢 *Ponto de Ref:* ${data.referencePoint.trim()}`);
    }
  }

  lines.push(`💳 *Pagamento:* ${paymentLabels[data.paymentMethod]}`);
  lines.push('----------------------------------------');
  lines.push('📋 *ITENS DO PEDIDO:*');

  data.items.forEach((item, index) => {
    const unitPrice = calculateItemUnitPrice(item);
    const itemTotal = calculateItemTotal(item);
    lines.push(`${index + 1}. *${item.quantity}x ${item.name}* - ${formatCurrency(itemTotal)}`);
    
    if (item.selectedAddons && item.selectedAddons.length > 0) {
      const addonsText = item.selectedAddons
        .map((a) => `+ ${a.name} (${formatCurrency(a.price)})`)
        .join(', ');
      lines.push(`   └ Adicionais: ${addonsText}`);
    }
    
    if (item.notes && item.notes.trim()) {
      lines.push(`   └ Obs: ${item.notes.trim()}`);
    }
  });

  lines.push('----------------------------------------');
  lines.push(`*Subtotal:* ${formatCurrency(summary.subtotal)}`);
  
  if (data.orderType === 'delivery') {
    lines.push(
      summary.isFreeDelivery
        ? '*Taxa de Entrega:* GRÁTIS (Pedido acima de R$ 80)'
        : `*Taxa de Entrega:* ${formatCurrency(summary.deliveryFee)}`
    );
  }

  if (summary.discount > 0) {
    lines.push(`*Desconto (${data.couponCode?.toUpperCase()}):* -${formatCurrency(summary.discount)}`);
  }

  lines.push(`*TOTAL A PAGAR:* ${formatCurrency(summary.total)}`);
  lines.push('----------------------------------------');
  
  if (data.notes && data.notes.trim()) {
    lines.push(`📝 *Observações Gerais:* ${data.notes.trim()}`);
    lines.push('----------------------------------------');
  }

  lines.push('Por favor, confirme meu pedido e o tempo estimado de entrega! 🙏✨');

  return lines.join('\n');
}

export function buildWhatsAppLink(phone: string, message: string): string {
  const cleanPhone = phone.replace(/\D/g, '');
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encoded}`;
}
