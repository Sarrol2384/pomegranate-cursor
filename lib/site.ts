const whatsappMessage =
  "Hi Promegranate Boutique! I found you on your website and would love to enquire about your handmade clothing.";

export const site = {
  name: "Promegranate Boutique",
  shortName: "Promegranate",
  tagline: "Handmade clothing, one piece at a time.",
  email: "pomegranate@vonwillingh.co.za",
  address: {
    venue: "The Junction",
    street: "86 Beach Road",
    city: "Strand",
    postalCode: "7140",
    country: "South Africa",
    full: "The Junction, 86 Beach Road, Strand, 7140",
  },
  mapEmbedUrl:
    "https://maps.google.com/maps?q=The+Junction,+86+Beach+Road,+Strand,+7140,+South+Africa&hl=en&z=16&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=The+Junction,+86+Beach+Road,+Strand,+7140,+South+Africa",
  whatsapp: {
    display: "072 977 3576",
    defaultMessage: whatsappMessage,
    url: `https://wa.me/27729773576?text=${encodeURIComponent(whatsappMessage)}`,
  },
} as const;
