import './App.css';
import Button from './components/Button';
import Card from './components/Card';
import Input from './components/Input';
import { useWeather } from './Context/Weather';
import { useEffect } from 'react';

function App() {
  const weather=useWeather();
  console.log(weather);

  useEffect(()=>{
    weather.fetchCurrentUserLocationData();
  },[])



  return (
    <div className="App">
      <h1>WEATHER TODAY!</h1>
      <Input/>
      <Button onClick={weather.fetchData} value="Search"/>
      <Card/>
      <Button onClick={weather.handleRefresh} value="Refresh"/>
    </div>
  );
}

export default App;
