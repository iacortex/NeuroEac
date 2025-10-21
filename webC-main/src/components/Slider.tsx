import { Button } from "@chakra-ui/react";
import { Logo } from "./logo";
import ShinyText from "./ShinyText";
import { motion } from "framer-motion";

export default function Slider() {
  return (
    <section className="relative grid lg:grid-cols-2 grid-cols-1 md:grid-cols-1 my-10 pb-48">
      <img
        src="bgs/bg02.jpeg"
        alt="bg-planet"
        className="pointer-events-none absolute animate-pulse -left-[15%] -top-20 opacity-40 z-0  w-[500px] h-[500px] blur-2xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="relative flex flex-col  sm:w-full md:w-full lg:max-w-xl">
          <ShinyText
            text="Bienvenido"
            disabled={false}
            speed={3}
            className=" lg:text-left text-center "
          />
          <ShinyText
            text="Neuro"
            disabled={false}
            speed={3}
            className="text-center font100 font-semibold lg:text-left  text-5xl -mx-2 leading-[0.8]"
          />
          <ShinyText
            text="E A C"
            disabled={false}
            speed={3}
            className="font200 text-center font-bold lg:text-left text-[100px] leading-[0.8]  -mx-2  "
          />
          <ShinyText
            text=" En Neuro-EAC combinamos Inteligencia Artificial, automatización y seguridad avanzada para crear sistemas inteligentes que optimizan, conectan y protegen.Con tecnología satelital, drones y análisis de datos, transformamos la innovación en soluciones reales.Tecnología que evoluciona contigo. Gracias a nuestro dominio en ciberseguridad, drones, GPS satelitales y sistemas autónomos, ayudamos a empresas e industrias a evolucionar hacia un modelo más seguro, inteligente y conectado.
En Neuro-EAC, creemos que la tecnología no solo debe avanzar, sino también entender y adaptarse al mundo que la rodea."
            disabled={false}
            speed={3}
          />
          <div className="flex gap-5 mt-10 justify-center  lg:justify-start">
            <Button className="bg-white text-black hover:bg-neutral-200">
              Inicia con nosotros
            </Button>
            <Button variant={"outline"} className="text-white hover:text-black">
              Ver más
            </Button>
          </div>
        </div>
      </motion.div>
      <div className="relative  lg:flex -z-10 justify-center items-center">
        <img
          className="absolute  pointer-events-none blur-xl rounded-2xl  lg:top-0 left-0"
          src="planet.jpeg"
          alt="Planeta"
        />
        <Logo className="hidden lg:block" />
      </div>
    </section>
  );
}
