"use client"
import { motion } from "framer-motion"
const ContactPage = () => {
    const text = "Let's Talk...";
    
    return (

        <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
            <div
                className="h-1/3 flex justify-center items-center text-6xl lg:h-full lg:w-1/2"
            >
                {text.split("").map((letter, index) => (
                    <motion.span
                        key={index}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 0 }}
                        transition={{ delay: index * 0.1, duration: 4, repeat:Infinity}}
                        className="bg-gradient-to-r from-green-400 to-indigo-400 inline-block text-transparent bg-clip-text"
                    >
                        {letter}
                    </motion.span>
                ))}
            </div>
            <div className="h-2/3 w-full lg:h-full lg:w-1/2">
                <form className="bg-red-50 h-full flex flex-col gap-8 rounded-xl px-24 py-10 lg:gap-10 lg:p-10 lg:justify-center">
                    <span className="text-2xl">
                        Full Name
                    </span>
                    <input type="text" placeholder="Your Good Name" className="bg-transparent outline-none border-b-2 border-black " />
                    <span className="text-2xl">
                        Email
                    </span>
                    <input type="text" placeholder="example@example.com" className="bg-transparent outline-none border-b-2 border-black " />
                    <span className="text-2xl">
                        Message
                    </span>
                    <textarea rows={3} placeholder="Leave a Message Here" className="bg-transparent outline-none resize-none border-b-2 border-black"></textarea>
                    <button class="bg-black px-8 py-3 rounded text-white w-fit text-xl font-semibold ">
                        Send
                    </button>


                </form>
            </div>

        </div>
    )
}

export default ContactPage