import { Badge } from "@/components/ui/badge";

export const Feature3 = () => (
  <div className="w-full py-12 lg:py-40">
    <div className="container mx-auto px-4 lg:px-0">
      <div className="flex flex-col-reverse lg:flex-row gap-10 lg:items-center">
        <div className="bg-muted rounded-md w-full aspect-video h-full flex-1"></div>
        <div className="flex gap-4 pl-0 lg:pl-20 flex-col  flex-1">
          <div>
            <Badge>Platform</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="custom-headline tracking-tighter lg:max-w-xl text-left">
              Tu embarazo, fácil y conectado
            </h2>
            <p className="text-lg max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
              Todas tus ecografías, estudios y visitas —todo en un solo lugar. Mi Gineco es tu portal para estar al dia y siempre accesible.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
