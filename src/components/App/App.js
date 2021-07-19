import { useState } from 'react';
import ButtonLog from '../ButtonLog/ButtonLog';
import ButtonChangeTime from '../ButtonChangeTime/ButtonChangeTime';
import Time from '../Time/Time';
import NoTime from '../NoTime/NoTime';
import './App.css';

function App() {
  const [time, setTime] = useState();
  const [noTime, setNoTime] = useState(false);
  const [direction, setDirection] = useState(false);
  function handleTime(time) {
    setTime(time);
  }
  function handleNoTime(time) {
    setTime(time);
  }
  function handleChangeTime() {
    setNoTime(true);
    setDirection(!direction);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Time</h1>
        {noTime ? (<NoTime
          onTime={handleNoTime}
          direction={direction}
          time={time}
        />) :
          (<Time onTime={handleTime} />)}
        <ButtonLog time={time} />
        <ButtonChangeTime changeTime={handleChangeTime} />
      </header>
    </div>
  );
}

export default App;
