import { AppWindowMac, BrainCircuit, Building2, ChevronDown, Lightbulb, ListTree, Mails, MapPinCheckInside, Users } from 'lucide-react';
import { useState, useEffect, useRef, useCallback } from 'react';

export function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownButtonRef = useRef<HTMLButtonElement>(null);
  const dropdownContentRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  };

  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (
      dropdownButtonRef.current &&
      !dropdownButtonRef.current.contains(e.target as Node) &&
      dropdownContentRef.current &&
      !dropdownContentRef.current.contains(e.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <header className="flex justify-center items-center max-w-4xl mx-auto shadow-lg shadow-blue-900 bg-transparent rounded-lg backdrop-blur-xl h-16 border-b border-blue-600">
      <nav>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false">
                <span className="sr-only">Abrir menú</span>
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-100 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Inicio</a>
                  <a href="#" className="text-gray-100 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Servicios</a>
                  <div className="relative z-20">
                    <button
                      ref={dropdownButtonRef}
                      onClick={toggleDropdown}
                      className="text-gray-100 flex justify-center items-center gap-1 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                      aria-expanded={isDropdownOpen ? "true" : "false"}
                      aria-haspopup="true"
                    >
                      {isDropdownOpen ? <ChevronDown className="w-3 h-3 transition-all duration-200" /> : <ChevronDown className="w-3 h-3 -rotate-90 transition-all duration-200" />} Neuro EAC
                    </button>
                    {isDropdownOpen && (
                      <div
                        ref={dropdownContentRef}
                        className="absolute z-10 -ms-[100%]  bg-neutral-950 shadow-xl shadow-blue-900 rounded-lg  border-b border-blue-600 mt-5 w-[600px]  px-2 py-5"
                      >
                        <div className='grid grid-cols-2 gap-12'>
                          <div>
                            <h5 className='ps-3'>Nuestro Equipo</h5>
                            <ul>
                              <a href="#" className="px-4 py-5 text-sm flex gap-2 items-center">
                                <div className='w-10 h-10 bg-black flex justify-center items-center shadow-lg shadow-blue-900 rounded-sm  border-b border-blue-600'>
                                  <Building2 size={15} />
                                </div>Nuestra Empresa</a>
                              <a href="#" className="px-4 py-5 text-sm flex gap-2 items-center">
                                <div className='w-10 h-10 bg-black flex justify-center items-center shadow-lg shadow-blue-900 rounded-sm  border-b border-blue-600'>
                                  <BrainCircuit size={15} />
                                </div>Equipo de inteligencia</a>
                              <a href="#" className="px-4 py-5 text-sm flex gap-2 items-center">
                                <div className='w-10 h-10 bg-black flex justify-center items-center shadow-lg shadow-blue-900 rounded-sm  border-b border-blue-600'>
                                  <Users size={15} />
                                </div>Equipo </a>
                              <a href="#" className="px-4 py-5 text-sm flex gap-2 items-center">
                                <div className='w-10 h-10 bg-black flex justify-center items-center shadow-lg shadow-blue-900 rounded-sm  border-b border-blue-600'>
                                  <AppWindowMac size={15} />
                                </div>Softwares </a>
                            </ul>
                          </div>
                          <div>
                            <h5 className='ps-3'>Otros</h5>
                            <ul>
                              <a href="#" className="px-4 py-5 text-sm flex gap-2 items-center">
                                <div className='w-10 h-10 bg-neutral-950 flex justify-center items-center shadow-lg shadow-blue-900 rounded-sm  border-b border-blue-600'>
                                  <Lightbulb size={15} />
                                </div> Preguntas frecuentes</a>
                              <a href="#" className="px-4 py-5 text-sm flex gap-2 items-center">
                                <div className='w-10 h-10 bg-neutral-950 flex justify-center items-center shadow-lg shadow-blue-900 rounded-sm  border-b border-blue-600'>
                                  <ListTree size={15} />
                                </div> FAQ</a>
                              <a href="#" className="px-4 py-5 text-sm flex gap-2 items-center">
                                <div className='w-10 h-10 bg-neutral-950 flex justify-center items-center shadow-lg shadow-blue-900 rounded-sm  border-b border-blue-600'>
                                  <MapPinCheckInside size={15} />
                                </div> Sucursales en Chile</a>
                              <a href="#" className="px-4 py-5 text-sm flex gap-2 items-center">
                                <div className='w-10 h-10 bg-neutral-950 flex justify-center items-center shadow-lg shadow-blue-900 rounded-sm  border-b border-blue-600'>
                                  <Mails size={15} />
                                </div>Trabaja con nosotros</a>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <a href="#" className="text-gray-100 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Contacto</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
