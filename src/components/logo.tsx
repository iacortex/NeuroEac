interface logoProps {
  className?: string
}


export function Logo({ className }: logoProps) {
  return (
    <>
      <img
        className={`absolute z-0 lg:w-96 lg:h-64 lg:left-[17%] w-20 h-20 ${className}`}
        src="logo-white.svg"
        alt="Logo"
      />
    </>
  );
}
