interface CardServiceProps {
    title: string;
    description: string;
    image: string;
}


export default function CardService({ title, description, image }: CardServiceProps) {
    return (
        <article className="group relative w-full cursor-pointer">
            <div className="relative z-10 backdrop-blur bg-zinc-900/70 w-full min-h-28 rounded-xl
                  flex flex-col justify-center items-center px-5
                  group-hover:rounded-none
                  transition-all duration-500">
                <h3 className="font-bold">{title}</h3>
                <p className="text-xs text-center">
                    {description}
                </p>
            </div>
            <div className="absolute z-20 left-[50%] -top-9 transform -translate-x-1/2 h-14 w-20 rounded-md
                bg-gradient-to-tr from-zinc-400 to-zinc-100 
                flex justify-center items-center">
                <img src={image} alt="api" className="w-10 h-10 object-contain " />
            </div>
            <div className="absolute z-10 left-[50%] top-2 transform -translate-x-1/2 h-6 w-10 rounded-md
                bg-blue-600 blur-md
                flex justify-center items-center">
            </div>
            <div className="absolute z-20 left-[50%] top-3 transform -translate-x-1/2 h-3 w-3 rounded-xl
                bg-white blur
                flex justify-center items-center">
            </div>
            <div className="absolute z-0 
            group-hover:-bottom-1  
            group-hover:h-1
            group-hover:w-[80%]
            group-hover:bg-blue-500
            left-[50%] 
            transform -translate-x-1/2 -bottom-1 h-4 rounded-full w-[50%] bg-sky-500
            transition-all duration-500">
            </div>
        </article>
    )
}
