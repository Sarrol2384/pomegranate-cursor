const whatsappMessage =
  "Hi Promegranate Boutique! I found you on your website and would love to enquire about your handmade clothing.";

export const site = {
  name: "Promegranate Boutique",
  shortName: "Promegranate",
  tagline: "Handmade clothing, one piece at a time.",
  madeIn: "Made in South Africa",
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
  hours: [
    "Monday – Thursday: 9am – 5pm (closed for lunch 1pm – 1:30pm)",
    "Friday: 9am – closes between 1pm and 2pm",
    "Saturday: 9am – 3pm",
    "Sunday: By appointment only",
  ],
} as const;
