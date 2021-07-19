import { useState, useEffect } from 'react';

function Time({ onTime, direction, noRealTime }) {
  const [time, setTime] = useState({});

  useEffect(() => {
    const showTime = setInterval(() => getTime(), 1000);
    return () => { clearInterval(showTime); }
  });
  function controlTime(id) {
    if (id === 0) {
      if (direction) { return -1 }
      if (!direction) { return 1 }
    } else { return 0 }
  }
  function getTime() {
    const directionSecond = direction ? -1 : +1;
    let directionMinutes = 0;
    let directionHours = 0;
    const data = new Date();
    const seconds = data.getSeconds(noRealTime ? data.setSeconds(time.seconds + directionSecond) : '');
    directionMinutes = controlTime(seconds);
    const minutes = noRealTime ? time.minutes + directionMinutes : data.getMinutes();
    directionHours = controlTime(minutes);
    const timeNow = {
      seconds: seconds,
      minutes: minutes,
      hours: noRealTime ? time.hours + directionHours : data.getHours(),
    };
    setTime(timeNow);
    onTime(timeNow);
  }

  return (
    <p>{time.hours}:{time.minutes}:{time.seconds}</p>
  )
}
export default Time
