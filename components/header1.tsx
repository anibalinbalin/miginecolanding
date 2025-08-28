import Image from "next/image";

export const Header1 = () => {
return (
    <header className="w-full z-40 fixed top-0 left-0 bg-background">
    <div className="container relative mx-auto px-4 lg:px-0 min-h-20 flex items-center justify-center">
        <div className="flex justify-center">
        <Image
            src="/alogo_rosado.svg"
            alt="Logo"
            width={36}
            height={12}
            className="h-auto"
        />
        </div>
    </div>
    </header>
);
};
