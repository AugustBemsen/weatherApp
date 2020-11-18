import React from "react";
import "./Display.css";
import { AiOutlineClockCircle } from "react-icons/ai";
import Moon from "../../Components/Imgs/moon.png";
import Sun from "../../Components/Imgs/sun.png";

const Display = (props) => {
  // Set Current Time
  const setTimeHandler = () => {
    const now = new Date();
    let ampm = "AM";
    let h = now.getHours();
    let m = now.getMinutes();

    if (h >= 12) {
      if (h > 12) {
        h -= 12;
      } else if (h === 0) {
        h = 12;
      }
      ampm = "PM";
    }
    if (m < 10) m = "0" + m;
    return h + ":" + m + " " + ampm;
  };

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
        <div className="HeroFlex">
          <p className="Time">
            <AiOutlineClockCircle className="Icons" />
            {setTimeHandler()}
          </p>
          <p className="Location">Abuja, NG</p>
        </div>
        <div className="WriteUps">
          <div className="Moon">
            <img src={Moon} alt="Moon" className="MoonImg" />
            {/* <img src={Sun} alt="Sun" className="SunImg" /> */}
          </div>
          <p className="CloudState">Clear, Winds</p>
          <h1 className="Degree">38</h1>
          <p className="Humility">H 10 T 11</p>
          <p className="SmallT">Winds: s43434u qsd</p>
        </div>
      </div>
    </div>
  );
};

export default Display;
