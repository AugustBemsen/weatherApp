import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import Logo from "../../Components/Imgs/Logo.png";
import Cloud from "../../Components/Imgs/cloud.svg";
import Land from "../../Components/Imgs/land.svg";

const Home = (props) => {
  //  States
  const [currentTime, setCurrentTime] = useState("Good Morning");
  const [words, setWords] = useState("");
  const [query, setQuery] = useState("");

  const API_KEY = process.env.REACT_APP_Key;
  //  UseRefs
  const starsRef = useRef(null);

  const setTimeHandler = () => {
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 12 && hour <= 17) {
      setCurrentTime("Good Afternoon");
    } else if (hour > 17) {
      setCurrentTime("Good Evening");
    }
  };

  const starGenerator = () => {
    const count = 140;
    const scene = starsRef.current;
    for (let index = 0; index <= count; index++) {
      let star = document.createElement("i");
      let w = Math.floor(Math.random() * window.innerWidth);
      let h = Math.floor(Math.random() * window.innerHeight);
      let duration = Math.random() * 10;
      let size = Math.random() * 2;

      star.style.left = w + "px";
      star.style.top = h + "px";
      star.style.width = 1 + size + "px";
      star.style.height = 1 + size + "px";
      star.style.animationDuration = 5 + duration + "s";
      star.style.animationDelay = duration + "s";
      scene.appendChild(star);
    }
  };

  const wordsHandler = (event) => {
    setWords(event.target.value);
  };

  const queryHandler = (event) => {
    event.preventDefault();
    setQuery(words);
    setWords("");
  };

  const fetchWeather = () => {
    if (query !== "") {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    setTimeHandler();
    starGenerator();
  }, []);

  useEffect(() => {
    fetchWeather();
    // eslint-disable-next-line
  }, [query]);

  return (
    <div className="Home">
      <div id="stars" ref={starsRef}></div>
      <img src={Cloud} alt="cloud" className="Cloud1" />
      <img src={Cloud} alt="cloud" className="Cloud2" />
      <img src={Land} alt="cloud" className="Land" />
      <div className="BodyWrapper">
        <div className="Brand">
          <h3 className="BrandName">la tempête</h3>
          <div className="ImgHouse">
            <img src={Logo} alt="la tempête" className="BrandLogo" />
          </div>
        </div>
        <div className="MainBody">
          <p className="Greetings">Hello! {currentTime}</p>
          <form className="MainForm" onSubmit={queryHandler}>
            <input
              type="text"
              name="city"
              id="find"
              placeholder="How Cool is Your City Today?"
              autoComplete="off"
              autoCorrect="off"
              onChange={wordsHandler}
              value={words}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
