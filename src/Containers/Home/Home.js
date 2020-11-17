import React from "react";
import "./Home.css";
import Logo from "../../Components/Imgs/Logo.png";

const Home = (props) => {
  return (
    <div className="Home">
      <div className="BodyWrapper">
        <div className="Hero">
          <div className="Brand">
            <h3 className="BrandName">la tempête</h3>
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
