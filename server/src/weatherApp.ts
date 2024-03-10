
import { WeatherData } from "./weatherInterface";
import { WeatherFetcher } from "./weatherMapApi";

export class WeatherApp {
    private weatherFetcher: WeatherFetcher;
  
    constructor(weatherFetcher: WeatherFetcher) {
      this.weatherFetcher = weatherFetcher;
    }
    
  
    async getWeather(city: string): Promise<WeatherData> {
    console.log('koppp')

      return this.weatherFetcher.fetchWeather(city);
    }
  }