import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      url: "https://api.openweathermap.org/data/2.5/weather?q=",
      key: "26c4d8ad14b57209671494df9bd9fcb9",
      countryValue: "",
      dataWeather: {
        name: "Northampton, GB",
        data: "Thursday 10 January 2020",
        temp: "15",
        weather: "Sunny",
        wind: "7",
      },
    };

    this.fetchData = this.fetchData.bind(this);
  }

  async fetchData() {
    await fetch(
      `${this.state.url}${this.state.countryValue}&&appid=${this.state.key}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        this.setState({
          dataWeather: {
            name: data.name,
            data: "Thursday 10 January 2020",
            temp: Math.floor(data.main.temp - 273),
            weather: data.weather[0].main,
            wind: data.wind.speed,
          },
        });
      });
  }

  getCityWeather(event) {
    this.setState({
      countryValue: event.target.value,
    });
  }

  getCurrentweather(event) {
    if (event.keyCode === 13) {
      this.fetchData();
      // let time = new Data()
      // console.log(time)
    }
  }

  render() {
    window.addEventListener("keydown", (event) =>
      this.getCurrentweather(event)
    );
    return (
      <>
        <div className="app-wrap">
          <header>
            <input
              type="text"
              autocomplete="off"
              className="search-box"
              placeholder="Search for a city..."
              onChange={(event) => this.getCityWeather(event)}
            />
          </header>
          <main>
            <section className="location">
              <div className="city">{this.state.dataWeather.name}</div>
              <div className="date">{this.state.dataWeather.data}</div>
            </section>
            <div className="current">
              <div className="temp">
                {this.state.dataWeather.temp}
                <span>°c</span>
              </div>
              <div className="weather">{this.state.dataWeather.weather}</div>
              <div className="wind">{this.state.dataWeather.weather} km/h</div>
            </div>
          </main>
        </div>
      </>
    );
  }
}
