export const DELIVERY_LINKS = {
  // URLs as string properties
  ifood: 'https://www.ifood.com.br/delivery/brasilia-df/arcanjos-caixa-de-hamburguer-aguas-claras/e98b15b6-0587-4029-98d5-b51babde3a29?UTM_Medium=share',
  food99: 'https://oia.99app.com/dlp9/6CalHf?share_media=WHATSAPP',
  ninetyNineFood: 'https://oia.99app.com/dlp9/6CalHf?share_media=WHATSAPP',
  
  // Structured helpers for flexibility
  apps: {
    ifood: {
      name: 'iFood',
      url: 'https://www.ifood.com.br/delivery/brasilia-df/arcanjos-caixa-de-hamburguer-aguas-claras/e98b15b6-0587-4029-98d5-b51babde3a29?UTM_Medium=share',
      brandColor: '#EA1D2C',
    },
    ninetyNineFood: {
      name: '99Food',
      url: 'https://oia.99app.com/dlp9/6CalHf?share_media=WHATSAPP',
      brandColor: '#FF9600',
    },
  },
};

export const STORE_ADDRESS = {
  full: 'R. das Paineiras, 6b - Águas Claras, Brasília - DF, 71918-000, Brasil',
  street: 'R. das Paineiras, 6b',
  neighborhood: 'Águas Claras',
  cityState: 'Brasília - DF',
  cep: '71918-000',
  country: 'Brasil',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=R.+das+Paineiras,+6b+-+%C3%81guas+Claras,+Bras%C3%ADlia+-+DF,+71918-000',
  googleMapsEmbedUrl: 'https://maps.google.com/maps?q=R.+das+Paineiras,+6b+-+%C3%81guas+Claras,+Bras%C3%ADlia+-+DF,+71918-000&t=&z=16&ie=UTF8&iwloc=&output=embed',
};
