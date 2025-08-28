import Image from "next/image";
import { Header1 } from "@/components/header1";
import { Footer } from "@/components/footer";
import { Hero1 } from "@/components/hero1";
import { Hero2 } from "@/components/hero2";
import { Feature3 } from "@/components/feature3";
import { Feature3Custom } from "@/components/feature3-custom";
import { Feature3Custom2 } from "@/components/feature3-custom2";
import { Feature4 } from "@/components/feature4";
import { Feature4Custom } from "@/components/feature4-custom";
import { Feature4Custom2 } from "@/components/feature4-custom2";

export default function Home() {
  return (
    <>
      <Header1 />
      <main className="pt-20">
      <Hero1 />
      <div className="w-full flex justify-center pb-12 lg:pb-20 px-4 lg:px-0">
        <div className="relative inline-block">
          <Image
            src="/ahero.png"
            alt="Hero image"
            width={480}
            height={360}
            className="max-w-full h-auto"
            priority
          />
          
          {/* Floating badges with questions */}
          <div className="absolute -top-4 sm:-top-6 left-2 sm:-left-16 floating-badge-1">
            <div className="px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm whitespace-normal sm:whitespace-nowrap break-words max-w-[80vw] sm:max-w-none shadow-lg text-white bg-[#948e89]/90 backdrop-blur-sm flex items-center justify-center text-center leading-snug">
              ¿Cómo está el percentil respecto al semestre anterior?
            </div>
          </div>
          
          <div className="absolute top-16 sm:top-8 right-2 sm:-right-12 floating-badge-2">
            <div className="px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm whitespace-normal sm:whitespace-nowrap break-words max-w-[80vw] sm:max-w-none shadow-lg text-white bg-[#948e89]/90 backdrop-blur-sm flex items-center justify-center text-center leading-snug">
              ¿Dónde están las ecografías?
            </div>
          </div>
          
          <div className="absolute top-1/3 right-2 sm:-right-14 floating-badge-3">
            <div className="px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm whitespace-normal sm:whitespace-nowrap break-words max-w-[80vw] sm:max-w-none shadow-lg text-white bg-[#948e89]/90 backdrop-blur-sm flex items-center justify-center text-center leading-snug">
              ¿Cuándo es mi próxima ecografía?
            </div>
          </div>
          
          <div className="absolute top-1/3 sm:top-1/2 left-2 sm:-left-12 sm:transform sm:-translate-y-1/2 floating-badge-4">
            <div className="px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm whitespace-normal sm:whitespace-nowrap break-words max-w-[80vw] sm:max-w-none shadow-lg text-white bg-[#948e89]/90 backdrop-blur-sm flex items-center justify-center text-center leading-snug">
              ¿Qué significan estos valores?
            </div>
          </div>
        </div>
      </div>
      <Feature3Custom />
      <Feature4Custom />
      <Feature3Custom2 />
      <Feature4Custom2 />
      <Hero2 />
      </main>
      <Footer />
    </>
  );
}
