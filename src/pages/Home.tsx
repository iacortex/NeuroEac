import CardService from "@/components/CardService";
import Slider from "@/components/Slider";
import BlurText from "@/components/TitlesStyles";
import { HStack, Separator, Text } from "@chakra-ui/react";
import { Handshake, HeartIcon } from "lucide-react";
import { motion } from "motion/react"

export default function Home() {

  return (
    <>
      <main className="px-10 mt-32">
        <Slider />
        <section>

          <div className="flex flex-col justify-center items-center">
            <BlurText
              className=" text-blue-600"
              direction="top"
              text="Cómo funciona"
            />
            <BlurText
              className=" text-2xl font-bold text-slate-100 sm:text-4xl sm:leading-tight"
              direction="bottom"
              text="Neuro EAC"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}

          >
            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-20" >
              <img src="bgs/bg01.jpeg" alt="bg-planet" className="absolute  pointer-events-none right-0 z-0 w-[800px] h-full blur-2xl" />

              <div className="relative flex flex-col items-center justify-start gap-5">
                <p>
                  En Neuro-EAC diseñamos sistemas inteligentes capaces de analizar, aprender y adaptarse. A través de tecnologías como Inteligencia Artificial, visión computacional y monitoreo satelital, convertimos grandes volúmenes de datos en decisiones automatizadas que optimizan procesos, reducen errores y aumentan la eficiencia operativa.
                </p>
                <p>
                  Nuestra plataforma integra drones, sensores y redes seguras con algoritmos avanzados que garantizan control, trazabilidad y seguridad en tiempo real. Este enfoque nos permite conectar el mundo digital con el físico, logrando soluciones precisas y sostenibles que transforman la forma en que las industrias operan.
                </p>
              </div>
              <div className="relative flex  items-center justify-center ">
                <img src="logo.svg" alt="Logo" className="w-64" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <div className="flex flex-col gap-1 mb-20 ">
              <BlurText
                className=" text-blue-600" direction="top"
                text="Nuestros"
              />
              <BlurText
                className=" text-2xl font-bold text-slate-100 sm:text-4xl sm:leading-tight" direction="bottom"
                text="Servicios"
              />
              <div className="relative grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 lg:gap-28 gap-20 mt-10 py-20">
                <img src="planet.jpeg" alt="bg-planet" className="absolute  pointer-events-none z-1 w-full h-full object-cover blur-xl" />
                <CardService
                  title="🧠 Inteligencia Artificial"
                  description="Desarrollamos sistemas basados en IA y aprendizaje automático capaces de analizar datos, detectar patrones y optimizar decisiones en tiempo real. Nuestras soluciones aprenden, evolucionan y se adaptan a las necesidades de cada cliente."
                  image="svg/api.svg"
                />
                <CardService  
                  title="☁️ Computación en la Nube"
                  description="Implementamos infraestructura cloud segura y escalable, diseñada para soportar aplicaciones críticas, almacenar datos con respaldo continuo y garantizar la disponibilidad total de tus sistemas desde cualquier lugar."
                  image="svg/nube.svg"
                />
                <CardService
                  title="🔒 Ciberseguridad y Protección de Datos"
                  description="Ofrecemos soluciones integrales de seguridad informática, detección de amenazas y cifrado avanzado. Protegemos tus sistemas, redes y servidores frente a ataques, vulnerabilidades y accesos no autorizados."
                  image="svg/seguro.svg"
                />
                <CardService
                  title="⚙️ Integración de APIs"
                  description="Creamos e integramos APIs personalizadas que conectan plataformas, dispositivos y servicios. Automatizamos flujos de trabajo y mejoramos la interoperabilidad entre sistemas para lograr operaciones más eficientes."
                  image="svg/api.svg"
                />
                <CardService
                  title="🛰️ Sistemas Satelitales y GPS"
                  description="Desarrollamos sistemas de monitoreo y control satelital que permiten rastrear activos, flotas o zonas de producción con precisión milimétrica. Tecnología ideal para industrias como la acuicultura, logística o seguridad."
                  image="svg/nube.svg"
                />
                <CardService
                  title="🚁 Drones y Monitoreo Inteligente"
                  description="Diseñamos soluciones de drones autónomos equipados con cámaras, sensores y visión artificial. Ideales para inspección, vigilancia, conteo y análisis de datos desde el aire, integrados con tus sistemas de control."
                  image="svg/seguro.svg"
                />
              </div>
            </div>
          </motion.div>

        </section>
        <section id="likes">
          <HStack>
            <Separator className=" border-blue-700" flex="1" />
            <Text flexShrink="0">
              <div className="flex items-center gap-2">
                <HeartIcon className="hover:text-red-600" /> <Handshake className="hover:text-blue-400" />
              </div>
            </Text>
            <Separator className=" border-blue-700" flex="1" />
          </HStack>
        </section>
        <section className="py-10  sm:py-16 lg:pt-10 lg:pb-28">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <div className="flex flex-col justify-center items-center">
                <BlurText
                  className=" text-blue-600" direction="top"
                  text="Nuestros"
                />
                <BlurText
                  className=" text-2xl font-bold text-slate-100 sm:text-4xl sm:leading-tight" direction="bottom"
                  text="Socios"
                />
              </div>
            </div>
            <div className="grid items-center max-w-4xl grid-cols-2 mx-auto mt-12  md:grid-cols-4 gap-x-10 gap-y-16 ">
              <div>
                <img className="object-contain w-full h-8 mx-auto" src="logo_company.webp" alt="" />
              </div>

              <div>
                <img className="object-contain w-full h-8 mx-auto" src="logo_company.webp" alt="" />
              </div>

              <div>
                <img className="object-contain w-full h-8 mx-auto" src="logo_company.webp" alt="" />
              </div>

              <div>
                <img className="object-contain w-full mx-auto h-8" src="logo_company.webp" alt="" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
