
import Image from "next/image";
import Link from "next/link";

const Homepage = () => {

  return (
    <div className="h-full flex lg:flex-row-reverse sm:flex-col px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      <div className='h-1/2 lg:w-1/2 lg:h-full relative' >
        <Image src='/codsoft_hero.png' fill className="object-contain"></Image>
      </div>

      <div className="h-1/2 flex flex-col gap-8 lg:w-1/2 lg:h-full lg:justify-center ">
        <h1 className="font-mono pt-10 text-4xl md:text-5xl lg:6xl ">
          <b className="text-black">Hello!</b> This is <b className="text-black">Dohn Doe</b>
        </h1>

        <p className="md:text-base lg:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>

        <div className="flex gap-4">
          <button className="bg-black ring-2 ring-black text-white p-2 rounded-md font-times font-medium text-xl">Download CV</button>
          <Link href={'/contact'}>
            <button className="ring-4 ring-white text-black p-2 rounded-md font-times font-medium text-xl" >Hire Me Now</button>
          </Link>
        </div>
      </div>

    </div>
  )

};

export default Homepage;
