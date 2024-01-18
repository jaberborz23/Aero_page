import React from 'react'
import { FaRegBell } from "react-icons/fa";
import hero from "../assets/hero.png"

const Fuel = () => {
  return (
    <section id='fuel' className='py-[140px] bg-white'>
      <div className="max-w-container mx-auto">

      <div className="flex flex-wrap  items-center ml-3">
        <div className="w-[60%] ">


          <div className="flex xl:w-[20%] lg:w-[30%] sm:w-[40%] xxs:w-[80%] md:w-[35%] w-full items-center gap-x-1 border-[1px] bg-transparent lg:p-[10px] p-2 rounded-[20px] hover:bg-[white]  ">
          <FaRegBell />
          <h6 className='font-ab font-[400] text-[15px] xxxs:text-[10px] lg:text-[16px] lg:leading-[18.91px] text-[rgba(0,0,0,1)]'>Startup Business</h6>


   

          </div>

          <h1 className='mt-7 font-rb font-[400] lg:leading-[45px] text-bla lg:w-[456px] w-auto text-[36px]'>Empowering startups to fuel their business growth</h1>
          <p className='mt-2 font-rb font-[400] text-[18px] lg:leading-[28px] text-[rgba(0,0,0,1)] lg:w-[529px] w-auto'>Eu posuere mi sed purus proin quisque molestie. Ut amet, at amet, velit nibh arcu eu. Id sem varius malesuada tincidunt sodales.</p>
    <div className="mt-6">
    <a className='  gap-x-1 border-[1px] bg-or p-[10px] font-ab font-[400] text-[16px] leading-[18.91px] text-wh hover:bg-[#000] ' href="#"> Get started now </a>
    </div>
         

        </div>

        <div className="w-[40%]">


          <img src={hero} className='w-full' alt="hero" />
       


        </div>
        </div>





      </div>




    </section>
  )
}

export default Fuel