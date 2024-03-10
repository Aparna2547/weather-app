// Implementation for weathermapApi
import axios from "axios";
// import { WeatherFetcher } from "./weatherFetch";
import { WeatherData } from "./weatherInterface";


export abstract class WeatherFetcher {
    abstract fetchWeather(city: string): Promise<WeatherData>;
}

export class WeatherMapApi extends WeatherFetcher {
    async fetchWeather(city: string): Promise<WeatherData> {
    console.log('abstract');
        try {
            console.log('hey',city)
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=18f8ed9769c1b8ef31af7a3bf6e7ebc8&units=metric`);
            const data = response.data;  
            console.log('data', data);
            return {
                weather:data
            };
        } catch (error) {
            console.error('Error fetching weather data:', error);
            throw error;
        }
    }
}
