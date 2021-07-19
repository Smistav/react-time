import { useState } from 'react';
import ButtonLog from '../ButtonLog/ButtonLog';
import Time from '../Time/Time';
import './App.css';

function App() {
  const [time, setTime] = useState();

  function handleTime(time) {
    setTime(time);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Time</h1>
        <Time onTime={handleTime} />
        <ButtonLog time={time} />
      </header>
    </div>
  );
}

export default App;
