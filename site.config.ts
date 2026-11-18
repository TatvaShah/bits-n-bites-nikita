import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Bits N Bites",
  tagline: "Small batch cakes, cheesecakes and banana bread in Brampton.",
  category: "Custom cakes and treats",
  schemaType: "Bakery",
  area: "Brampton, ON",
  siteUrl: "https://bits-n-bites-nikita-ca.vercel.app",

  theme: {
    preset: "bakery-pastel",
    colors: { accent: "#d9bbab" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: true,

  hero: {
    eyebrow: "Sweet bites in Brampton",
    headline: "Small batch cakes, cheesecakes and banana bread",
    subhead: "Bits N Bites bakes custom cakes, cheesecakes and banana bread in small batches in Brampton. Send an Instagram message to order.",
    images: [
      { src: "/images/post-2.jpg", alt: "A Spider-Gwen themed birthday cake from Bits N Bites", width: 720, height: 720 },
      { src: "/images/post-4.jpg", alt: "A chocolate cake with lavender buttercream from Bits N Bites", width: 720, height: 960 },
      { src: "/images/post-7.jpg", alt: "A custom anniversary cake from Bits N Bites", width: 1080, height: 814 },
    ],
    secondaryCta: { label: "See the bakes", href: "#gallery" },
  },

  highlights: [
    "Small batch cakes and treats in Brampton",
    "Custom themed cakes, including recent Spider-Gwen work",
    "Lotus Biscoff cheesecake and chocolate chip banana bread",
    "Order by Instagram DM",
  ],

  about: {
    title: "Welcome to Bits N Bites",
    body: [
      "Bits N Bites is a Brampton home bakery making small batches of cakes, cheesecakes and other sweet bites. Recent work has included a Spider-Gwen themed birthday cake, a chocolate cake filled and coated with lavender buttercream, chocolate chip banana bread, a Lotus Biscoff cheesecake, and a custom anniversary cake with green piping and silver heart accents.",
      "Send an Instagram message to order.",
    ],
    image: { src: "/images/post-2.jpg", alt: "A Spider-Gwen themed birthday cake from Bits N Bites", width: 720, height: 720 },
  },

  menu: {
    label: "Menu",
    title: "What we bake",
    variant: "list",
    showPrices: false,
    priceNote: "Send an Instagram message for a quote on your date and order.",
    groups: [
      {
        title: "Cakes",
        items: [
          { name: "Custom themed cakes", description: "Recent work has included a Spider-Gwen birthday cake." },
          { name: "Chocolate cake with lavender buttercream" },
          { name: "Anniversary cakes" },
        ],
      },
      {
        title: "Other bites",
        items: [
          { name: "Lotus Biscoff cheesecake" },
          { name: "Chocolate chip banana bread" },
        ],
      },
    ],
  },

  gallery: {
    title: "Recent bakes",
    items: [
      { src: "/images/post-2.jpg", width: 720, height: 720, alt: "A Spider-Gwen themed birthday cake from Bits N Bites", caption: "A Spider-Gwen cake", href: "https://www.instagram.com/p/DfdT76VG_0h/" },
      { src: "/images/post-4.jpg", width: 720, height: 960, alt: "A chocolate cake with lavender buttercream from Bits N Bites", caption: "Chocolate and lavender", href: "https://www.instagram.com/p/DbEzeWdCYtE/" },
      { src: "/images/post-3.jpg", width: 1080, height: 607, alt: "Chocolate chip banana bread from Bits N Bites", caption: "Chocolate chip banana bread", href: "https://www.instagram.com/p/DbOYIpPCbwd/" },
      { src: "/images/post-6.jpg", width: 1080, height: 1920, alt: "Lotus Biscoff cheesecake from Bits N Bites", caption: "Lotus Biscoff cheesecake", href: "https://www.instagram.com/reel/DZ5coX5JuhZ/" },
      { src: "/images/post-7.jpg", width: 1080, height: 814, alt: "A custom anniversary cake from Bits N Bites", caption: "An anniversary cake", href: "https://www.instagram.com/p/DS1bI9wjhbl/" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "bits.n.bites.nikita",
    embeds: ["https://www.instagram.com/p/DfdT76VG_0h/", "https://www.instagram.com/p/DbEzeWdCYtE/", "https://www.instagram.com/reel/DZ5coX5JuhZ/"],
  },

  order: {
    label: "How to order",
    title: "Order by Instagram DM",
    intro: "Send an Instagram message with your date and what you would like to order. Bits N Bites is based in Brampton.",
    dmMessage: "Hi Bits N Bites! I would like to order.\nDate needed:\nCake or treats:",
    links: [
      { label: "Order by Instagram DM", href: "https://ig.me/m/bits.n.bites.nikita" },
    ],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I order?", a: "Send an Instagram message with your date and what you would like to order." },
    { q: "Where are you based?", a: "Bits N Bites is based in Brampton." },
    { q: "What do you bake?", a: "Custom themed cakes, cheesecakes such as Lotus Biscoff, chocolate chip banana bread, and other small batch treats." },
  ],

  contact: {
    title: "Contact",
    area: "Brampton, ON",
    socials: [{ label: "Instagram", href: "https://www.instagram.com/bits.n.bites.nikita/" }],
  },

  seo: {
    title: "Bits N Bites | Small batch cakes and cheesecakes in Brampton",
    description: "Small batch custom cakes, Lotus Biscoff cheesecake and chocolate chip banana bread in Brampton. Order by Instagram DM.",
    keywords: ["custom cakes Brampton", "Biscoff cheesecake Brampton", "Bits N Bites"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
