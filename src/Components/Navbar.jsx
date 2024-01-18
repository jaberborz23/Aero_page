import  { React,useState } from 'react'
import logo from "../assets/logo (2).png"
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import ScrollspyNav from "react-scrollspy-nav";

const Navbar = () => {
  let [show, setShow] = useState(false)
let handleShow = ()=> {
  setShow(!show)

}

  return (
    <section id='nav' className='mt-3'>
        <div className="max-w-container mx-auto">
     <div className="flex  justify-between items-center fixed w-full z-[10]">

    <div className="w-1/2">
      
      <img src={logo}  alt="logo" />
     
    
    </div>
    <div className="w-1/2">
    <ScrollspyNav
                    scrollTargetIds={["nav", "fuel", "deploy"]}
                    offset={100}
                    activeNavClass="is-active"
                    scrollDuration="1000"
                    headerBackground="true"
                > 
    
  <ul className={`lg:flex  gap-x-6 items-center  absolute left-0 top-0 lg:static  ${show == true ? " top-[120px] sm:top-[200px] xxs:top-[60px]  md:top-[120px] left-0 w-full bg-[#000] gap-y-[14px]  transition duration-300 ease-in-out py-4 text-center z-[100]" : "top-[-370px] w-full left-0 transition duration-300 ease-in-out "}    `}>
   <li> <a className='font-re font-medium leading-[28px] lg:text-bl  text-[white]      ' href="#fuel">Home</a> </li>
   <li> <a href="#deploy" className='font-ab font-[400] leading-[18.91px] lg:text-bl text-[white]  '>About</a> </li>
   <li> <a href="#nav" className='font-ab font-[400] leading-[18.91px] lg:text-bl text-[white]  '     > Service</a></li>
   <li> <a href="#fuel"  className='font-ab font-[400] leading-[18.91px] lg:text-bl text-[white] '   >Contact</a> </li>
  

   <div className="flex gap-x-2 lg:w-[25%] xxxs:w-[65%] xxxs:mx-auto items-center lg:border-[2px]  xxs:mx-auto lg:mt-0 mt-3 xs:mx-auto sm:mx-auto border-[1px] bg-or lg:p-[10px] xxs:w-[30%] xs:w-[30%] sm:w-[20%] p-[7px]  rounded-[20px] hover:bg-[#000] hover:text-[white] ">
   <i className=''><FaCloudUploadAlt /></i>
   <a className='font-re lg:text-[16px] font-[500] lg:leading-[20px] text-wh  ' href="#">  Download </a>
  
   </div>
  



  </ul>
  </ScrollspyNav>
  

    </div>
    <div className=" lg:hidden mx-3" onClick={handleShow}>

{show ==true ? <FaBars /> : <RxCross1 /> }

</div>
  


     </div>
    

    



        </div>



    </section>
  )
}

export default Navbar