import React, { useEffect, useState } from "react";
import "./Display.css";
import { AiOutlineClockCircle } from "react-icons/ai";
import Moon from "../../Components/Imgs/moon.png";
import Sun from "../../Components/Imgs/sun.png";

const Display = ({ match }) => {
  const API_KEY = process.env.REACT_APP_Key;

  const [dayTime, setDayTime] = useState("day");
  const [time, setTime] = useState(null);
  const [results, setResults] = useState(null);
  const query = match.params.city;

  const fetchWeather = () => {
    if (query !== "") {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => setResults(data))
        .catch((err) => console.log(err));
    }
  };

  // Set Current Time
  const setTimeHandler = () => {
    const now = new Date();
    let ampm = "AM";
    let h = now.getHours();
    let m = now.getMinutes();

    if (h >= 12) {
      setDayTime("night");
      if (h > 12) {
        h -= 12;
      }
      if (h === 0) {
        h = 12;
      }
      ampm = "PM";
    }
    if (m < 10) m = "0" + m;
    setTime(h + ":" + m + " " + ampm);
  };

  useEffect(() => {
    fetchWeather();
    setTimeHandler();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="Display">
      <div className="UpperSection">
        <div className="Upper1"></div>
        <div className="Upper2"></div>
        <div className="Upper3"></div>
        <div className="Upper4"></div>
        <div className="Upper5"></div>
      </div>
      <div className="LowerSection">
        {results ? (
          <>
            <div className="HeroFlex">
              <p className="Time">
                <AiOutlineClockCircle className="Icons" />
                {time}
              </p>
              <p className="Location">
                {results.name} {results.sys.country}
              </p>
            </div>
            <div className="WriteUps">
              <div className="Moon">
                <img
                  src={dayTime === "day" ? Sun : Moon}
                // src={`http://openweathermap.org/img/w/${results.weather[0].icon}.png`}
                  alt="weather"
                  className="MoonImg"
                />
              </div>
              <p className="CloudState">{results.weather[0].description}</p>
              <h1 className="Degree">{Math.round(results.main.temp - 273.15) } &#176;</h1>
              <p className="Humility">
                H {Math.round(results.main.temp_max - 273.15)}&#176;
                L {Math.round(results.main.temp_min - 273.15)}&#176;
              </p>
              <p className="SmallT">Winds: {results.wind.speed} MPH</p>
            </div>
          </>
        ) : (
          "Loading..."
        )}
      </div>
    </div>
  );
};

export default Display;
