import React from 'react';
import './AnalogTime.css';

function AnalogTime({ hourRatio, minuteRatio, secondRatio }) {

  return (
    <div className="analogTime">
      <div className="hand hand_hour"
        style={{ transform: `translate(-50%) rotate(${hourRatio * 360}deg)` }}></div>
      <div className="hand hand_minute"
        style={{ transform: `translate(-50%) rotate(${minuteRatio * 360}deg)` }}></div>
      <div className="hand hand_second"
        style={{ transform: `translate(-50%) rotate(${secondRatio * 360}deg)` }}></div>
      <div className="number stroke1">
        <div className="digit1">1</div>
      </div>
      <div className="number stroke2">
        <div className="digit2">2</div>
      </div>
      <div className="number stroke3">
        <div className="digit3">3</div>
      </div>
      <div className="number stroke4">
        <div className="digit4">4</div>
      </div>
      <div className="number stroke5">
        <div className="digit5">5</div>
      </div>
      <div className="number stroke6">
        <div className="digit6">6</div>
      </div>
      <div className="number stroke7">
        <div className="digit7">7</div>
      </div>
      <div className="number stroke8">
        <div className="digit8">8</div>
      </div>
      <div className="number stroke9">
        <div className="digit9">9</div>
      </div>
      <div className="number stroke10">
        <div className="digit10">10</div>
      </div>
      <div className="number stroke11">
        <div className="digit11">11</div>
      </div>
      <div className="number stroke12">
        <div className="digit12">12</div>
      </div>
    </div>
  )
}

export default AnalogTime