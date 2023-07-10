const url = 'https://api.weatherapi.com/v1/current.json?key=dc0b347077ea433c9e284942222302';

export const GetWeatherDataForCity = async (city)=>{
    const response= await fetch(`${url}&q=${city}&aqi=yes`);
    return await response.json();
};

export const GetWeatherDataForLocation = async (lat,long)=>{
    const response= await fetch(`${url}&q=${lat},${long}&aqi=yes`);
    return await response.json();
};


