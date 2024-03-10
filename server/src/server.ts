import express from "express"
import cors from "cors"
import { WeatherApp } from "./weatherApp"
import { WeatherMapApi } from "./weatherMapApi"
const port = 3000
const app = express()



app.use(cors())

const weatherFetch = new WeatherMapApi()
const weatherService = new WeatherApp(weatherFetch);


app.get('/weather/:city', async (req, res) => {
    const city = req.params.city;
    console.log(city)
    try {
      const weatherData = await weatherService.getWeather(city);
      res.json(weatherData);
    } catch (error) {
      res.status(500).json(error);
    } 
  });

app.listen(port,()=>console.log("server is running"));