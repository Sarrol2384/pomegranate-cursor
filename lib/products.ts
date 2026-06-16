export type Garment = {
  id: string;
  name: string;
  note: string;
  description: string;
  image: string;
  price: number;
  featured?: boolean;
};

const prices = {
  pinstripe: 1280,
  slateBlue: 1180,
  medallion: 1450,
  navy: 980,
  lace: 1680,
} as const;

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export const garments: Garment[] = [
  {
    id: "pinstripe-bomber",
    name: "Grey Pinstripe Bomber",
    note: "Fine pinstripe · All seasons",
    description:
      "A lightweight bomber in grey and white pinstripe with a mandarin collar and contrast white zip. Elasticated cuffs and hem, side pockets, and a relaxed fit made for everyday layering.",
    image: "/products/pinstripe-main.png",
    price: prices.pinstripe,
    featured: true,
  },
  {
    id: "pinstripe-bomber-close",
    name: "Grey Pinstripe Bomber",
    note: "Fine pinstripe · Detail view",
    description:
      "The same pinstripe bomber, shown up close — crisp collar, clean zip line, and the subtle texture of the striped fabric up close.",
    image: "/products/pinstripe-close-up.png",
    price: prices.pinstripe,
  },
  {
    id: "pinstripe-bomber-open",
    name: "Grey Pinstripe Bomber",
    note: "Fine pinstripe · Worn open",
    description:
      "Worn open over a navy tee, this pinstripe bomber shows how it layers — easy, structured, and finished by hand in our Strand studio.",
    image: "/products/pinstripe-open.png",
    price: prices.pinstripe,
  },
  {
    id: "slate-blue-bomber",
    name: "Slate Blue Bomber",
    note: "Solid cotton blend · All seasons",
    description:
      "A soft slate-blue bomber with a white zip, stand collar, and gathered cuffs. Lightweight enough for coastal mornings, polished enough for an evening out.",
    image: "/products/solid-blue-main.png",
    price: prices.slateBlue,
    featured: true,
  },
  {
    id: "slate-blue-bomber-side",
    name: "Slate Blue Bomber",
    note: "Solid cotton blend · Side profile",
    description:
      "Side view of the slate blue bomber — note the clean pocket line, the gentle drape of the fabric, and the elastic hem that sits just right on the hip.",
    image: "/products/solid-blue-side.png",
    price: prices.slateBlue,
  },
  {
    id: "slate-blue-bomber-open",
    name: "Slate Blue Bomber",
    note: "Solid cotton blend · Worn open",
    description:
      "The slate blue bomber worn open, showing the contrast zip tape and how the jacket moves when you do.",
    image: "/products/solid-blue-open.png",
    price: prices.slateBlue,
  },
  {
    id: "medallion-bomber",
    name: "Gold Medallion Bomber",
    note: "Printed cotton · Statement piece",
    description:
      "A bold bomber in navy with an all-over gold medallion print. Zip front, side pockets, and elastic cuffs — handmade in small batches, each one slightly unique.",
    image: "/products/patterned-main.png",
    price: prices.medallion,
    featured: true,
  },
  {
    id: "medallion-bomber-open",
    name: "Gold Medallion Bomber",
    note: "Printed cotton · Worn open",
    description:
      "The medallion bomber worn open over a navy base layer — the print catches the light and the fit stays easy through the shoulders.",
    image: "/products/patterned-open.png",
    price: prices.medallion,
  },
  {
    id: "medallion-bomber-detail",
    name: "Gold Medallion Bomber",
    note: "Printed cotton · Pocket detail",
    description:
      "A close look at the medallion print and slanted side pocket — printed, cut, and sewn by hand in our studio.",
    image: "/products/patterned-detail.png",
    price: prices.medallion,
  },
  {
    id: "lace-bomber",
    name: "Floral Lace Bomber",
    note: "Sheer lace · Hand-embroidered · Made in South Africa",
    description:
      "A statement bomber in sheer white lace with bold black floral embroidery and a delicate polka-dot mesh. Black ribbed collar, zip front, and scalloped hem — handmade in our Strand studio.",
    image: "/products/lace-bomber-front.png",
    price: prices.lace,
    featured: true,
  },
  {
    id: "lace-bomber-open",
    name: "Floral Lace Bomber",
    note: "Sheer lace · Worn open",
    description:
      "The lace bomber worn open over a black base layer — the embroidery and sheer fabric create depth and movement with every step.",
    image: "/products/lace-bomber-open.png",
    price: prices.lace,
  },
  {
    id: "lace-bomber-back",
    name: "Floral Lace Bomber",
    note: "Sheer lace · Back view",
    description:
      "The back view shows the full sweep of hand-embroidered florals across the shoulders and sleeves — each jacket finished with care in small batches.",
    image: "/products/lace-bomber-back.png",
    price: prices.lace,
  },
  {
    id: "navy-zip-bomber",
    name: "Navy Zip Bomber",
    note: "Soft jersey · All seasons",
    description:
      "A deep navy zip-up with a ribbed varsity collar and matching zip. Soft against the skin, structured at the cuffs — the kind of piece you reach for every day.",
    image: "/products/navy-main.png",
    price: prices.navy,
  },
  {
    id: "navy-zip-bomber-detail",
    name: "Navy Zip Bomber",
    note: "Soft jersey · Collar detail",
    description:
      "A close look at the ribbed collar and silver zip — soft navy jersey, finished by hand in our Strand studio.",
    image: "/products/navy-close-up-new.png",
    price: prices.navy,
  },
  {
    id: "navy-zip-bomber-close",
    name: "Navy Zip Bomber",
    note: "Soft jersey · Close-up",
    description:
      "The navy bomber up close — relaxed fit, ribbed cuffs, and a zip that sits flat against the body.",
    image: "/products/navy-close-up.png",
    price: prices.navy,
  },
];

export function getFeaturedGarments(): Garment[] {
  return garments.filter((g) => g.featured);
}

export function getGarmentById(id: string): Garment | undefined {
  return garments.find((g) => g.id === id);
}
