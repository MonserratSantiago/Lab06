import Image from "next/image";
import HeaderModule from "./Components/Header/Header";
import HeroModule from "./Components/Hero/Hero";
import CvModule from "./Components/Cv/Cv";
import InterestsModule from "./Components/Interests/Interests";
import ContactModule from "./Components/Contact/Contact";


export default function Home() {
  return (
   <>
   <HeaderModule />
   <HeroModule />
   <CvModule/>
   <InterestsModule/>
   <ContactModule/>
   </> 
  );
}
