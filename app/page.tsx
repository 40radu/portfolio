import Hero from "@/section/Hero";
import Background from "./components/common/Background";
import Heading from "./components/common/Heading";
import Icon from "./components/Icon";

export default function Home() {
  return (
    <>
      <Background />
      <Hero />
      <Heading description="Vous trouverez ci-après la liste de mes compétences" label="Compétences"/>
      <Icon name="next"/>
    </>
  );
}
