import Image from "next/image";
import ResponsiveNav from "./components/navigation/ResponsiveNav";
import Start from "./components/start/Start";

export default function Home() {
  return (
    <div >
      <main className="flex flex-col items-center justify-center ">
        <div className="mt-32">
          <Start /> 
        </div>
               
      </main>
 
    </div>
  );
}
