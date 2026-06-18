import whiteStripe from "./assets/firstPage/whiteStripe.png";
import firstPage from "./assets/firstPage/frontPage.png";
import secondPage from "./assets/secondPage.png";
import thirdPage from "./assets/thirdPage.png";
import fourthPage from "./assets/fourthPage.png";
import fifthPage from "./assets/fifthPage.png";
import openingText from "./assets/firstPage/openingText.png";
import darkRec from "./assets/firstPage/darkRectangle.png";
import date from "./assets/firstPage/date.png"



import "./App.css";

function App() {
  return (
    <div>
      <div className="all-pages">
        <div className="reveal page" id="first-page">
            <img src={firstPage} />
            <img src={whiteStripe} className="white-stripe"/>
            <img src={openingText} className="opening-text"/>
            <div className="lower-banner">
              <img src={darkRec} className="dark-rec"/>
              <img src={date} className="date"/>
            </div>
        </div>
        <div className="page" id="second-page">
            <img src={secondPage} />

        </div>
        <div className="page" id="third-page">
            <img src={thirdPage} />

        </div>
        <div className="page" id="fourth-page">
            <img src={fourthPage} />

        </div>
        <div className="page" id="fifth-page">
            <img src={fifthPage} />

        </div>
      </div>
    </div>
  );
}

export default App;
