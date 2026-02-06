// import React from 'react'
// import laptop from"../assets/laptop.png"
// import group1 from"../assets/group-1.png"
// import group2 from"../assets/group-2.png"
// import group3 from"../assets/group-3.png"
// import group4 from"../assets/group-4.png"

// const ArticleSection = () => {
//   return (
//     <>

//     <div className="flex justify-center">
//        <h2 className="">
//   <span className="font-bold">Easy</span> for beginners.{" "}
//   <span className="font-bold">Powerful</span> for experts.
// </h2>
//     </div>


//  <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full px-20 mt-3 "> 

//     <div className="col pl-10 border-b-4 border-b-[#33bfc6] py-4">
//         <img src={group1} alt="" className="object-contain contrast-125 saturate-70 blur-0" />
//     </div>
//     <div className="col py-4 ">
//           <img src={group2} alt="" className="object-contain contrast-125 saturate-70 blur-0" />
//     </div>
//     <div className="col py-4">
//           <img src={group3} alt="" className="object-contain contrast-125 saturate-70 blur-0" />
//     </div>
//     <div className="col py-4">
//           <img src={group4} alt="" className="object-contain contrast-125 saturate-70 blur-0" />
//     </div>




//  </div>

//     <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full bg-[#edfeff] px-20">

// <div className="col p-5">
// <h3 className=''>Create</h3>
// <h5 className='mt-3'>Advanced  research software</h5>
// <p className='text-[#828585] mt-3 '>Ask the right questions and get the answers you need with the most secure and collaborative survey platform on the market featuring powerful logic, sophisticated analytics, and built-in automation and integration.</p>

// <button className='bg-[#0cbbc7] px-3 py-3 text-white font-medium'>Get started for free</button>
// </div>
// <div className="col p-5">
//     <img src={laptop} alt="Laptop"  height={200} />
// </div>



//     </div>
      
//     </>
//   )
// }

// export default ArticleSection



import React from "react";
import laptop from "../assets/laptop.png";
import group1 from "../assets/group-1.png";
import group2 from "../assets/group-2.png";
import group3 from "../assets/group-3.png";
import group4 from "../assets/group-4.png";

const ArticleSection = () => {
  return (
    <>
      {/* HEADING */}
      <div className="flex justify-center px-4">
        <h2 className="text-xl md:text-2xl lg:text-3xl text-center">
          <span className="font-bold">Easy</span> for beginners.{" "}
          <span className="font-bold">Powerful</span> for experts.
        </h2>
      </div>

      {/* LOGOS SECTION */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
                   w-full px-6 md:px-12 lg:px-20 mt-6 gap-6 mt-16"
      >
        <div className="flex justify-center border-b-4 border-b-[#33bfc6] pb-4">
          <img
            src={group1}
            alt=""
            className=" object-contain contrast-125 saturate-75"
          />
        </div>

        <div className="flex justify-center pb-4">
          <img
            src={group2}
            alt=""
            className=" object-contain contrast-125 "
          />
        </div>

        <div className="flex justify-center pb-4">
          <img
            src={group3}
            alt=""
            className=" object-contain contrast-125 "
          />
        </div>

        <div className="flex justify-center pb-4">
          <img
            src={group4}
            alt=""
            className=" object-contain contrast-125 "
          />
        </div>
      </div>

      {/* CONTENT + IMAGE SECTION */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 
                   w-full bg-[#edfeff] 
                   px-6 md:px-12 lg:px-20 py-10 gap-10"
      >
        {/* TEXT */}
        <div className="flex flex-col justify-center">
          <h3 className="text-lg md:text-xl font-semibold">
            Create
          </h3>

          <h5 className="mt-3 text-xl md:text-2xl font-medium">
            Advanced research software
          </h5>

          <p className="text-[#828585] mt-3 text-sm md:text-base leading-relaxed">
            Ask the right questions and get the answers you need with the most
            secure and collaborative survey platform on the market featuring
            powerful logic, sophisticated analytics, and built-in automation
            and integration.
          </p>

          <button
            className="bg-[#0cbbc7] px-5 py-3 text-white font-medium 
                       mt-4 w-fit rounded"
          >
            Get started for free
          </button>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center">
          <img
            src={laptop}
            alt="Laptop"
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default ArticleSection;
