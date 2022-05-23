import Image from "next/image";

function Banner () {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="/img/Hero.png"
        layout="fill" 
        objectFit="cover"
      />
      <div className="absolute top-1/4 w-full text-center">
        <h1 className="text-4xl sm:text-6xl text-white font-bold">DabOversea</h1>
        
        <h1 className="text-2xl sm:text-4xl text-white my-3">Want to apply for an university?</h1>

        <button className="text-white bg-primary px-7 py-2 my-3 shadow-md rounded-lg text-lg font-medium hover:bg-primary-hover transition duration-150 hover:shadow-md active:scale-90">For sure</button>
      </div>
    </div>
  )
}

export default Banner;
