import React from 'react'
import img5 from "../images/Vector5.png"
import Weathercard from './Weathercard'
const Weather = () => {
  return (
    <div className='flex'> 
        <div className=' text-left m-2'>
            <p>Select Date</p>
            <div className='flex border-2 rounded-lg border-blue w-[10rem] '>
                <img className='p-1' src={img5}/>
                <p>Date</p>
            </div>
            <p className='mt-2'>High Temperature</p>
            <p className='mt-2'>Low Temperature</p>
            <p className='mt-2'>Humidity</p>
            <p className='mt-2'>Sunrise Time</p>
            <p className='mt-2'>Sunset Time</p>
        </div>
        <div>
            <Weathercard/>
        </div>
    </div>
  )
}

export default Weather