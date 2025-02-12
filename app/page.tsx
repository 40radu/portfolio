import Hero from "@/section/Hero";
import Background from "./components/common/Background";
import Skill from "@/section/Skill";
import Service from "@/section/Service";

export default function Home() {
  return (
    <>
      <Background />
      <Hero />
      <Skill/>
      <Service/>
    </>
  );
}
