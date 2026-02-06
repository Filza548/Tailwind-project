// import React from 'react'
// import img from '../assets/Rectangle-43.png'
// import image22 from '../assets/image-22.png'


// const ArticleSecond = () => {
//     return (


//         <>
//             <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-28 mt-10">

//                 <div className="col">

//                     <button className='text-[#0cbbc7] bg-[#e5fdff] px-3 py-1 rounded-l-lg rounded-r-lg'>Testimonials</button>

//                     <h2 className=" font-sans mt-4">
//                         See how <br /> customers{" "}
//                         <br />
//                         <span className="font-bold">drive impact.</span>
//                     </h2>
//                     <button className='bg-[#0cbbc7] px-5 py-2 text-white font-medium mt-4 text-2xl'>See case studies</button>
//                 </div>



//                 <div className="col">

//                     <div className="relative w-80">
//                         <img
//                             src={img}
//                             alt="banner"
//                             className="w-full  object-cover rounded-lg"
//                         />

//                         <div className="absolute -bottom-10 -right-60 bg-[#edfeff] text-white p-3 rounded w-80 h-55">
//                             <img src={image22} alt="" />

//                             <p className='font-sans text-[#858686] mt-2'>"I used to have a bunch of different tools I had to pay for, with Circle you get everything in one bundle."</p>

//                               <h5 className="">
//   <span className="font-bold text-black">Michel Dedrick</span> <br />
//   <span className="font-light  text-black">Senior Conversion Optimizer</span> 
// </h5>
//                         </div>


//                     </div>


//                 </div>
//             </div>


//         </>
//     )
// }

// export default ArticleSecond


import React from "react";
import img from "../assets/Rectangle-43.png";
import image22 from "../assets/image-22.png";

const ArticleSecond = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                    px-6 md:px-12 lg:px-28 mt-10 gap-10">

      {/* LEFT CONTENT */}
      <div className="flex flex-col justify-center">
        <button className="text-[#0cbbc7] bg-[#e5fdff] px-3 py-1 rounded-lg w-fit">
          Testimonials
        </button>

        <h2 className="font-sans mt-4 text-2xl md:text-3xl lg:text-4xl leading-snug">
          See how <br />
          customers <br />
          <span className="font-bold">drive impact.</span>
        </h2>

        <button className="bg-[#0cbbc7] px-5 py-2 text-white font-medium 
                           mt-4 text-lg md:text-xl w-fit rounded">
          See case studies
        </button>
      </div>

      {/* IMAGE + OVERLAY */}
      <div className="relative flex justify-center md:justify-start lg:col-span-2">
        <div className="relative w-full max-w-sm md:max-w-md overflow-visible">

          <img
            src={img}
            alt="banner"
            className="w-full object-cover rounded-lg"
          />

          {/* OVERLAY CARD */}
          <div
            className="absolute 
                       -bottom-0 md:-bottom-0
                       right-0 md:-right-24 lg:-right-40
                       bg-[#edfeff] p-4 rounded-xl 
                       w-full max-w-xs shadow-lg"
          >
            <img src={image22} alt="" />

            <p className="font-sans text-[#858686] mt-3 text-sm md:text-base">
              "I used to have a bunch of different tools I had to pay for,
              with Circle you get everything in one bundle."
            </p>

            <h5 className="mt-3">
              <span className="font-bold text-black">
                Michel Dedrick
              </span>
              <br />
              <span className="font-light text-black text-sm">
                Senior Conversion Optimizer
              </span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleSecond;
