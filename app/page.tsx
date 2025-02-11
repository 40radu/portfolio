import Hero from "@/section/Hero";
import Background from "./components/common/Background";
import Skill from "./components/section/Skill";
import Heading from "./components/common/Heading";

export default function Home() {
  return (
    <>
      <Background />
      <Hero />
      <Skill/>
      <Heading description='Vous trouverez ci-après la liste de mes compétence' label='Projet' />
      
    </>
  );
}
