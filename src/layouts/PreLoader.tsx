import { motion } from "framer-motion";

const Preloader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black">
      <motion.svg
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className="w-20 h-20 text-white"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <svg id="Capa_2" data-name="Capa 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 254.11 389.24">
          <g id="Capa_2" data-name="Capa 2" fill="none" stroke="white" stroke-width="3">
            <g>
              <path className="cls-1" d="M14.99,116.16l20-9.87-.46,149.87c-.03,10.21,5.18,19.72,13.8,25.18l73.58,46.63v-114.52l26.57,15.18c4.89,2.79,7.91,8,7.91,13.63v146.98L15.48,300.75c-9.64-6.05-15.48-16.63-15.48-28.01v-132.47c0-10.23,5.81-19.58,14.99-24.11Z" />
              <path className="cls-1" d="M205.93,388.85h-34.81s.47-152.93.47-152.93c.03-8.3-4.21-16.04-11.23-20.48l-76.16-48.27.76,114.01-25.15-14.74c-6.54-3.83-10.55-10.86-10.53-18.44l.43-136.94c0-2.24,2.47-3.61,4.37-2.41l138.98,87.28c8.12,5.1,13.04,14.01,13.03,23.6l-.17,169.34Z" />
              <path className="cls-1" d="M219.19,388.31h0l.43-249.42c.02-13.83-7.04-26.7-18.73-34.11l-68.67-43.52.76,79.53-35.71-23.4.47-117.4,143.21,89.93c8.2,5.15,13.17,14.16,13.16,23.85l-.39,240.05c-.03,19.05-15.48,34.48-34.54,34.48Z" />
              <animate
                attributeName="stroke-dasharray"
                values="0, 3000; 900, 0; 0, 3000"
                dur="7s"
                repeatCount="indefinite"
                keyTimes="0; 0.5; 1"
                calcMode="linear" />
            </g>
          </g>
        </svg>
      </motion.svg>
    </div>
  );
};

export default Preloader;