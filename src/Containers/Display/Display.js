import React from "react";
import "./Display.css";
import { AiOutlineClockCircle } from "react-icons/ai";

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
      <div className="UpperSection"></div>
      <div className="LowerSection">
        <div className="HeroFlex">
          <p className="Time">
            <AiOutlineClockCircle className="Icons" />
            {setTimeHandler()}
          </p>
          <p className="Location">Abuja, NG</p>
        </div>
      </div>
    </div>
  );
};

export default Display;
