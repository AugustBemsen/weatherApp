import React, { useEffect, useState } from "react";
import "./Home.css";
import Logo from "../../Components/Imgs/Logo.png";
import Cloud from "../../Components/Imgs/cloud.svg";
import Land from "../../Components/Imgs/land.svg";

const Home = (props) => {
  const [currentTime, setCurrentTime] = useState("Good Morning");

  const setTimeHandler = () => {
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 12 && hour <= 17) {
      setCurrentTime("Good Afternoon");
    } else if (hour > 17) {
      setCurrentTime("Good Evening");
    }
  };
  useEffect(() => {
    setTimeHandler();
  }, []);

  return (
    <div className="Home">
      <div id="stars"></div>
      <div id="stars2"></div>
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
          <form className="MainForm">
            <input
              type="text"
              name="city"
              id="find"
              placeholder="How Cool is Your City Today?"
              autoComplete="off"
              autoCorrect="off"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
