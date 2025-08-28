import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export const Feature4Custom = () => (
  <div className="w-full pb-12 lg:pb-40">
    <div className="container mx-auto px-4 lg:px-0">
      <div className="flex flex-col lg:flex-row gap-10 lg:items-center">
        <div className="flex gap-4 flex-col flex-1">
          <div>
            <Badge variant="outline">Practicidad</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="custom-feature-title tracking-tighter lg:max-w-lg text-left">
              Información práctica, todos por tus datos
            </h2>
            <p className="custom-paragraph max-w-xl lg:max-w-sm text-left">
              Tus datos y tu embarazo tienen una historia que contar. mi.gineco analiza tus registros para brindar información personalizada—detectando tendencias.
            </p>
          </div>
        </div>
        <div className="w-full flex-1 flex items-center justify-center">
          <Image
            src="/a1.png"
            alt="Información práctica"
            width={600}
            height={400}
            className="rounded-md object-contain w-full h-auto"
          />
        </div>
      </div>
    </div>
  </div>
);
