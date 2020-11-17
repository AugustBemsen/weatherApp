import React from "react";
import "./Home.css";
import Logo from "../../Components/Imgs/Logo.png";
import Cloud from "../../Components/Imgs/cloud.svg";
import Land from "../../Components/Imgs/land.svg";

const Home = (props) => {
  return (
    <div className="Home">
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
          <p className="Greetings">Hello! Good Morning</p>
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
