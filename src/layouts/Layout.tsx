import { useEffect, useState } from "react";
import { BackgroundLayout } from "./BackgroundLayout";
import { Header } from "./Header";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

export function Layout({ children }: LayoutProps) {

  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 


  return (
    <>
      <BackgroundLayout />
      <main className="relative min-h-svh w-full bg-black/80 backdrop-blur-xl pt-5">
        <Header />
        <div className="relative z-50 mt-10 max-w-7xl mx-auto">{children}</div>
        <div className="absolute bottom-0 left-0 right-0 w-full h-1/2 bg-gradient-to-t from-blue-600/80 to-transparent" />

        <div className="*:flex justify-center items-center"></div>

        <footer className="relative min-h-96 w-full bg-black/50 z-20">
          
        </footer>

      </main>
      {
        isVisible && (
          <div className="fixed z-50 bottom-5 left-0 w-full flex justify-center items-center ">
            <nav className="bg-gradient-to-r from-transparent via-blue-600 to-transparent shadow-xl shadow-blue-800/60 backdrop-blur-lg rounded-full 
            border-t border-black/5" >
              <ul className="flex justify-center text-xs items-center space-x-10 py-2  text-white px-10 ">
                <li ><a className="py-2" href="#">Inicio</a></li>
                <li ><a className="py-2" href="#">Servicio</a></li>
                <li ><a className="py-2" href="#">Neuro EAC</a></li>
                <li ><a className="py-2" href="#">Contacto</a></li>
              </ul>
            </nav>
          </div>
        )
      }
    </>
  );
}
