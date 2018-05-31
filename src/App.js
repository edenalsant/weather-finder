import React from 'react'; //import the React object from react packet
import Titles from './Components/Titles';
import Form from './Components/Form';
import Weather from './Components/Weather';


const API_KEY = "66b704fb71e3bac45a0113196023d2c8";
class App extends React.Component{
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    descriptioin: undefined,
    error: undefined 
  }

  getWeather = async (e) => {
    e.preventDefault(); 
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json(); //converts whats comes from the fetch function into json
    if(city && country){
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        description: data.weather[0].description,
        error: ""
      });
    }else{
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        description: undefined,
        error: "Please, type the values"
      });
    }

  };

  render(){
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather 
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          description={this.state.description}
          error={this.state.error}
        />
        
      </div>
    );
  }
};

export default App;