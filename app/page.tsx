import Image from "next/image";
import ResponsiveNav from "./components/navigation/ResponsiveNav";
import Start from "./components/start/Start";
import About from "./components/about/About"
import Team from "./components/Team/Team";
import Services from "./components/services/Services";
import Donations from "./components/donations/Donations";

export default function Home() {
  return (
    
      <main className="relative z-10 flex flex-col ">
        <div className="relative z-[20000]">
          <Start />
          <About/>
          <Services/>
          <Team/>
          <Donations/>
        </div>
      </main>
   
  );
}
