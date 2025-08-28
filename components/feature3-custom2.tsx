import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export const Feature3Custom2 = () => (
  <div className="w-full pb-12 lg:pb-40">
    <div className="container mx-auto px-4 lg:px-0">
      <div className="flex flex-col-reverse lg:flex-row gap-10 lg:items-center">
        <div className="w-full flex-1 flex items-center justify-center">
          <Image
            src="/a2.png"
            alt="Datos complejos algo simple"
            width={600}
            height={400}
            className="rounded-md object-contain w-full h-auto"
          />
        </div>
        <div className="flex gap-4 pl-0 lg:pl-20 flex-col  flex-1">
          <div>
            <Badge variant="outline">Para ti</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="custom-feature-title tracking-tighter lg:max-w-lg text-left">
              Datos complejos algo simple
            </h2>
            <p className="custom-paragraph max-w-xl lg:max-w-sm text-left">
              mi.gineco presenta tu historial médico tal como lo documenta tu ginecólogo—completo, claro y simple, con una hoja de ruta de como va tu embarazo, como esta creciendo tu bebé, qué valores representan qué, para que puedas entender lo que tu cuerpo ha estado diciendo todo el tiempo.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
