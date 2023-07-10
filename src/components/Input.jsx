import React from 'react'
import { useWeather } from '../Context/Weather'
const Input = () => {
    const weather=useWeather();
    //console.log("Weather",weather)
  return (
    
      <input className='input'
       value={weather.searchCity}
       placeholder='Search here'
       onChange={(e)=>weather.setSearchCity(e.target.value)}
       />
    
  )
}

export default Input
