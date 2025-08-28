import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero1 = () => (
  <div className="w-full">
    <div className="container mx-auto px-4 lg:px-0">
      <div className="flex gap-8 py-12 lg:py-40 items-center justify-center flex-col">
        <div>
          <a href="https://mi.gineco.uy" target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" size="sm" className="gap-4">
              mi.gineco.uy <MoveRight className="w-4 h-4" />
            </Button>
          </a>
        </div>
        <div className="flex gap-4 flex-col">
          <h1 
            className="custom-headline max-w-2xl tracking-tighter text-center"
            dangerouslySetInnerHTML={{ __html: "Tu embarazo,<br />fácil y conectado" }}
          />
          <p className="custom-paragraph max-w-xl text-center">
            Todas tus ecografías, estudios y visitas —todo en un solo lugar. Mi Gineco es tu portal para estar al dia y siempre accesible.
          </p>
        </div>
      </div>
    </div>
  </div>
);
