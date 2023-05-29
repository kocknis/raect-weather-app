import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const url = "https://api.openweathermap.org/data/2.5/weather?q=";
  const key = "26c4d8ad14b57209671494df9bd9fcb9";

  const [countryValue, setCountryValue] = useState("");
  const [sendData, setSendData] = useState(false);

  const [data, setData] = useState({
    dataWeather: {
      name: "Northampton, GB",
      data: "11/16/2015",
      temp: "15",
      wind: "7",
      weather: "Sunny",
    },
  });

  async function fetchData() {
    await fetch(`${url}${countryValue}&&appid=${key}`)
      .then((res) => res.json())
      .then((data) => {
        setData({
          dataWeather: {
            name: data.name,
            data: new Date().toLocaleDateString(),
            temp: Math.floor(data.main.temp - 273),
            weather: data.weather[0].main,
            wind: data.wind.speed,
          },
        });
      });
      setSendData(false)

  }

  useEffect(() => {
    fetchData();
  }, [sendData]);

  function getCityWeather(event) {
    setCountryValue(event.target.value);
  }

  function getCurrentweather(event) {
    if (event.keyCode === 13) {
      setSendData(true)
    } else {
      return false;
    }
  }

  window.addEventListener("keydown", (event) => getCurrentweather(event));
  return (
    <>
      <div className="app-wrap">
        <header>
          <input
            type="text"
            autocomplete="off"
            className="search-box"
            placeholder="Search for a city..."
            onChange={(event) => getCityWeather(event)}
          />
        </header>
        <main>
          <section className="location">
            <div className="city">{data.dataWeather.name}</div>
            <div className="date">{data.dataWeather.data}</div>
          </section>
          <div className="current">
            <div className="temp">
              {data.dataWeather.temp}
              <span>°c</span>
            </div>
            <div className="weather">{data.dataWeather.weather}</div>
            <div className="wind">{data.dataWeather.wind} km/h</div>
          </div>
        </main>
      </div>
    </>
  );
}
