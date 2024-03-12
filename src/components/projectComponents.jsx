import React from 'react';
import Image from "next/image"
import { motion } from 'framer-motion'


const imageVariants = {
    animate: {
        scale: 1.1,
        opacity: 1,
        boxShadow: "0px 0px 8px rgb(255,255,255)",
    }
}


const DynamicElement = ({ imageUrl, heading }) => {
    return (
        <motion.div 
            className=" relative ring ring-orange-700 rounded flex flex-col gap-5 p-4 items-center justify-center "
            variants={imageVariants}
            whileHover='animate'
            >
            <div className="w-96 h-96 flex sm:justify-center sm:items-center">
                <Image src={imageUrl} alt={heading} width={300} height={120} className="" />
            </div>
            <hr className='border-black  border-b w-full' />
            <div className="font-bold text-4xl md:text-6xl">
                <h1 className="bg-gradient-to-r from-blue-600 via-zinc-400 to-indigo-400 inline-block text-transparent bg-clip-text">{heading}</h1>
            </div>
            <motion.div
                className='w-full h-full top-0 left-0 absolute  flex justify-center gap-2 items-center rounded'
            

            >
            </motion.div>
        </motion.div>
    );
};

export default DynamicElement;
