import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export const Hero2 = () => (
  <div className="w-full">
    <div className="container mx-auto px-4 lg:px-0">
      <div className="flex gap-8 pb-12 lg:pb-40 items-center justify-center flex-col">
        <div>
          <Badge variant="outline">Propósito</Badge>
        </div>
        <div>
          <h1 className="custom-headline max-w-2xl tracking-tighter text-center">
            Porqué creamos mi.gineco
          </h1>
        </div>
        <div className="w-full flex justify-center py-10">
          <video
            src="/avideo.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="max-w-full h-auto rounded-md"
            width={640}
            height={360}
          />
        </div>
        <div className="flex gap-4 flex-col">
          <p className="custom-paragraph max-w-2xl text-center">
            Creamos mi.gineco para que tu embarazo sea único. Para que tengas tus datos siempre, puedas entender en qué etapa estás. Para que puedas entender por qué y que debes esperar de cada una.
          </p>
          <p className="custom-paragraph max-w-2xl text-center">
            Es más que una extensión de los informes. Es una vinculo mas estrecho con tu profesional de confianza.
          </p>
        </div>
        <div className="w-full flex justify-center py-10">
          <Image
            src="/afooter.png"
            alt="Footer image"
            width={1040}
            height={520}
            className="max-w-full h-auto rounded-md"
          />
        </div>
      </div>
    </div>
  </div>
);
