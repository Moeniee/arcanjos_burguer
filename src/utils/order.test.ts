import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateItemUnitPrice,
  calculateItemTotal,
  calculateOrderSummary,
  generateWhatsAppOrderMessage,
  CartItem,
  OrderSubmissionData,
} from './order';

test('calculateItemUnitPrice adds addon prices to base price', () => {
  const item = {
    basePrice: 28.0,
    selectedAddons: [
      { id: '1', name: 'Extra Bacon', price: 5.0 },
      { id: '2', name: 'Queijo Cheddar Dobro', price: 4.0 },
    ],
  };
  assert.equal(calculateItemUnitPrice(item), 37.0);
});

test('calculateItemTotal multiplies unit price with quantity', () => {
  const cartItem: CartItem = {
    id: 'cart-1',
    menuItemId: 'item-1',
    name: 'Arcanjo Smash Bacon',
    basePrice: 30.0,
    quantity: 2,
    selectedAddons: [{ id: '1', name: 'Extra Bacon', price: 5.0 }],
    image: '/test.jpg',
  };
  // (30 + 5) * 2 = 70
  assert.equal(calculateItemTotal(cartItem), 70.0);
});

test('calculateOrderSummary handles free delivery threshold and discount', () => {
  const cartItem1: CartItem = {
    id: 'cart-1',
    menuItemId: 'item-1',
    name: 'Arcanjo Monstro',
    basePrice: 45.0,
    quantity: 2, // 90.0 total
    selectedAddons: [],
    image: '/test.jpg',
  };

  const summary = calculateOrderSummary([cartItem1], 'delivery', 'ARCANJO10');
  assert.equal(summary.subtotal, 90.0);
  assert.equal(summary.isFreeDelivery, true);
  assert.equal(summary.deliveryFee, 0);
  assert.equal(summary.discount, 9.0); // 10% of 90
  assert.equal(summary.total, 81.0);
});

test('calculateOrderSummary charges delivery fee for orders below threshold', () => {
  const cartItem1: CartItem = {
    id: 'cart-1',
    menuItemId: 'item-1',
    name: 'Arcanjo Simples',
    basePrice: 25.0,
    quantity: 1,
    selectedAddons: [],
    image: '/test.jpg',
  };

  const summary = calculateOrderSummary([cartItem1], 'delivery');
  assert.equal(summary.subtotal, 25.0);
  assert.equal(summary.isFreeDelivery, false);
  assert.equal(summary.deliveryFee, 7.0);
  assert.equal(summary.total, 32.0);
});

test('generateWhatsAppOrderMessage formats complete order text with customer details', () => {
  const data: OrderSubmissionData = {
    customerName: 'Lucas Arcanjo',
    customerPhone: '11988887777',
    orderType: 'delivery',
    address: 'Av. Paulista, 1000 - Apto 42',
    referencePoint: 'Próximo ao metrô Trianon-Masp',
    paymentMethod: 'pix',
    items: [
      {
        id: 'c1',
        menuItemId: 'm1',
        name: 'Arcanjo Duplo Smash',
        basePrice: 32.0,
        quantity: 2,
        selectedAddons: [{ id: 'a1', name: 'Bacon Crocante', price: 5.0 }],
        notes: 'Ponto da carne bem passada',
        image: '/img.jpg',
      },
    ],
    couponCode: 'ARCANJO10',
    notes: 'Favor buzinar no portão',
  };

  const msg = generateWhatsAppOrderMessage(data);
  assert.match(msg, /NOVO PEDIDO - ARCANJO'S BURGUERS/);
  assert.match(msg, /Lucas Arcanjo/);
  assert.match(msg, /Av\. Paulista/);
  assert.match(msg, /Arcanjo Duplo Smash/);
  assert.match(msg, /Bacon Crocante/);
  assert.match(msg, /Ponto da carne bem passada/);
  assert.match(msg, /Pix/);
  assert.match(msg, /TOTAL A PAGAR/);
});
