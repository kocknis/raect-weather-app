import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor() {
    this.state = {
      countryValue: "",
      url: "https://api.openweathermap.org/data/2.5/weather?q=",
      key: "26c4d8ad14b57209671494df9bd9fcb9",
    };

    super();
    this.fetchData = this.fetchData.bind(this);
    this.showDate = this.showDate.bind(this);
  }

  inputClickFunction() {
    if (event.keyCode === 13) {
      fetchData();
    }
  }

  showData(data) {
    let cityElem = document.querySelector(".city");
    cityElem.innerHTML = `${data.name}, ${data.sys.country}`;

    let dateElem = document.querySelector(".date");
    dateElem.innerHTML = showDate();

    let tempElem = document.querySelector(".temp");
    tempElem.innerHTML = `${Math.floor(data.main.temp - 273.15)}°c`;

    let weatherElem = document.querySelector(".weather");
    weatherElem.innerHTML = `${data.weather[0].main}`;

    let tempsElem = document.querySelector(".hi-low");
    tempsElem.innerHTML = `${Math.floor(
      data.main.temp_min - 273.15
    )}°c / ${Math.floor(data.main.temp_max - 273.15)}°c`;
  }

  showDate() {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let now = new Date();

    let day = days[now.getDay()];
    let month = months[now.getMonth()];
    let year = now.getFullYear();
    let date = now.getDate();

    return `${day} ${date} ${month} ${year}`;
  }

  fetchData() {
    let countryValue = inputElem.value;

    fetch(`${apiData.url}${countryValue}&&appid=${apiData.key}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        showData(data);
      });
  }

  render() {
    return (
      <>
        <div className="app-wrap">
          <header>
            <input
              type="text"
              autocomplete="off"
              className="search-box"
              placeholder="Search for a city..."
              onKeyPress={(event) => this.inputClickFunction()}
            />
          </header>
          <main>
            <section className="location">
              <div className="city">Northampton, GB</div>
              <div className="date">Thursday 10 January 2020</div>
            </section>
            <div className="current">
              <div className="temp">
                15<span>°c</span>
              </div>
              <div className="weather">Sunny</div>
              <div className="hi-low">13°c / 16°c</div>
            </div>
          </main>
        </div>
      </>
    );
  }
}
