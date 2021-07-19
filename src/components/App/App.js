import { useState } from 'react';
import ButtonLog from '../ButtonLog/ButtonLog';
import ButtonChangeTime from '../ButtonChangeTime/ButtonChangeTime';
import Time from '../Time/Time';
import NoTime from '../NoTime/NoTime';
import './App.css';

function App() {
  const [time, setTime] = useState();
  const [noRealTime, setNoRealTime] = useState(false);
  const [directionTime, setDirectionTime] = useState(false);
  function handleTime(time) {
    setTime(time);
  }
  function handleNoTime(time) {
    setTime(time);
  }
  function handleChangeTime() {
    setNoRealTime(true);
    setDirectionTime(!directionTime);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Time</h1>
        {noRealTime ? (<NoTime
          onTime={handleNoTime}
          direction={directionTime}
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
