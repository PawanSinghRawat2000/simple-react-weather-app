import { createContext, useContext ,useState} from "react";
import { GetWeatherDataForCity ,GetWeatherDataForLocation} from "../api";
const WeatherContext=createContext(null);

export const useWeather=()=>{
    return useContext(WeatherContext);
};



export const WeatherProvider=(props)=>{
    const [data,setData]=useState(null);
    const [searchCity,setSearchCity]=useState(null);

    const fetchData= async()=>{
        //console.log("city",searchCity);
        const response=await GetWeatherDataForCity(searchCity);
        setData(response);
        setSearchCity("");
    };

    const fetchCurrentUserLocationData=()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            GetWeatherDataForLocation(
                position.coords.latitude,
                position.coords.longitude
            ).then(data=>setData(data));
        })
    }
    const handleRefresh=()=>{
        fetchCurrentUserLocationData();
        
    }

    return(
        <WeatherContext.Provider value={{searchCity,data,setSearchCity,fetchData,fetchCurrentUserLocationData,handleRefresh}}>
            {props.children}
        </WeatherContext.Provider>
    )
}