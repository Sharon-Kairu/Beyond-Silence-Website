import Image from "next/image";
import ResponsiveNav from "./components/navigation/ResponsiveNav";
import Start from "./components/start/Start";
import About from "./components/about/About"

export default function Home() {
  return (
    
      <main className="relative z-10 flex flex-col ">
        <div className="relative z-[20000]">
          <Start />
          <About/>
        </div>
      </main>
   
  );
}
