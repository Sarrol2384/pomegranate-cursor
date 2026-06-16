/** Site imagery — product photos live in /products and are defined in lib/products.ts */
export const images = {
  home: {
    hero: "/products/reversible-bomber-hero.png",
    heroAlt: "Reversible bomber jacket collection — solid and pinstripe sides, handmade by Promegranate Boutique",
    maker: "/products/pinstripe-close-up.png",
    makerAlt: "Close-up of a handmade pinstripe jacket",
  },
  lookbook: {
    hero: "/products/patterned-main.png",
    heroAlt: "Handmade medallion-pattern bomber jacket",
  },
  about: {
    hero: "/products/solid-blue-main.png",
    heroAlt: "Handmade slate blue bomber jacket",
    maker: "/products/pinstripe-close-up.png",
    makerAlt: "Portrait showcasing a handmade jacket",
    process: {
      sketch: "/products/patterned-open.png",
      sketchAlt: "Jacket design laid open to show construction",
      fabric: "/products/patterned-detail.png",
      fabricAlt: "Detail of handcrafted patterned fabric",
      stitch: "/products/navy-close-up.png",
      stitchAlt: "Close-up of zip and collar stitching on a navy jacket",
    },
  },
  contact: {
    hero: "/products/solid-blue-open.png",
    heroAlt: "Handmade jacket worn open in the studio",
  },
} as const;
