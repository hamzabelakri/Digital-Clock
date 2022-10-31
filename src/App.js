import React, { useEffect, useState} from "react";

import './App.css';

function App() {


  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  const [seconds, setSeconds] = useState()
  const ampm = hours>12? "PM" : "AM";



setTimeout(() => {
  setSeconds(new Date().getSeconds())

  }, 1000);
  

  return (
    <div>
    <h2>Digital Clock</h2>
    <div className="clock">
      <div>
        <span id="hour">{ hours < 10 ? "0" + hours : hours}</span>
        <span className="text">Hours</span>
      </div>
      <div>
        <span id="minutes">{minutes < 10 ? "0" + minutes : minutes}</span>
        <span className="text">Minutes</span>
      </div>
      <div>
        <span id="seconds">{seconds < 10 ? "0" + seconds : seconds}</span>
        <span className="text">Seconds</span>
      </div>
      <div>
        <span id="ampm">{ampm}</span>
      </div>
    </div>
    </div>
  );
}

export default App;
