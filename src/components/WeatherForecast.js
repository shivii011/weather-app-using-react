import React, { useState, useEffect } from "react";
import axios from "axios";
import img4 from "../images/Vector4.png"
import img3 from "../images/Vector3.png"
import img5 from "../images/Vector5.png"
const API_KEY = "0550b3eb25958d26bde02a58a085cb78";

function WeatherForecast() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [corr, setCorr] = useState({});
  const [error, setError] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      if (city) {
        try {
          const result = await axios.get(
            `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`
          );
          console.log(result)
          setWeather(result.data);
          setCorr(result.data.city.coord);
          console.log(result.data.city.coord)
        } catch (err) {
          setError(err.message);
        }
      }
    };
    fetchData();
  }, [city]);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setWeather(null);
    setError(error);
  };
  return (
    <div className="">
      <div className = ' lg:flex lg:flex-row-reverse lg:justify-around items-center' >
       <form onSubmit={handleSubmit} className="bg-white flex border-2 w-[18rem] h-[3rem] rounded-lg">
        <input
        className="p-2 outline-none text-[1.3rem]"
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={handleCityChange}
        />
<button className=" hover:cursor-pointer" type ="submit" ><img className="mr-4 bg-white" src={img4} alt=""/></button> 
      </form>
      
      <div className='p-2'>
            <div className='flex'>
                <img src={img3} className='p-2' alt=''/>
                <p className='text-3xl font-semibold text-blue'>{city}</p>
            </div>
            <p className='text-left'>{corr.lat},{corr.lon}</p>

        </div>
       </div>
     <div className="flex justify-center">
      <div className=' text-left m-2'>
            <p>Select Date</p>
            <div className='flex my-5 border-2 rounded-lg border-blue w-[10rem] '>
                <img className='p-1' src={img5} alt=""/>
                
                <p>2023-02-03</p>
            </div>
            <p className='mt-2'>High Temperature</p>
            <p className='mt-2'>Low Temperature</p>
            <p className='mt-2'>Humidity</p>
            <p className='mt-2'>Sunrise Time</p>
            <p className='mt-2'>Sunset Time</p>
        </div>
  {weather && (
        <div className="md:flex">
         {weather.list.slice(0,5).map((item, index) =>
         (
        <div className="font-semibold m-2" index ={index}>
             <p>Date :{(item.dt_txt).slice(0,10)}</p>
      
          <div className="">
            <div className="p-4 rounded-xl bg-gradient-to-b from-[#464646] to-[#1D2540] text-white w-[10rem] h-[15.18rem]">
                <div className="flex h-[4rem] p-1 ">
                <img src = {`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt=""/>
                  <p className="mt-4">{item.weather[0].main}</p>
                </div>
                <p className="mt-2">
                    {Math.floor(item.main.temp_max-273.13)}   <sup>o</sup>C /
                    {Math.floor(item.main.temp_max)} <sup>o</sup>F
                </p>
                <p className="mt-2">
        
                    {Math.floor(item.main.temp_min-273.13)}   <sup>o</sup>C /
                    {Math.floor(item.main.temp_min)}   <sup>o</sup>F
                </p>
                <p className="mt-2">{item.main.humidity} %</p>
                <p className="mt-2">6:45 AM</p>
          
                <p className="mt-2">5:45 AM</p>

               
            </div>
            </div>  
        </div>
              ))}
        </div>
      )}
     </div>
    
     
    </div>
  );
}

export default WeatherForecast;