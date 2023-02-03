import React from 'react'
import Navbar from './Navbar'
import WeatherForecast from './WeatherForecast'

const Main = () => {
  return (
    <div className='h-full bg-gradient-to-r from-[#E0E8F1] to-[#BFCAD6]'>
        <Navbar/>
        <hr/>
        <WeatherForecast/>
    </div>
  )
}

export default Main