import React from 'react'
import img1 from "../images/Vector1.png"
import img2 from "../images/Vector2.png"
function Navbar() {
  return (
    <div className=' bg-grey flex justify-between text-white sm:px-[10%]'>
    <div className='flex'>
        <img src={img1} className='m-2' alt=''/>
        <p className=' text-2xl my-auto font-semibold text-white'>Weather99</p>
    </div>
    <div className=" border-[.0025rem] border-l-white  sm:flex sm:border-0">
        <img src={img2} className="p-2" alt=''/>
        <p className='my-auto'>Refresh</p>
    </div>
    </div>
  )
}
export default Navbar