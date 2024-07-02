// import Title from "@/Components/Global/Title/Title";
// import Logo from "@/Components/Logo/Logo";
// import MenuBar from "@/Components/Menu/MenuBar";
// import Image from "next/image";
// import Button from "@/Components/Global/Button/Button";
// import ButtonSend from "@/Components/Contact/Button/ButtonSend";
// import Input from "@/Components/Contact/Input/Input";
// import TextArea from "@/Components/Contact/Text-Area/TextArea";
// import LogoSkills from "@/Components/Skills/LogoSkills/LogoSkills";
// import SocialMedia from "@/Components/Global/SocialMedia/SocialMedia";
import StatutResponse from "@/Components/Contact/StatutResponse/StatutResponse";
import Logo from "@/Components/Logo/Logo";
import About from "@/Components/Pages/About/About";
import Contact from "@/Components/Pages/Contact/Contact";
import Dashboard from "@/Components/Pages/Home/Dashboard";
import Skills from "@/Components/Pages/Skills/Skills";
// import Animation from "./Animation";



export default function Home() {
  return (
    <main >
      {/* <Animation/> */}
      {/* <SocialMedia/> */}
      <Dashboard />
      {/* <About/>
      <Skills/>
      <Contact/> */}
      {/* <StatutResponse isError={true}/> */}
      {/* <Logo/> */}
      
    </main>
  );
}



{/* <h1 className="home">home</h1>

      <div className="div"></div>

      <Logo />

      <MenuBar />

      <Title title={'Contact'} underTitle={'get in touch'} description={'[[  HERe, you can contact me  ]]'}/>

      <Button
        className={'btn-primary'}
        type={'button'}
        value={'Contact'}
      />

      <Button
        className={'btn-secondary'}
        type={'button'}
        value={'Download CV'}
      />
      <br />
      <LogoSkills icon={"git"}/>
      <LogoSkills icon={"gitHub"}/>
      <LogoSkills icon={"react"}/>
      <LogoSkills icon={"sass"}/>

<br />

      <ButtonSend/>
      <br />


      <Input placeholder={'email'}/>
      <br />
      <Input placeholder={'user'}/> 
      <br />
      
      
      <TextArea/>
      <br /> */}
