import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export const Feature3Custom = () => (
  <div className="w-full pb-12 lg:pb-40">
    <div className="container mx-auto px-4 lg:px-0">
      <div className="flex flex-col-reverse lg:flex-row gap-10 lg:items-center">
        <div className="w-full flex-1 flex items-center justify-center">
          <Image
            src="/a0.png"
            alt="Registros médicos"
            width={600}
            height={400}
            className="rounded-md object-contain w-full h-auto"
          />
        </div>
        <div className="flex gap-4 pl-0 lg:pl-20 flex-col  flex-1">
          <div>
            <Badge variant="outline">Plataforma</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="custom-feature-title tracking-tighter lg:max-w-lg text-left">
              Todos tus registros médicos en un solo lugar
            </h2>
            <p className="custom-paragraph max-w-xl lg:max-w-sm text-left">
              mi.gineco es tu conexión directa con tu ginecólogo. Lo que tu profesional reporta es exactamente lo que ves en un perfil. Tenés un seguimiento del embarazo en tiempo real, fácil y amigable.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
