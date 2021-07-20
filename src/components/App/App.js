import { useState } from 'react';
import ButtonLog from '../ButtonLog/ButtonLog';
import ButtonChangeTime from '../ButtonChangeTime/ButtonChangeTime';
import Time from '../Time/Time';
import './App.css';
import AnalogTime from '../AnalogTime/AnalogTime';

function App() {
  const [time, setTime] = useState();
  const [analogTime, setAnalogTime] = useState({});
  const [noRealTime, setNoRealTime] = useState(false);
  const [directionTime, setDirectionTime] = useState(false);

  function handleTime(time) {
    setTime(time);
    const analog = {
      seconds: time.seconds / 60,
      minutes: time.minutes / 60,
      hours: time.hours / 12
    }
    setAnalogTime(analog);
  }
  function handleChangeTime() {
    setNoRealTime(true);
    setDirectionTime(!directionTime);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Time</h1>
        <Time
          onTime={handleTime}
          direction={directionTime}
          noRealTime={noRealTime}
        />
        <ButtonLog time={time} />
        <ButtonChangeTime changeTime={handleChangeTime} />
        <AnalogTime
          secondRatio={analogTime.seconds}
          minuteRatio={analogTime.minutes}
          hourRatio={analogTime.hours} />
      </header>
    </div>
  );
}

export default App;
