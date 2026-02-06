import React from 'react'
import image34 from '../assets/image-34.png'

const ArticleThird = () => {
    return (
        <>

            {/* CONTENT + IMAGE SECTION */}
            <div
                className="grid grid-cols-1 md:grid-cols-2 
                       w-full 
                       px-6 md:px-12 lg:px-20 py-10 gap-10"
            >
                {/* TEXT */}
                <div className="flex flex-col justify-center mt-28">
                    <h3 className="text-lg md:text-xl font-normal font-sans">
                        Looking for a {" "}
                        <span className='text-xl md:text-3xl  font-sans font-bold'>Solution</span>
                    </h3>





                    <h3 className="text-lg md:text-xl font-normal font-sans">
                        for your business?
                    </h3>

                    <p className="text-[#828585] mt-3 text-sm md:text-base leading-relaxed">
                        Check out Sogolytics enterprise feedback and experience management platform.
                    </p>

                    <div className="flex gap-4">

                    <button
                        className="bg-[#0cbbc7] px-3 py-2  text-white font-medium 
                           mt-4 w-fit rounded"
                    >
                        Learn more
                    </button>
                     <button
                        className="border-[#0cbbc7] rounded-2xl px-3 py-2  text-[#0cbbc7] font-medium 
                           mt-4 w-fit border-1 "
                    >
                        Schedule a consultation
                    </button>
</div>
                </div>

                {/* IMAGE */}
                <div className="flex justify-center">
                    <img
                        src={image34}
                        alt="Laptop"
                        className="w-full max-w-md object-contain mt-28"
                    />
                </div>
            </div>
        </>
    )
}

export default ArticleThird
