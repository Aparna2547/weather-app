import axios from 'axios'
import React, { useEffect, useState } from 'react'

type weatherType = {
place:string,
temperature:number,
climate : string,
max_temp:number,
min_temp:number,
wind:number,
humidity:number,
visibility:number,
icon:string
}

const Weather = () => {
    const [city,setCity] = useState('')
    const [weather,setWeather] = useState<weatherType | null>(null)

    // useEffect(()=>{
        
    // })

    const fetchWeather = async ()=>{
        try {
            const res = await axios.get(`http://localhost:3000/weather/${city}`)
            let weatherDetails = res.data.weather
            console.log(res)
            setWeather({
              ...weather,
              place : weatherDetails.name,
              temperature:weatherDetails.main.temp,
              climate: weatherDetails.weather[0].main,
              min_temp:weatherDetails.main.temp_min,
              max_temp:weatherDetails.main.temp_max,
              wind:weatherDetails.wind.speed,
              humidity:weatherDetails.main.humidity,
              visibility:weatherDetails.visibility /1000,
              icon:weatherDetails.weather[0].icon

            })
        } catch (error) {
            console.log(error);
            
        }
    }


  return (
    // <div className="flex items-center justify-center border shadow-sm">
    <div className="flex flex-col bg-white bg-opacity-20 backdrop-blur-md rounded p-4 w-full max-w-xs">
        <div className='my-2 flex w-full'>
            <input type="text" className='w-3/4 border border-gray-300 outline-none p-1' name="" id="" value={city} onChange={(e)=>setCity(e.target.value)} />
            <button className='w-1/4 bg-gray-300' onClick={fetchWeather}>Search</button>
        </div>
      <div className="font-bold text-xl">{weather?.place}</div>
      {/* <div className="text-sm">Monday 10 May 2020</div> */}
      <div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
        
        <img src= {`https://openweathermap.org/img/wn/${weather?.icon}@2x.png`} alt="" />
      </div>
      <div className="flex flex-row items-center justify-center mt-6">
        <div className="font-medium text-6xl">{weather?.temperature}°</div>
        <div className="flex flex-col items-center ml-6">
          <div>{weather?.climate}</div>
          <div className="mt-1">
            <span className="text-sm">
              <i className="far fa-long-arrow-up" />
            </span>
            <span className="text-sm font-light ">{weather?.min_temp}°C</span>
          </div>
          <div>
            <span className="text-sm">
              <i className="far fa-long-arrow-down" />
            </span>
            <span className="text-sm font-light ">{weather?.max_temp}°C</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between mt-6">
        <div className="flex flex-col items-center">
          <div className="font-medium text-sm">Wind</div>
          <div className="text-sm ">{weather?.wind}k/h</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="font-medium text-sm">Humidity</div>
          <div className="text-sm ">{weather?.humidity}%</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="font-medium text-sm">Visibility</div>
          <div className="text-sm">{weather?.visibility}km</div>
        </div>
      </div>
    </div>
//   </div>
  
  )
}

export default Weather