import { CardProjectProps } from "@/app/components/card/CardProject";

const dataProjectList: CardProjectProps[] = [
  {
    description: "Projet réalisé lors de mon stage chez Saha Technology, proposant un parcours structuré, des tutoriels interactifs et des exercices pratiques pour l’auto-apprentissage du développement web.",
    title: "Hianatra",
    imageSrc: "/hianatra.png",
    link: "https://hianatra-landing.vercel.app",
    tech: ["Nextjs", "Typescript", "Sass", "Tailwindcss", "Swiperjs"]
  },
  {
    description: "Site interactive simulant l’achat de guitares en ligne, permettant aux utilisateurs de parcourir un catalogue, ajouter des articles à leur panier et finaliser leur commande.",
    title: "I-music",
    imageSrc: "/music.png",
    link: "https://imusical.vercel.app",
    tech: ["Nextjs", "Typescript", "Sass", "Tailwindcss", "Swiperjs", "Zustand", "Gsap"]
  },
]
export { dataProjectList }