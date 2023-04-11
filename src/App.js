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
  }

  fetchData() {
    fetch(`${apiData.url}${countryValue}&&appid=${apiData.key}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
