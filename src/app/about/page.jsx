"use client"
import { useRef } from "react"
import { motion } from "framer-motion";
import DynamicElement from "@/components/skillComponents";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 90
    },
    animate:(index)=>( {
        opacity: 1,
        y: 0,
        transition: {
            delay: .25*index
        }
    }),
    final:{
        opacity:1,
        y:0,
        transition:{
            delay:.125
        }

    }
};
const items = [
    { index: 1, imageUrl: '/c_programming.png', heading: 'C' },
    { index: 2, imageUrl: '/cP_programming.png', heading: 'C++' },
    { index: 3, imageUrl: '/javascript.png', heading: 'JS' },

];

const AboutPage = () => {

    return (
        <div className="h-full flex flex-col gap-20 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 overflow-scroll "  >
            <div className="flex flex-col gap-10">
                <div className="felx font-bold text-4xl md:text-6xl">
                    <h1>About Me</h1>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.
                </p>
                <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</i>
                

            </div>
            {/* <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg> */}
            <motion.div className="flex flex-col gap-10" >
                <motion.div className="font-bold text-4xl md:text-6xl" variants={fadeInAnimationVariants} initial="initial" whileInView="final">
                    <h1 className="">Skills</h1>
                </motion.div>

                <div className="flex flex-row gap-10 flex-wrap">
                {items.map((item) => (
                    <motion.div  variants={fadeInAnimationVariants} initial="initial" whileInView="animate" custom={item.index}>
                        <DynamicElement key={item.imageUrl} imageUrl={item.imageUrl} heading={item.heading} />
                    </motion.div>
                ))}
                </div>

            </motion.div>
            
        </div>
    )
}

export default AboutPage