import whiteStripe from "./assets/firstPage/whiteStripe.png";
import firstPage from "./assets/firstPage/frontPageNew.png";
import secondPage from "./assets/secondPageNew.png";
import thirdPage from "./assets/thirdPageNew.png";
import fourthPage from "./assets/fourthPageNew.png";
import fifthPage from "./assets/fifthPageNew.png";
import openingText from "./assets/firstPage/openingText.png";
import darkRec from "./assets/firstPage/darkRectangle.png";
import date from "./assets/firstPage/date.png";
import schoolLogo from "./assets/schoolLogo.svg";
import airForceLogo from "./assets/airForceLogo.svg";
import { useEffect, useState } from "react";

import "./App.css";

function App() {
   const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div>
      <div className="all-pages">
        <div className="reveal page" id="first-page">
          <div className="logos">
            <img src={schoolLogo} className="logo" id="school-logo"/>
            <img src={airForceLogo} className="logo" id="air-force-logo"/>
          </div>
          <img src={firstPage} onLoad={() => setImageLoaded(true)} />
          <img src={whiteStripe} className={imageLoaded ? "white-stripe stripe-animation" : "white-stripe hidden"} />
          <img src={openingText} className={imageLoaded ? "opening-text text-animation" : "opening-text hidden"} />
          <div className="lower-banner">
            <img src={darkRec} className={imageLoaded ? "dark-rec dark-animation" : "dark-rec hidden"} />
            <img src={date} className={imageLoaded ? "date date-animation" : "date hidden"} />
          </div>
        </div>
        <div className="page" id="second-page">
          <div className="logos">
            <img src={schoolLogo} className="logo" id="school-logo"/>
            <img src={airForceLogo} className="logo" id="air-force-logo"/>
          </div>
          <img src={secondPage} />
        </div>
        <div className="page" id="third-page">
          <div className="logos">
            <img src={schoolLogo} className="logo" id="school-logo"/>
            <img src={airForceLogo} className="logo" id="air-force-logo"/>
          </div>
          <img src={thirdPage} />
        </div>
        <div className="page" id="fourth-page">
          <div className="logos">
            <img src={schoolLogo} className="logo" id="school-logo"/>
            <img src={airForceLogo} className="logo" id="air-force-logo"/>
          </div>
          <img src={fourthPage} />
        </div>
        <div className="page" id="fifth-page">
          <div className="logos">
            <img src={schoolLogo} className="logo" id="school-logo"/>
            <img src={airForceLogo} className="logo" id="air-force-logo"/>
          </div>
          <img src={fifthPage} />
        </div>
      </div>
    </div>
  );
}

export default App;
