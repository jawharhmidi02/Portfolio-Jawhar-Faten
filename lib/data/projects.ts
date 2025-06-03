import { translations } from "@/app/translations";

export const projectsData = [
  {
    title: "Burger Casa",
    description: translations.en.projects.burgerCasa,
    tech: ["NestJs", "NestJs", "SupaBase", "TypeOrm"],
    image: "/burger-casa.png",
    link: "https://burger-casa-front.vercel.app/",
  },
  {
    title: "Arte in Casa Tua",
    description: translations.en.projects.arteCasa,
    tech: ["Next.js", "SupaBase", "Tailwind CSS"],
    image: "/arte-casa.png",
    link: "https://www.arteincasatua.com/",
  },
  {
    title: "Reservy",
    description: translations.en.projects.reservy,
    tech: ["NextJs", "NestJs", "SupaBase", "Shadcn/ui"],
    image: "/reservy-hotel.png",
    link: "https://reservy-hotel.vercel.app/",
  },
  {
    title: "Recipe Vault",
    description: translations.en.projects.recipeVault,
    tech: ["NextJs", "NestJs", "PostgreSQL", "Cloudinary"],
    image: "/recipe-vault.png",
    link: "https://isimed-recipevault.vercel.app/",
  },
  {
    title: "Give Us Hope",
    description: translations.en.projects.giveUsHope,
    tech: ["HTML", "CSS", "JS", "MongoDB", "Node.js"],
    image: "/give-hope.png",
    link: "https://github.com/jawharhmidi02/give-us-hope",
  },
];
